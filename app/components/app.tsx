import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Form from "./form";
import Header from "./header";
import Search from "./search";
import axios from "axios";
import Tweet from "./tweet";

export interface AppProps {
  image: string;
  name: string;
}

export interface Tweet {
  id: string;
  name: string;
  username: string;
  imageUrl: string;
  text: string;
  likes: number;
  comments: [];
  created_at: string;
}

export interface FormData {
  name: string;
  username: string;
  imageUrl: string;
  text: string;
}

export default function App({ image, name }: AppProps) {
  const [showForm, setShowForm] = useState(false);
  const [tweets, setTweets] = useState<Tweet[]>([]);
  const [lastAddedTweetId, setLastAddedTweetId] = useState<string | null>(null);

  useEffect(() => {
    const findTweets = async () => {
      const response = await axios.get(
        "https://api-tweetify.onrender.com/tweet",
      );
      setTweets(response.data);
    };

    findTweets();
  }, []);

  useEffect(() => {
    if (lastAddedTweetId) {
      const timer = setTimeout(() => {
        setLastAddedTweetId(null);
      }, 10000);

      return () => clearTimeout(timer);
    }
  }, [lastAddedTweetId]);

  const updateTweets = async () => {
    const response = await axios.get("https://api-tweetify.onrender.com/tweet");
    setTweets(response.data);
  };

  const submitForm = async (data: FormData) => {
    const response = await axios.post(
      "https://api-tweetify.onrender.com/tweet",
      data,
    );
    setLastAddedTweetId(response.data.id);
    updateTweets();
  };

  const deleteTweet = async (id: string) => {
    await axios.delete(`https://api-tweetify.onrender.com/tweet/${id}`);
    updateTweets();
  };

  return (
    <div className="flex min-h-screen w-full flex-col gap-5 border-solid border-black border-opacity-20 px-5 pt-2.5 md:max-w-[600px] md:border-x">
      <Search />
      <Header
        image={image}
        name={name}
        setShowForm={() => setShowForm(!showForm)}
      />

      {showForm && <Form name={name} image={image} submitForm={submitForm} />}

      <div className="flex items-center gap-5">
        <button className="w-full rounded-xl bg-background px-5 py-1.5 text-white">
          Feed
        </button>

        <button className="w-full rounded-xl px-5 py-1.5">Curtidos</button>
      </div>

      <div className="flex flex-col gap-5">
        {tweets
          .slice()
          .reverse()
          .map((tweet, index) => (
            <motion.div
              key={tweet.id}
              initial={{ opacity: 0, scale: 0.2 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.3 }}
            >
              <Tweet
                tweet={tweet}
                showUndoButton={tweet.id === lastAddedTweetId}
                handleDelete={() => deleteTweet(tweet.id)}
              />
            </motion.div>
          ))}
      </div>
    </div>
  );
}
