import { LuLogOut, LuPlus } from "react-icons/lu";
import Image from "next/image";
import { signOut } from "next-auth/react";

interface HeaderProps {
  image: string;
  name: string;
  setShowForm: () => void;
}

export default function Header({ image, name, setShowForm }: HeaderProps) {
  const handleSignOutClick = () => signOut();

  return (
    <header className="flex items-center justify-between">
      <button onClick={handleSignOutClick}>
        <Image
          src={image}
          alt={name}
          height={330}
          width={330}
          className="h-10 w-10 rounded-full"
        />
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
