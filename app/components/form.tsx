"use client";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { motion } from "framer-motion";
import User from "./user";
import { FormData } from "./app";

const schema = yup.object({
  text: yup.string().required("Este campo é obrigatório."),
});

interface FormProps {
  name: string;
  image: string;
  submitForm: (data: FormData) => void;
}

export default function Form({ image, name, submitForm }: FormProps) {
  const username = name.toLowerCase().replace(/\s/g, "");

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
    <motion.div
      initial={{ opacity: 0, scale: 0.2 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col gap-2.5 rounded-3xl bg-gray-200 p-2.5"
    >
      <User name={name} username={username} image={image} />

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

        <button className="rounded-full bg-background px-5 py-1.5 text-white active:bg-gray-400">
          Publicar
        </button>
      </form>
    </motion.div>
  );
}
