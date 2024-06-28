"use client";

import { useSession } from "next-auth/react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Image from "next/image";
import axios from "axios";

const schema = yup.object({
  text: yup.string().required("Este campo é obrigatório."),
});

export default function Form({ findAllPosts }: { findAllPosts: () => void }) {
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
      name: session?.user?.name,
      email: session?.user?.email,
      imageUrl: session?.user?.image,
      text: data.text,
    };

    await axios.post("https://api-tweetify.onrender.com/post", formData).then(() => {
      reset();
      findAllPosts();
    });
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col items-end gap-2.5 rounded-xl bg-gray-200 p-2.5"
    >
      <div className="flex w-full items-center gap-2.5">
        <Image
          src={session?.user?.image ?? ""}
          alt={session?.user?.name ?? ""}
          height={350}
          width={350}
          className="min-w-10 max-w-10 rounded-lg bg-gray-400"
        />

        <textarea
          rows={1}
          placeholder="O que está acontecendo ?"
          {...register("text")}
          className={`w-full resize-none rounded-lg border border-solid bg-transparent px-2.5 py-2 outline-none [&::-webkit-scrollbar]:hidden ${errors.text ? "border-red-600" : "border-gray-400"}`}
        ></textarea>
      </div>

      <button
        type="submit"
        className="w-fit rounded-lg bg-background px-2.5 py-0.5 text-white active:bg-gray-400"
      >
        Publicar
      </button>
    </form>
  );
}
