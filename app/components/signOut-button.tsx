import { XIcon } from "lucide-react";
import { signOut } from "next-auth/react";

export default function SignOutButton() {
  const handleSignOutClick = () => signOut();

  return (
    <button
      onClick={handleSignOutClick}
      className="absolute right-0 top-0 m-5 text-red-600 active:text-gray-400"
    >
      <XIcon size={18} />
    </button>
  );
}
