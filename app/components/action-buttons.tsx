"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import axios from "axios";
import { MessageCircleIcon, Share2Icon, ThumbsUpIcon } from "lucide-react";
import Link from "next/link";

export default function ActionButtons({
  id,
  name,
  likes,
  comments,
  findAllPosts,
}: {
  id: string;
  name: string;
  likes: number;
  comments: [];
  findAllPosts?: () => void;
}) {
  const pathname = usePathname();

  const [likedPost, setLikedPost] = useState(() => {
    const savedLike = localStorage.getItem(`liked_${id}`);
    return savedLike ? JSON.parse(savedLike) : false;
  });

  useEffect(() => {
    localStorage.setItem(`liked_${id}`, JSON.stringify(likedPost));
  }, [id, likedPost]);

  const likePost = async () => {
    await axios
      .post("https://api-tweetify.onrender.com/like", { postId: id })
      .then(() => {
        setLikedPost(true);

        if (findAllPosts) {
          findAllPosts();
        }
      });
  };

  const sharePost = () => {
    if (navigator.share) {
      navigator.share({
        title: `Confira essa publicação de ${name}`,
        url: `https://tweetify-kappa.vercel.app/comments/${id}`,
      });
    } else {
      alert("O recurso de compartilhamento não é suportado em seu navegador.");
    }
  };

  return (
    <div
      className={`flex items-center gap-2.5 text-base ${pathname === `/comments/${id}` ? "justify-start" : "justify-center"}`}
    >
      <button
        onClick={likePost}
        className={`flex items-center gap-1.5 text-gray-400 ${likedPost ? "pointer-events-none cursor-not-allowed" : ""}`}
      >
        {likedPost ? (
          <ThumbsUpIcon className="fill-background text-background" size={16} />
        ) : (
          <ThumbsUpIcon size={16} />
        )}
        {likes}
      </button>

      {pathname === `/comments/${id}` ? (
        <div className="flex items-center gap-1.5 text-gray-400">
          <MessageCircleIcon size={16} /> {comments.length}
        </div>
      ) : (
        <Link
          href={`/comments/${id}`}
          className="flex items-center gap-1.5 text-gray-400 active:text-gray-300"
        >
          <MessageCircleIcon size={16} /> {comments.length}
        </Link>
      )}

      <button
        onClick={sharePost}
        className="flex items-center gap-1.5 text-gray-400"
      >
        <Share2Icon size={16} />
      </button>
    </div>
  );
}
