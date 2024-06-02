import Image from "next/image";
import { FaRegCopyright } from "react-icons/fa6";

export default function Redirect() {
  return (
    <div className="relative flex h-screen w-full flex-col items-center justify-center">
      <div className="flex flex-col items-center gap-5 rounded border border-solid border-black border-opacity-20 px-10 py-5">
        <Image
          src="/logo.png"
          alt="Tweetify"
          height={330}
          width={330}
          className="w-12"
        />

        <h1 className="satisfy mb-5 text-center text-5xl font-bold text-black text-opacity-85">
          Tweetify
        </h1>

        <p>
          clique{" "}
          <a
            href="https://tweetify-kappa.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-700 underline active:text-gray-400"
          >
            aqui
          </a>{" "}
          para acessar a aplicação
        </p>
      </div>

      <p className="absolute bottom-0 left-1/2 mb-5 flex -translate-x-1/2 items-center gap-1 text-nowrap text-xs font-light text-gray-400">
        <FaRegCopyright size={10} /> 2024 Arison. All Rights Reserved
      </p>
    </div>
  );
}
