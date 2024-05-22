"use client";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { LuArrowUp } from "react-icons/lu";
import { FormData } from "./app";
import { useSession } from "next-auth/react";

const schema = yup.object({
  text: yup.string().required(),
});

interface AddCommentProps {
  submitForm: (data: FormData) => void;
}

export default function AddComment({ submitForm }: AddCommentProps) {
  const { data } = useSession();

  const name = data?.user?.name ?? "";
  const username = name.toLowerCase().replace(/\s/g, "");
  const image = data?.user?.image ?? "";

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: { text: string }) => {
    const formData = {
      name,
      username,
      imageUrl: image,
      text: data.text,
    };

    submitForm(formData);
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="fixed bottom-0 left-0 right-0 mx-auto w-full max-w-[600px] border-solid border-black border-opacity-20 bg-white p-2.5 md:border-x"
    >
      <div
        className={`flex w-full items-center gap-1.5 rounded-full bg-gray-200 px-2.5 py-0.5 ${errors.text ? "border border-solid border-red-600" : ""}`}
      >
        <input
          type="text"
          placeholder="Deixe um comentário"
          {...register("text")}
          className="w-full bg-transparent p-2.5 outline-none"
        />
        <button
          className={`flex items-center justify-center rounded-full p-1.5 active:bg-gray-400 ${errors.text ? "bg-red-600 text-white" : "bg-background text-[#3a4b5b]"}`}
        >
          <LuArrowUp size={18} />
        </button>
      </div>
    </form>
  );
}
