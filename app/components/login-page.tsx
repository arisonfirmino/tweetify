"use client";

import { signIn } from "next-auth/react";
import { CopyrightIcon } from "lucide-react";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa6";
import Title from "./title";

export default function LoginPage() {
  const handleLogInClick = () => signIn("google");

  return (
    <main className="relative flex min-h-screen w-full flex-col items-center justify-center gap-5">
      <Title />

      <div className="flex flex-col items-center gap-2.5 rounded-lg border border-solid border-gray-400 p-5">
        <button
          onClick={handleLogInClick}
          className="flex items-center justify-center gap-1.5 rounded-full border border-solid border-gray-400 px-5 py-2.5 text-lg active:bg-gray-200"
        >
          <FcGoogle size={24} />
          Sign in with Google
        </button>

        <p>ou</p>

        <button className="flex cursor-not-allowed items-center justify-center gap-1.5 rounded-full border border-solid border-gray-400 px-5 py-2.5 text-lg active:bg-gray-200">
          <FaApple size={24} />
          Sign in with Apple
        </button>

        <p className="mt-5 text-sm lowercase text-gray-500">
          Faça login para acessar a aplicação
        </p>
      </div>

      <p className="absolute bottom-0 mb-5 flex items-center gap-1 text-xs text-gray-600">
        <CopyrightIcon size={12} />
        2024 Arison. All Rights Reserved
      </p>
    </main>
  );
}
