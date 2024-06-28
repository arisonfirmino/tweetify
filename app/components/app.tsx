"use client";

import { useEffect, useState } from "react";
import Title from "./title";
import Search from "./search";
import Form from "./form";
import SepSession from "./sep-session";
import { ChevronDownIcon } from "lucide-react";
import Post from "./post";
import axios from "axios";
import SignOutButton from "./signOut-button";

export interface PostProps {
  id: string;
  name: string;
  email: string;
  imageUrl: string | null;
  text: string;
  likes: number;
  comments: [];
  created_at: string;
}

export default function App() {
  const [posts, setPosts] = useState<PostProps[]>([]);

  useEffect(() => {
    findAllPosts();
  }, []);

  const findAllPosts = async () => {
    await axios.get("https://api-tweetify.onrender.com/posts").then((response) => {
      setPosts(response.data);
    });
  };

  const deletePost = async (id: string) => {
    await axios.delete(`https://api-tweetify.onrender.com/post?id=${id}`).then(() => {
      if (findAllPosts) {
        findAllPosts();
      }
    });
  };

  return (
    <main className="relative flex min-h-screen w-full flex-col gap-5 border-solid border-gray-400 p-5 md:max-w-[600px] md:border-x">
      <SignOutButton />
      <Title />
      <Search />
      <Form findAllPosts={findAllPosts} />

      <SepSession>
        Feed <ChevronDownIcon size={14} />
      </SepSession>

      <div className="flex flex-col gap-5">
        {posts.map((post, index) => (
          <Post
            key={post.id}
            id={post.id}
            name={post.name}
            email={post.email}
            imageUrl={post.imageUrl}
            text={post.text}
            likes={post.likes}
            comments={post.comments}
            created_at={post.created_at}
            index={index}
            handleClick={() => deletePost(post.id)}
            findAllPosts={findAllPosts}
          />
        ))}
      </div>
    </main>
  );
}
