import dynamic from "next/dynamic";
import { AiOutlineUser, AiOutlineMenu } from "react-icons/ai";
import { BsCart4 } from "react-icons/bs";
import { useState } from "react";

import Tooltip from "@/components/Tooltip";
import FormattedPrice from "@/lib/formatPrice";

const HeaderCartDropdown = dynamic(
  () => import("@/components/Dropdown/CartDropdown")
);

interface AuthorizedViewProps {
  toggleAuthModalHandler: () => void;
}

export function NavToggler() {
  return (
    <button>
      <Tooltip text="Expand menu">
        <AiOutlineMenu className="text-2xl hover:text-red-500" />
      </Tooltip>
    </button>
  );
}

export function NotAuthorizedView({
  toggleAuthModalHandler,
}: AuthorizedViewProps) {
  return (
    <div
      className="flex items-center hover:text-red-500"
      onClick={toggleAuthModalHandler}
    >
      <AiOutlineUser fontSize={24} className="mx-2" />
      <Tooltip text="Sign-in / Sign-up ">
        <div className="w-full flex flex-col items-start">
          <span className="text-xs">Hello, Sign in</span>
          <h6 className="text-lg">My Account</h6>
        </div>
      </Tooltip>
    </div>
  );
}

interface authorizedViewProps {
  userLogout: () => void;
  userDetail: {
    firstName: string;
    lastName: string;
  };
}

export function AuthorizedView({
  userLogout,
  userDetail,
}: authorizedViewProps) {
  return (
    <div className="flex items-center">
      <AiOutlineUser />
      <div className="text flex flex-col">
        <div className="cursor-pointer">
          <span className="navbar-tool-tooltip">
            Welcome {userDetail.firstName}
          </span>
          <div className="mx-3">
            <div className="flex flex-col mr-3">
              <span>Hello,</span>{" "}
              <span className="text-blue-500 font-bold">
                {`${userDetail.lastName} ${userDetail.firstName}`}{" "}
              </span>
            </div>
          </div>
        </div>
        <div onClick={userLogout} className="logout-user cursor-pointer">
          <span className="mx-1">Logout</span>
          <p className="logout mb-0 hover:text-red-500">Logout</p>
        </div>
      </div>
    </div>
  );
}

interface NavbarDropdownProps {
  toggleSlideCartMobile: () => void;
  cart:
    | {
        items: any[];
        grandTotal: number;
      }
    | any;
}

export function NavbarDropdown({
  toggleSlideCartMobile,
  cart,
}: NavbarDropdownProps) {
  const [dropdownStatus, setDropdownStatus] = useState(false);

  function onClickHandler() {
    setDropdownStatus(!dropdownStatus);
  }
  return (
    <div className="relative bg-gray-50 hover:bg-gray-100 shadow-lg cursor-pointer rounded-lg p-2 md:p-4 flex items-center">
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
              <BsCart4 fontSize={26} className="mx-2 my-0" />
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
        <div className="absolute top-20 flex items-center justify-center w-full bg-white shadow-lg z-10">
          <HeaderCartDropdown
            cart={cart}
            className="bg-white shadow-lg px-4 rounded-md "
          />
        </div>
      )}
    </div>
  );
}
