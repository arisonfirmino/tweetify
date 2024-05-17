import { FcGoogle } from "react-icons/fc";
import { SiApple } from "react-icons/si";
import { FaRegCopyright } from "react-icons/fa6";
import Image from "next/image";

interface LoginPageProps {
  handleLogInClick: () => void;
}

export default function LoginPage({ handleLogInClick }: LoginPageProps) {
  return (
    <div className="flex h-screen w-full items-center justify-center gap-20 p-5">
      <div className="hidden lg:flex">
        <Image
          src="/test.png"
          alt="teste"
          height={991}
          width={600}
          className="w-96"
        />
      </div>

      <div className="flex w-full flex-col gap-5 rounded border border-solid border-black border-opacity-20 px-10 py-5 md:w-[500px] lg:w-auto">
        <h1 className="satisfy mb-5 text-center text-5xl font-bold text-black text-opacity-85">
          Tweetify
        </h1>

        <div className="flex w-full flex-col items-center gap-2.5">
          <button
            onClick={handleLogInClick}
            className="flex w-full items-center justify-center gap-2 rounded-lg bg-gray-200 p-2.5 text-lg active:bg-gray-300"
          >
            <FcGoogle size={20} /> Sign in with Google
          </button>

          <p>ou</p>

          <button className="flex w-full items-center justify-center gap-2 rounded-lg bg-gray-200 p-2.5 text-lg active:bg-gray-300">
            <SiApple size={20} /> Sign in with Apple
          </button>
        </div>

        <p className="text-center text-sm text-gray-400">
          faça login para acessar a aplicação
        </p>
      </div>

      <p className="absolute bottom-0 left-1/2 mb-5 flex -translate-x-1/2 items-center gap-1 text-nowrap text-xs font-light text-gray-400">
        <FaRegCopyright size={10} /> 2024 Arison. All Rights Reserved
      </p>
    </div>
  );
}
