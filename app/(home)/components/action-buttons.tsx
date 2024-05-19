import { LuMessageCircle, LuShare2, LuStar } from "react-icons/lu";

interface ActionButtonsProps {
  likes: number;
  comments: number;
}

export default function ActionButtons({ likes, comments }: ActionButtonsProps) {
  return (
    <div className="flex w-full items-center justify-center gap-2.5">
      <button className="flex items-center gap-1 text-gray-400">
        <LuStar /> {likes}
      </button>

      <div className="flex items-center gap-1 text-gray-400">
        <LuMessageCircle /> {comments}
      </div>

      <button className="text-gray-400">
        <LuShare2 />
      </button>
    </div>
  );
}
