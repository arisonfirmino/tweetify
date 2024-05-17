import { LuPlus } from "react-icons/lu";
import Image from "next/image";

interface HeaderProps {
  image: string;
  name: string;
}

export default function Header({ image, name }: HeaderProps) {
  return (
    <header className="flex items-center justify-between">
      <Image
        src={image}
        alt={name}
        height={330}
        width={330}
        className="h-10 w-10 rounded-full"
      />

      <Image
        src="/logo.png"
        alt="Tweetify"
        height={330}
        width={330}
        className="w-12"
      />

      <button className="bg-background flex h-10 w-10 items-center justify-center rounded-full text-white">
        <LuPlus size={20} />
      </button>
    </header>
  );
}
