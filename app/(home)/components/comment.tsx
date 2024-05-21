import formatCreatedAt from "@/app/formatCreatedAt";
import { LuDot } from "react-icons/lu";
import User from "./user";

interface CommentProps {
  name: string;
  username: string;
  image: string;
  text: string;
  created_at: string;
}

export default function Comment({
  name,
  username,
  image,
  text,
  created_at,
}: CommentProps) {
  return (
    <div className="flex flex-col gap-2.5 rounded-xl p-2 xl:duration-500 xl:hover:bg-gray-200">
      <div className="flex items-start">
        <User name={name} username={username} image={image} />

        <p className="mt-1 flex items-center text-gray-400">
          <LuDot />
          <span className="text-xs">há {formatCreatedAt(created_at)}</span>
        </p>
      </div>

      <p>{text}</p>
    </div>
  );
}
