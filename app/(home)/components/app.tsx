import Header from "./header";
import Search from "./search";

export interface AppProps {
  image: string;
  name: string;
}

export default function App({ image, name }: AppProps) {
  return (
    <div className="flex min-h-screen w-full flex-col gap-5 border-solid border-black border-opacity-20 px-5 pt-2.5 md:max-w-[600px] md:border-x">
      <Search />
      <Header image={image} name={name} />
    </div>
  );
}
