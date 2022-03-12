import dynamic from "next/dynamic";
import { useState } from "react";

import useMediaQuery from "@/hooks/useMediaQuery";
import useCart from "@/hooks/useCart";

interface NavbarDropdownProps {
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

export default function NavbarDropdown({ cart }: NavbarDropdownProps) {
  const [dropdownStatus, setDropdownStatus] = useState(false);
  const tabWidth = useMediaQuery("(max-width:768px)");
  const { toggleCart } = useCart();

  function onClickHandler() {
    setDropdownStatus(!dropdownStatus);
  }
  return (
    <>
      {tabWidth ? (
        <NavCartViewMobile cart={cart} onClickHandler={toggleCart} />
      ) : (
        <NavCartView cart={cart} onClickHandler={onClickHandler} />
      )}
      {!tabWidth && dropdownStatus && cart?.items.length > 0 && (
        <div className="absolute md:top-24 top-16 right-5 md:-right-10 flex items-center justify-center w-1/4 z-40">
          <HeaderCartDropdown
            cart={cart}
            className="bg-white shadow-lg px-2 md:px-4 rounded-md "
          />
        </div>
      )}
    </>
  );
}
