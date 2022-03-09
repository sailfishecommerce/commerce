import dynamic from "next/dynamic";
import { memo, PropsWithChildren, useState } from "react";

const DropdownCaret = dynamic(
  () => import("@/components/Dropdown/DropdownCaret")
);

interface Props {
  dropdownText: string | JSX.Element;
  className?: string;
}

function DropdownComponent({
  dropdownText,
  children,
  className,
}: PropsWithChildren<Props>) {
  const [active, setActive] = useState(false);

  function onClickHandler() {
    setActive(!active);
  }
  return (
    <div className="flex justify-center">
      <div className="dropdown relative">
        <button
          onClick={onClickHandler}
          className={`${className} px-2 ml-2 lg:px-4
          py-2          
          text-white
          font-medium
          text-xs
          leading-tight
          uppercase
          rounded
          bg-red-500
          shadow-md
          border
          border-red-900
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
          id="dropdownMenuButton1"
          aria-expanded="false"
        >
          {dropdownText}
          <DropdownCaret />
        </button>
        {active && (
          <ul
            className="
          min-w-max
          absolute
          bg-white
          text-base
          z-50
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
            aria-labelledby="dropdownMenuButton1"
          >
            {children}
          </ul>
        )}
      </div>
    </div>
  );
}

const Dropdown = memo(DropdownComponent);
export default Dropdown;
