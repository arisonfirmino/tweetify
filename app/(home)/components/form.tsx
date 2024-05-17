"use client";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { motion } from "framer-motion";
import Image from "next/image";

const schema = yup.object({
  text: yup.string().required("Este campo é obrigatório."),
});

interface FormProps {
  name: string;
  image: string;
}

export default function Form({ image, name }: FormProps) {
  const username = name.toLowerCase().replace(/\s/g, "");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: any) => {
    console.log(data);
    reset();
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col gap-2.5 rounded-3xl bg-gray-200 p-2.5"
    >
      <div className="flex items-center gap-2.5">
        <Image
          src={image}
          alt={name}
          height={330}
          width={330}
          className="h-10 w-10 rounded-full"
        />

        <div className="flex flex-col">
          <h3 className="text-base font-medium">{name}</h3>
          <p className="text-xs text-gray-500">@{username}</p>
        </div>
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col items-end gap-2.5"
      >
        <textarea
          rows={3}
          placeholder="O que está pensando ?"
          {...register("text")}
          className={`w-full border-b border-solid bg-transparent outline-none ${errors.text ? "border-red-600" : "border-black border-opacity-20"}`}
        ></textarea>

        {errors.text && (
          <p className="w-full text-xs text-red-600">{errors.text.message}</p>
        )}

        <button className="bg-background rounded-full px-5 py-1.5 text-white active:bg-gray-400">
          Publicar
        </button>
      </form>
    </motion.div>
  );
}
