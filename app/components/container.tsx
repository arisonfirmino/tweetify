interface ContainerProps {
  children: React.ReactNode;
}

export default function Container({ children }: ContainerProps) {
  return (
    <main className="flex min-h-screen w-full cursor-default flex-col items-center">
      {children}
    </main>
  );
}
