import dynamic from "next/dynamic";
import Applayout from "@/layout/Applayout";
import ProductBanner from "@/components/Banner/ProductBanner";
import CheckoutWelcomeBanner from "@/components/Banner/CheckoutWelcomeBanner";
import CheckoutForm from "@/components/Form/CheckoutForm";

import useCart from "@/hooks/useCart";
import SpinnerRipple from "@/components/Loader/SpinnerLoader";

const CheckoutSidebar = dynamic(
  () => import("@/components/Sidebar/CheckoutSidebar")
);

export default function Checkout() {
  const { useCartData } = useCart();
  const { data: cart } = useCartData();

  return (
    <Applayout title="Checkout your order">
      <ProductBanner breadcrumb="Checkout" />
      <div className="container checkout-page-content flex mx-auto">
        <div className="w-2/3 flex flex-col bg-white -mt-32">
          <CheckoutWelcomeBanner />
          <CheckoutForm />
        </div>
        {cart ? (
          <CheckoutSidebar cart={cart} />
        ) : (
          <div className="loader flex w-1/3 justify-center m-auto">
            <SpinnerRipple />
          </div>
        )}
      </div>
      <style jsx>{`
        .checkout-page-content {
          min-height: 500px;
        }
      `}</style>
    </Applayout>
  );
}

// Checkout.whyDidYouRender = true;
