import Image from "next/image";

interface UserProps {
  name: string;
  username: string;
  image: string;
}

export default function User({ name, username, image }: UserProps) {
  return (
    <div className="flex items-center gap-2.5">
      <Image
        src={image}
        alt={name}
        height={330}
        width={330}
        className="h-10 w-10 rounded-full"
      />

      <div>
        <h3 className="text-base font-medium">{name}</h3>
        <p className="text-xs text-gray-500">@{username}</p>
      </div>
    </div>
  );
}
