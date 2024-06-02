"use client";

import { useState } from "react";
import Image from "next/image";
import { FaRegCopyright } from "react-icons/fa6";
import { LuCopy } from "react-icons/lu";

export default function Redirect() {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    const url = "https://tweetify-kappa.vercel.app";
    navigator.clipboard.writeText(url).then(() => {
      console.log("Link copied to clipboard:", url);
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
      }, 5000);
    });
  };

  return (
    <div className="relative flex h-screen w-full flex-col items-center justify-center p-10">
      <div className="flex w-full flex-col items-center gap-5 rounded border border-solid border-black border-opacity-20 px-10 py-5 xl:max-w-[600px]">
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

        <p className="text-center">
          Olá! Para garantir uma experiência de login suave e sem problemas,
          recomendo acessar a aplicação usando um navegador externo.
        </p>

        <p className="text-center">
          Digite o seguinte URL na barra de endereços do navegador:
        </p>

        <div className="relative flex items-center justify-center gap-2.5 rounded border border-solid border-black border-opacity-20 px-2.5 py-1">
          <p>tweetify-kappa.vercel.app</p>

          <button onClick={copyToClipboard} className="active:text-gray-400">
            <LuCopy size={16} />
          </button>

          {copied && (
            <p className="absolute -top-5 text-sm text-gray-400">copiado</p>
          )}
        </div>
      </div>

      <p className="absolute bottom-0 left-1/2 mb-5 flex -translate-x-1/2 items-center gap-1 text-nowrap text-xs font-light text-gray-400">
        <FaRegCopyright size={10} /> 2024 Arison. All Rights Reserved
      </p>
    </div>
  );
}
