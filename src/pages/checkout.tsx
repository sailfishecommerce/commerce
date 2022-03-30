import Applayout from "@/layout/Applayout";
import ProductBanner from "@/components/Banner/ProductBanner";
import CheckoutCustomer from "@/components/Checkout";
import OldCheckoutView from "@/components/Checkout/OldCheckoutView";

export default function Checkout() {
  return (
    <Applayout title="Checkout your order">
      <ProductBanner breadcrumb="Checkout" />
      <CheckoutCustomer />
      <OldCheckoutView />
    </Applayout>
  );
}

// Checkout.whyDidYouRender = true;
