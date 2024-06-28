"use client";

import { useState } from "react";
import { EllipsisIcon, Trash2Icon } from "lucide-react";
import { motion } from "framer-motion";

export default function DeleteButton({
  id,
  handleClick,
}: {
  id: string;
  handleClick: (id: string) => void;
}) {
  const [showDeleteButton, setShowDeleteButton] = useState(false);

  return (
    <>
      <button
        onClick={() => setShowDeleteButton(!showDeleteButton)}
        className="absolute right-0 top-0 m-3.5 text-gray-600 active:text-gray-400"
      >
        <EllipsisIcon size={16} />
      </button>

      {showDeleteButton && (
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.2 }}
          className="absolute right-0 top-8 mr-2.5 rounded bg-gray-300"
        >
          <button
            onClick={() => handleClick(id)}
            className="flex items-center gap-1.5 px-2.5 py-1 text-xs text-red-600 active:text-gray-400"
          >
            Deletar
            <Trash2Icon size={12} />
          </button>
        </motion.div>
      )}
    </>
  );
}
