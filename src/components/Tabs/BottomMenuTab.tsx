import { BsShop, BsCart4 } from "react-icons/bs";
import { TiThMenu } from "react-icons/ti";

import { useAppDispatch } from "@/redux/store";
import useCart from "@/hooks/useCart";
import { BottomTabItem } from "./BottomTabItem";
import { toggleMobileMenu } from "@/redux/ui-slice";

export default function BottomTab() {
  const { useCartData } = useCart();
  const { data: cart } = useCartData();

  const dispatch = useAppDispatch();
``
  function onCloseSidebar() {
    dispatch(toggleMobileMenu());
  }

  return (
    <div className="mobile-bottom-menu fixed bottom-0 w-full py-3 px-2 bg-white z-40 border-gray-200 border-t">
      <div className="flex items-center justify-around w-full">
        <BottomTabItem link="/shop" title="Shop" icon={<BsShop />} />
        <BottomTabItem
          title="Menu"
          icon={<TiThMenu />}
          onToggle={onCloseSidebar}
        />
        <BottomTabItem
          link="/checkout"
          title="Cart"
          icon={<BsCart4 />}
          cart={cart}
        />
      </div>
    </div>
  );
}
