import { BsFillCheckCircleFill } from "react-icons/bs";

import { useCart } from "@/hooks";
import FormattedPrice from "../Price/FormattedPrice";
import ReviewOrderlist from "./ReviewOrderlist";

export default function ReviewOrder() {
  const { useCartData } = useCart();
  const { data: cart } = useCartData();
  const cartItem = cart?.items?.length > 1 ? "ITEMS" : "ITEM";
  return (
    <div className="bg-white rounded-md w-full lg:h-full lg:w-1/4 md:w-1/2 p-4">
      <h6>
        <span className="font-medium mr-2">1. REVIEW YOUR ORDER </span> (
        {cart?.items?.length} | {cartItem} )
      </h6>
      {cart?.items.map((item) => (
        <ReviewOrderlist key={item.productId} content={item} />
      ))}
      <hr className="border-b border-gray-100 my-2" />
      <div className="subtotal flex items-center justify-between">
        <h4 className="font-bold">SUBTOTAL</h4>
        <FormattedPrice className="font-bold" price={cart?.subTotal} />
      </div>
      <div className="select-delivery">
        <h6 className="font-medium mb-2">Select delivery</h6>
        <div className="delivery-type flex items-center justify-between border border-gray-100 p-4 bg-gray-100">
          <h6 className="text-sm">FREE</h6>
          <div className="type flex flex-col">
            <h6 className="font-bold">Express</h6>
            <p className="font-medium text-gray-400 text-sm">
              (3 - 5 business days, tracking)
            </p>
          </div>
          <BsFillCheckCircleFill fill="orange" />
        </div>
      </div>
    </div>
  );
}
