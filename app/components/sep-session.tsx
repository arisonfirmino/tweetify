interface SepSessionProps {
  children: React.ReactNode;
}

export default function SepSession({ children }: SepSessionProps) {
  return (
    <div className="flex items-center gap-2.5 text-xs text-gray-400">
      <span className="flex items-center gap-1">{children}</span>
      <hr className="w-full border-gray-400" />
    </div>
  );
}
