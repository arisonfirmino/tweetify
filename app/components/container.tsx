interface ContainerProps {
  children: React.ReactNode;
}

export default function Container({ children }: ContainerProps) {
  return (
    <main className="flex min-h-screen w-full flex-col">{children}</main>
  );
}
