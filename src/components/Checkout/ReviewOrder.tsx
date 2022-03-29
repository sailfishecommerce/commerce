import { BsFillCheckCircleFill } from "react-icons/bs";

import { useCart } from "@/hooks";
import FormattedPrice from "../Price/FormattedPrice";

export default function ReviewOrder() {
  const { useCartData } = useCart();
  const { data: cart } = useCartData();
  const cartItem = cart?.items?.length > 1 ? "ITEMS" : "ITEM";
  return (
    <div className="bg-white rounded-md w-full lg:w-1/4 md:w-1/2 p-4">
      <h6>
        <span className="font-medium">1. REVIEW YOUR ORDER </span> (
        {cart?.items?.length} | {cartItem} )
      </h6>
      <div className="subtotal flex items-center justify-between">
        <h4>SUBTOTAL</h4> <FormattedPrice price={cart?.subTotal} />
      </div>
      <div className="select-delivery">
        <h6>Select delivery</h6>
        <div className="delivery-type border border-gray-100 p-2 bg-pink-200">
          <h6>FREE</h6>
          <div className="type flex flex-col">
            <h6>Express</h6>
            <p className="font-medium text-gray-600">
              (3 - 5 business days, tracking)
            </p>
          </div>
          <BsFillCheckCircleFill fill="text-orange-500" />
        </div>
      </div>
    </div>
  );
}
