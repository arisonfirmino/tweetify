import { LuTrash2 } from "react-icons/lu";

interface UndoButtonProps {
  handleDelete: () => void;
}

export default function UndoButton({ handleDelete }: UndoButtonProps) {
  return (
    <button
      onClick={handleDelete}
      className="absolute right-0 top-0 flex items-center gap-2 rounded-full bg-red-600 px-2.5 py-0.5 text-sm text-white active:bg-gray-400"
    >
      <LuTrash2 size={14} />
      Desfazer
    </button>
  );
}
