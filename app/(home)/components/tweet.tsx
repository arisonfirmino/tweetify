import { Tweet as TweetTypes } from "./app";
import { LuDot } from "react-icons/lu";
import User from "./user";
import formatCreatedAt from "@/app/formatCreatedAt";
import ActionButtons from "./action-buttons";

interface TweetProps {
  tweet: TweetTypes;
}

export default function Tweet({ tweet }: TweetProps) {
  return (
    <div className="flex flex-col gap-2.5 border-b border-solid border-black border-opacity-20 pb-2.5">
      <div className="flex items-start">
        <User
          name={tweet.name}
          username={tweet.username}
          image={tweet.imageUrl}
        />

        <p className="mt-1 flex items-center text-gray-400">
          <LuDot />
          <span className="text-xs">
            há {formatCreatedAt(tweet.created_at)}
          </span>
        </p>
      </div>

      <p className="text-base">{tweet.text}</p>

      <ActionButtons
        likes={tweet.likes}
        comments={tweet.comments.length ?? 0}
      />
    </div>
  );
}
