"use client";

import { LuPlus, LuX } from "react-icons/lu";
import Image from "next/image";
import { signOut } from "next-auth/react";
import { useState } from "react";

interface HeaderProps {
  image: string;
  name: string;
  setShowForm: () => void;
}

export default function Header({ image, name, setShowForm }: HeaderProps) {
  const [showSignOut, setShowSignOut] = useState(false);
  const handleSignOutClick = () => signOut();

  return (
    <header className="flex items-center justify-between">
      <button
        onMouseEnter={() => setShowSignOut(true)}
        onMouseLeave={() => setShowSignOut(false)}
        onClick={handleSignOutClick}
        className="flex h-10 w-10 items-center justify-center rounded-full bg-red-600 text-white"
      >
        {showSignOut ? (
          <LuX size={20} />
        ) : (
          <Image
            src={image}
            alt={name}
            height={330}
            width={330}
            className="h-10 w-10 rounded-full"
          />
        )}
      </button>

      <Image
        src="/logo.png"
        alt="Tweetify"
        height={330}
        width={330}
        className="w-12"
      />

      <button
        onClick={setShowForm}
        className="flex h-10 w-10 items-center justify-center rounded-full bg-background text-white active:bg-gray-400"
      >
        <LuPlus size={20} />
      </button>
    </header>
  );
}
