"use client";

import { useSession } from "next-auth/react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { ArrowUpIcon } from "lucide-react";
import axios from "axios";

const schema = yup.object({
  text: yup.string().required("Este campo é obrigatório."),
});

export default function CommentForm({
  id,
  findPost,
}: {
  id: string;
  findPost: () => void;
}) {
  const { data: session } = useSession();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: { text: string }) => {
    const formData = {
      postId: id,
      name: session?.user?.name,
      email: session?.user?.email,
      imageUrl: session?.user?.image,
      text: data.text,
    };

    await axios.post("https://api-tweetify.onrender.com/comment", formData).then(() => {
      reset();
      findPost();
    });
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="fixed bottom-0 left-1/2 w-full -translate-x-1/2 transform border-solid border-gray-400 bg-white p-2.5 md:max-w-[600px] md:border-x"
    >
      <div
        className={`flex items-center gap-1.5 rounded-lg border border-solid p-2.5 ${errors.text ? "border-red-600" : "border-gray-400"}`}
      >
        <textarea
          rows={1}
          placeholder="Deixe um comentário"
          {...register("text")}
          className="w-full resize-none bg-transparent outline-none [&::-webkit-scrollbar]:hidden"
        ></textarea>

        <button type="submit" className="text-gray-600 active:text-gray-400">
          <ArrowUpIcon size={18} />
        </button>
      </div>
    </form>
  );
}
