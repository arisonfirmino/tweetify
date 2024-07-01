"use client";

import { useSession } from "next-auth/react";
import Image from "next/image";
import ActionButtons from "./action-buttons";
import { parseISO, format } from "date-fns";
import DeleteButton from "./delete-button";
import { motion } from "framer-motion";

interface PostProps {
  id: string;
  name: string;
  email: string;
  imageUrl: string | null;
  text: string;
  likes: number;
  comments: [];
  created_at: string;
  index?: number;
  handleClick?: (id: string) => void;
  findAllPosts?: () => void;
}

export default function Post({
  id,
  name,
  email,
  imageUrl,
  text,
  likes,
  comments,
  created_at,
  handleClick,
  index = 0,
  findAllPosts,
}: PostProps) {
  const { data } = useSession();

  const date = parseISO(created_at);
  const formattedDate = format(date, "dd MMM 'at' h:mm a");

  return (
    <motion.section
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: index * 0.3 }}
      className="relative flex flex-col gap-2.5 rounded-xl bg-gray-100 p-2.5"
    >
      <div className="flex items-center gap-2.5">
        <Image
          src={imageUrl ?? ""}
          alt={name}
          height={350}
          width={350}
          className="min-w-10 max-w-10 rounded-lg bg-gray-400"
        />

        <span>
          <h3 className="text-base font-medium">{name}</h3>
          <p className="text-xs text-gray-400">{formattedDate}</p>
        </span>
      </div>

      <p className="border-y border-solid border-gray-400 py-2.5 text-sm">
        {text}
      </p>

      <ActionButtons
        id={id}
        name={name}
        likes={likes}
        comments={comments}
        findAllPosts={findAllPosts}
      />

      {data?.user?.email === email && (
        <DeleteButton id={id} handleClick={() => handleClick?.(id)} />
      )}
    </motion.section>
  );
}
