"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import axios from "axios";
import Link from "next/link";
import { LuMessageCircle, LuShare2, LuThumbsUp } from "react-icons/lu";

interface ActionButtonsProps {
  id: string;
  likes: number;
  comments: number;
}

export default function ActionButtons({
  id,
  likes,
  comments,
}: ActionButtonsProps) {
  const [like, setLike] = useState(false);
  const [likeCount, setLikeCount] = useState(likes);
  const pathname = usePathname();

  useEffect(() => {
    const likedTweets = JSON.parse(localStorage.getItem("likedTweets") || "[]");
    if (likedTweets.includes(id)) {
      setLike(true);
    }
  }, [id]);

  const handleLikeClick = async () => {
    if (!like) {
      await axios.post(`https://api-tweetify.onrender.com/tweet/${id}/like`);
      setLike(true);
      setLikeCount(likeCount + 1);

      const likedTweets = JSON.parse(
        localStorage.getItem("likedTweets") || "[]",
      );
      likedTweets.push(id);
      localStorage.setItem("likedTweets", JSON.stringify(likedTweets));
    }
  };

  return (
    <div className="flex w-full items-center justify-center gap-2.5">
      <button
        onClick={handleLikeClick}
        disabled={like}
        className={`flex items-center gap-1 text-gray-400 ${like ? "cursor-not-allowed" : ""}`}
      >
        <LuThumbsUp
          className={`${like ? "fill-background text-background" : ""}`}
        />
        {likeCount}
      </button>

      {pathname === `/comments/${id}` ? (
        <div className="flex items-center gap-1 text-gray-400">
          <LuMessageCircle /> {comments}
        </div>
      ) : (
        <Link
          href={`/comments/${id}`}
          className="flex items-center gap-1 text-gray-400"
        >
          <LuMessageCircle /> {comments}
        </Link>
      )}

      <button className="text-gray-400">
        <LuShare2 />
      </button>
    </div>
  );
}
