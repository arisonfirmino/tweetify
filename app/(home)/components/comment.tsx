import formatCreatedAt from "@/app/formatCreatedAt";
import { LuDot } from "react-icons/lu";
import User from "./user";
import UndoButton from "@/app/components/undo-button";

interface CommentProps {
  name: string;
  username: string;
  image: string;
  text: string;
  created_at: string;
  showUndoButton?: boolean;
  handleDelete: () => void;
}

export default function Comment({
  name,
  username,
  image,
  text,
  created_at,
  showUndoButton,
  handleDelete,
}: CommentProps) {
  return (
    <div className="relative flex flex-col gap-2.5 rounded-xl p-2">
      <div className="flex items-start">
        <User name={name} username={username} image={image} />

        <p className="mt-1 flex items-center text-gray-400">
          <LuDot />
          <span className="text-xs">há {formatCreatedAt(created_at)}</span>
        </p>
      </div>

      <p>{text}</p>

      {showUndoButton && <UndoButton handleDelete={handleDelete} />}
    </div>
  );
}
