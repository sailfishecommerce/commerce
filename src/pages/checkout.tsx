import Applayout from "@/layout/Applayout";
import ProductBanner from "@/components/Banner/ProductBanner";
import CheckoutCustomer from "@/components/Checkout";

export default function Checkout() {
  return (
    <Applayout title="Checkout your order">
      <ProductBanner breadcrumb="Checkout" />
      <CheckoutCustomer />
    </Applayout>
  );
}

// Checkout.whyDidYouRender = true;
