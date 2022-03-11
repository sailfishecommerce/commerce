import dynamic from "next/dynamic";
import { useState } from "react";

import useMediaQuery from "@/hooks/useMediaQuery";

interface NavbarDropdownProps {
  toggleSlideCartMobile: () => void;
  cart:
    | {
        items: any[];
        grandTotal: number;
      }
    | any;
}

const HeaderCartDropdown = dynamic(
  () => import("@/components/Dropdown/CartDropdown")
);

const NavCartView = dynamic(() => import("@/components/Cart/NavCartView"));
const NavCartViewMobile = dynamic(
  () => import("@/components/Cart/NavCartViewMobile")
);

export default function NavbarDropdown({
  toggleSlideCartMobile,
  cart,
}: NavbarDropdownProps) {
  const [dropdownStatus, setDropdownStatus] = useState(false);
  const tabWidth = useMediaQuery("(max-width:768px)");

  function onClickHandler() {
    setDropdownStatus(!dropdownStatus);
  }
  return (
    <>
      {tabWidth ? (
        <NavCartViewMobile cart={cart} onClickHandler={onClickHandler} />
      ) : (
        <NavCartView cart={cart} onClickHandler={onClickHandler} />
      )}
      {dropdownStatus && cart?.items.length > 0 && (
        <div className="absolute md:top-20 top-16 right-5 md:right-0 flex items-center justify-center w-full bg-white shadow-lg z-40">
          <HeaderCartDropdown
            cart={cart}
            className="bg-white shadow-lg px-2 md:px-4 rounded-md "
          />
        </div>
      )}
    </>
  );
}
