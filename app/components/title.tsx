import Image from "next/image";

export default function Title() {
  return (
    <div className="flex items-center justify-center gap-2.5">
      <Image
        src="/logo.png"
        alt="Tweetify"
        height={330}
        width={330}
        className="w-10"
      />

      <h1 className="satisfy text-3xl">Tweetify</h1>
    </div>
  );
}
