import { useCart } from "@/hooks";

export default function ReviewOrder() {
  const { useCartData } = useCart();
  const { data: cart } = useCartData();
  const cartItem = cart?.items?.length > 1 ? "ITEMS" : "ITEM";
  return (
    <div className="bg-white rounded-md ">
      <h6>
        <span className="font-medium">1. REVIEW YOUR ORDER </span> ($
        {cart?.items?.length} | ${cartItem} ))
      </h6>
    </div>
  );
}
