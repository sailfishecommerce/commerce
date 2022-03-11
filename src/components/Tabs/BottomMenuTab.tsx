import { useRouter } from "next/router";
import { BsShop, BsCart4 } from "react-icons/bs";
import { TiThMenu } from "react-icons/ti";
import { GoSettings } from "react-icons/go";

import { useAppDispatch } from "@/redux/store";
import useCart from "@/hooks/useCart";
import { BottomTabItem } from "./BottomTabItem";
import { toggleMobileMenu, updateMobileMenu } from "@/redux/ui-slice";

export default function BottomTab() {
  const { useCartData } = useCart();
  const { data: cart } = useCartData();
  const router = useRouter();
  const dispatch = useAppDispatch();

  function onCloseSidebar() {
    dispatch(toggleMobileMenu());
  }

  function toggleFilterMenuHandler() {
    dispatch(toggleMobileMenu());
    dispatch(updateMobileMenu("filterNav"));
  }

  return (
    <div className="mobile-bottom-menu fixed bottom-0 w-full py-3 px-2 bg-white z-40 border-gray-200 border-t">
      <div className="flex items-center justify-around w-full">
        {router.pathname.includes("/shop") && (
          <BottomTabItem
            route={router.pathname}
            title="Filter"
            onToggle={toggleFilterMenuHandler}
            icon={<GoSettings />}
          />
        )}
        <BottomTabItem
          route={router.pathname}
          link="/shop"
          title="Shop"
          icon={<BsShop />}
        />
        <BottomTabItem
          title="Menu"
          icon={<TiThMenu />}
          onToggle={onCloseSidebar}
        />
        <BottomTabItem
          link="/checkout"
          title="Cart"
          route={router.pathname}
          icon={<BsCart4 />}
          cart={cart}
        />
      </div>
    </div>
  );
}
