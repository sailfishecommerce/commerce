import dynamic from "next/dynamic";
import { BsCart4 } from "react-icons/bs";
import { useState } from "react";
import FormattedPrice from "@/components/Price/FormattedPrice";

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

export default function NavbarDropdown({
  toggleSlideCartMobile,
  cart,
}: NavbarDropdownProps) {
  const [dropdownStatus, setDropdownStatus] = useState(false);

  function onClickHandler() {
    setDropdownStatus(!dropdownStatus);
  }
  return (
    <div className="relative bg-gray-50 hover:bg-gray-100 shadow-lg cursor-pointer rounded-lg p-2 md:p-4 flex items-center w-3/8 lg:w-1/2">
      <div onClick={onClickHandler} className="flex price-overview flex-col">
        <span className="text-xs md:text-md text-center font-bold">
          My Cart
        </span>
        {cart?.grandTotal ? (
          <a className="flex items-center">
            <div className="cart-icon relative flex flex-col mr-2">
              <span className="absolute top-0 right-0 -mt-2 text-white justify-center bg-red-500 rounded-full h-4 w-4 flex items-center">
                {cart?.items?.length}
              </span>
              <BsCart4 className="mx-2 my-0" size={26} />
            </div>
            <FormattedPrice
              className="font-bold w-full"
              price={cart?.grandTotal}
            />
          </a>
        ) : (
          <FormattedPrice price={0} />
        )}
      </div>
      {dropdownStatus && cart?.items.length > 0 && (
        <div className="absolute md:top-20 top-16 right-5 md:right-0 flex items-center justify-center w-full bg-white shadow-lg z-40">
          <HeaderCartDropdown
            cart={cart}
            className="bg-white shadow-lg px-2 md:px-4 rounded-md "
          />
        </div>
      )}
    </div>
  );
}
