"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Container from "@/app/components/container";
import axios from "axios";
import Tweet from "@/app/(home)/components/tweet";
import User from "@/app/(home)/components/user";
import { LuArrowLeft, LuDot } from "react-icons/lu";
import formatCreatedAt from "@/app/formatCreatedAt";
import Link from "next/link";

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

  return (
    <Container>
      <div className="flex min-h-screen w-full flex-col gap-2.5 border-solid border-black border-opacity-20 px-5 pt-2.5 md:max-w-[600px] md:border-x">
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
          .map((comment) => (
            <div
              key={comment.id}
              className="flex flex-col gap-2.5 rounded-xl p-2 xl:duration-500 xl:hover:bg-gray-200"
            >
              <div className="flex items-start">
                <User
                  name={comment.name}
                  username={comment.username}
                  image={comment.imageUrl}
                />

                <p className="mt-1 flex items-center text-gray-400">
                  <LuDot />
                  <span className="text-xs">
                    há {formatCreatedAt(comment.created_at)}
                  </span>
                </p>
              </div>

              <p>{comment.text}</p>
            </div>
          ))}
      </div>
    </Container>
  );
}
