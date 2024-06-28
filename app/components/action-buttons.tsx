import axios from "axios";
import { MessageCircleIcon, Share2Icon, ThumbsUpIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function ActionButtons({
  id,
  likes,
  comments,
  findAllPosts,
}: {
  id: string;
  likes: number;
  comments: [];
  findAllPosts?: () => void;
}) {
  const pathname = usePathname();

  const likePost = async () => {
    await axios.post("https://api-tweetify.onrender.com/like", { postId: id }).then(() => {
      if (findAllPosts) {
        findAllPosts();
      }
    });
  };

  return (
    <div
      className={`flex items-center gap-2.5 text-base ${pathname === `/comments/${id}` ? "justify-start" : "justify-center"}`}
    >
      <button
        onClick={likePost}
        className="flex items-center gap-1.5 text-gray-400"
      >
        <ThumbsUpIcon size={16} /> {likes}
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

      <button className="flex items-center gap-1.5 text-gray-400">
        <Share2Icon size={16} />
      </button>
    </div>
  );
}
