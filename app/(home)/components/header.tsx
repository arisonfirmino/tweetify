import { LuPlus } from "react-icons/lu";
import Image from "next/image";

interface HeaderProps {
  image: string;
  name: string;
  setShowForm: () => void;
}

export default function Header({ image, name, setShowForm }: HeaderProps) {
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

      <button
        onClick={setShowForm}
        className="bg-background flex h-10 w-10 items-center justify-center rounded-full text-white active:bg-gray-400"
      >
        <LuPlus size={20} />
      </button>
    </header>
  );
}
