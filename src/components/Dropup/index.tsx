import { PropsWithChildren, useState } from "react";
import { AiFillCaretUp } from "react-icons/ai";

interface Props {
  dropupText: string | JSX.Element;
  className?: string;
}

export default function index({
  dropupText,
  children,
  className,
}: PropsWithChildren<Props>) {
  const [active, setActive] = useState(false);

  return (
    <div className="flex justify-center">
      <div className="dropup relative">
        <button
          onMouseEnter={() => setActive(!active)}
          className={`
          dropdown-toggle ${className} px-2 ml-2 lg:px-4
          py-2          
          bg-red-600
          text-white
          font-medium
          text-xs
          leading-tight
          uppercase
          rounded
          bg-red-500
          shadow-md
          hover:bg-red-700 hover:shadow-lg
          focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0
          active:bg-red-800 active:shadow-lg active:text-white
          transition
          duration-150
          ease-in-out
          flex
          items-center
          whitespace-nowrap
        `}
          type="button"
          id="dropdownMenuButton1u"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          {dropupText}
          <AiFillCaretUp className="ml-2" />
        </button>
        {active && (
          <ul
            className="
           dropdown-menu
          min-w-max
          absolute          
          bg-white
          text-base
          z-50
          -top-24
          float-left
          py-2
          list-none
          text-left
          rounded-lg
          shadow-lg
          mt-1
          m-0
          bg-clip-padding
          border-none
        "
            aria-labelledby="dropdownMenuButton1u"
          >
            {children}
          </ul>
        )}
      </div>
    </div>
  );
}
