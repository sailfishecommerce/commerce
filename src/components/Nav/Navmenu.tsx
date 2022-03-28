import { useQuery } from "react-query";
import dynamic from "next/dynamic";
import { memo } from "react";
import { AiOutlineUser } from "react-icons/ai";

import useMediaQuery from "@/hooks/useMediaQuery";
import { useAppDispatch } from "@/hooks/useRedux";
import { toggleAuthModal } from "@/redux/ui-slice";
import { useAccount, useAuth, useCart } from "@/hooks";
import { NavToggler } from "@/components/Nav/NavElement";
import useNavStyle from "@/hooks/useNavStyle";

const NavbarDropdown = dynamic(
  () => import("@/components/Dropdown/NavbarDropdown")
);

const AuthorizedView = dynamic(
  () => import("@/components/View/AuthorizedView")
);

const NotAuthorizedView = dynamic(
  () => import("@/components/View/NotAuthorizedView")
);

function NavMenuComponent() {
  const { useCartData } = useCart();
  const { userLogout } = useAuth();
  const { scrollUp } = useNavStyle();
  const { getUserAccount } = useAccount();
  const { data: userDetails, status } = useQuery("userdetails", getUserAccount);
  const dispatch = useAppDispatch();
  const tabWidth = useMediaQuery("(max-width:768px)");
  const { data: cart } = useCartData();

  console.log("cart", cart);

  function toggleAuthModalHandler() {
    dispatch(toggleAuthModal());
  }

  return (
    <>
      <div className="flex items-center lg:mr-2 mt-2 justify-between w-2/5 md:px-4 lg:w-4/12">
        {!tabWidth && scrollUp && <NavToggler />}
        {status === "error" ? (
          "unable to fetch user details"
        ) : status === "loading" ? (
          <AiOutlineUser />
        ) : userDetails !== null ? (
          <AuthorizedView userLogout={userLogout} userDetail={userDetails} />
        ) : (
          <NotAuthorizedView toggleAuthModalHandler={toggleAuthModalHandler} />
        )}
        <NavbarDropdown cart={cart} />
      </div>
      <style jsx>
        {`
          @media (max-width: 768px) {
            .navbar-toolbar {
              justify-content: space-between;
              width: 100%;
              margin-left: -15px;
            }
          }
        `}
      </style>
    </>
  );
}

const NavMenu = memo(NavMenuComponent);

export default NavMenu;
