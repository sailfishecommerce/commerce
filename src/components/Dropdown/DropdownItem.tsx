import { PropsWithChildren } from "react";

interface DropdownItem {
  onClick: (e?: any) => void;
  className?: string;
}

export default function DropdownItem({
  onClick,
  children,
  className,
}: PropsWithChildren<DropdownItem>) {
  return (
    <li>
      <a
        onClick={onClick}
        className={`
              ${className}
              dropdown-item
              text-sm
              py-2
              px-4
              font-normal
              block
              w-full
              whitespace-nowrap
              bg-transparent
              text-gray-700
              hover:bg-gray-100
            `}
        href="#"
      >
        {children}
      </a>
    </li>
  );
}
