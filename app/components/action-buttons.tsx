"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import axios from "axios";
import Link from "next/link";
import { LuMessageCircle, LuShare2, LuThumbsUp } from "react-icons/lu";

interface ActionButtonsProps {
  id: string;
  name: string;
  text: string;
  likes: number;
  comments: number;
}

export default function ActionButtons({
  id,
  name,
  text,
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

  const handleShareClick = () => {
    if (navigator.share) {
      const tweetUrl = `/comments/${id}`;
      navigator.share({
        title: document.title,
        text: `Confira este tweet de ${name}: ${text}`,
        url: tweetUrl,
      });
    }
  };

  return (
    <div className="flex w-full items-center justify-center gap-2.5">
      <button
        onClick={handleLikeClick}
        disabled={like}
        className={`flex items-center gap-1 text-gray-400 active:text-background ${like ? "cursor-not-allowed" : ""}`}
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
          className="flex items-center gap-1 text-gray-400 active:text-background"
        >
          <LuMessageCircle /> {comments}
        </Link>
      )}

      <button
        onClick={handleShareClick}
        className="text-gray-400 active:text-background"
      >
        <LuShare2 />
      </button>
    </div>
  );
}