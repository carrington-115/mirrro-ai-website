import { Menu, X } from "lucide-react";

interface MenuIconProps {
  isOpen: boolean;
  action: () => void;
}

export default function MenuIcon({ isOpen, action }: MenuIconProps) {
  return (
    <button
      onClick={action}
      className="flex items-center justify-center w-[40px] h-[40px] lg:hidden cursor-pointer"
    >
      {isOpen ? (
        <X size={24} className="text-black" />
      ) : (
        <Menu size={24} className="text-black" />
      )}
    </button>
  );
}
