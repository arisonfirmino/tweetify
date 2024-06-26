"use client";

import { useSession } from "next-auth/react";
import { parseISO, format } from "date-fns";
import Image from "next/image";
import DeleteButton from "./delete-button";
import { motion } from "framer-motion";

interface CommentProps {
  id: string;
  name: string;
  email: string;
  imageUrl: string | undefined;
  text: string;
  created_at: string;
  index?: number;
  handleClick?: (id: string) => void;
}

export default function Comment({
  id,
  name,
  email,
  imageUrl,
  text,
  created_at,
  index = 0,
  handleClick,
}: CommentProps) {
  const { data } = useSession();

  const date = parseISO(created_at);
  const formattedDate = format(date, "dd MMM 'at' h:mm a");

  return (
    <motion.section
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: index * 0.3 }}
      className="relative flex flex-col gap-2.5"
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

      <p className="border-b border-solid border-gray-400 pb-2.5 text-sm">
        {text}
      </p>

      {data?.user?.email === email && (
        <DeleteButton id={id} handleClick={() => handleClick?.(id)} />
      )}
    </motion.section>
  );
}
