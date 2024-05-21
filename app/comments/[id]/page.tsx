"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Container from "@/app/components/container";
import axios from "axios";
import Tweet from "@/app/(home)/components/tweet";
import { LuArrowLeft } from "react-icons/lu";
import Link from "next/link";
import AddComment from "@/app/components/add-comment";
import { FormData } from "@/app/(home)/components/app";
import Comment from "@/app/(home)/components/comment";
import { motion } from "framer-motion";

interface Tweet {
  id: string;
  name: string;
  username: string;
  imageUrl: string;
  text: string;
  likes: number;
  comments: [];
  created_at: string;
}

interface Comments {
  id: string;
  name: string;
  username: string;
  imageUrl: string;
  text: string;
  created_at: string;
}

export default function CommentPage() {
  const { id } = useParams<{ id: string }>();

  const [tweet, setTweet] = useState<Tweet | null>(null);
  const [comments, setComments] = useState<Comments[]>([]);

  useEffect(() => {
    const findTweet = async () => {
      const response = await axios.get(
        `https://api-tweetify.onrender.com/tweet/${id}`,
      );
      setTweet(response.data);
      setComments(response.data.comments);
    };

    findTweet();
  }, [id]);

  const updateComments = async () => {
    const response = await axios.get(
      `https://api-tweetify.onrender.com/tweet/${id}`,
    );
    setComments(response.data.comments);
  };

  const submitForm = async (data: FormData) => {
    await axios.post(`https://api-tweetify.onrender.com/comment/${id}`, data);
    updateComments();
  };

  return (
    <Container>
      <div className="relative flex min-h-screen w-full flex-col gap-2.5 border-solid border-black border-opacity-20 px-5 pb-20 pt-2.5 md:max-w-[600px] md:border-x">
        <div className="relative flex items-center justify-center gap-2 pb-3.5 text-lg font-bold">
          <Link href="/" className="absolute left-0 active:text-gray-400">
            <LuArrowLeft />
          </Link>
          Publicação
        </div>

        {tweet && <Tweet tweet={tweet} />}

        {comments
          .slice()
          .reverse()
          .map((comment, index) => (
            <motion.div
              key={comment.id}
              initial={{ opacity: 0, scale: 0.2 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.3 }}
            >
              <Comment
                name={comment.name}
                username={comment.username}
                image={comment.imageUrl}
                text={comment.text}
                created_at={comment.created_at}
              />
            </motion.div>
          ))}

        <AddComment submitForm={submitForm} />
      </div>
    </Container>
  );
}
