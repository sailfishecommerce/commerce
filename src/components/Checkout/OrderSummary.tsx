import FormattedPrice from "@/components/Price/FormattedPrice";
import { useCart } from "@/hooks";

export default function OrderSummary() {
  const { useCartData } = useCart();
  const { data: cart } = useCartData();
  return (
    <div className="rounded-md">
      <h4 className="font-medium">ORDER SUMMARY</h4>
      <ul>
        {cart?.items.map((item) => (
          <li
            key={item.productId}
            className="item border-b border-gray-100 flex justify-between items-center"
          >
            <span>{item.quantity} X Classic Pouch, Limestone </span>
            <FormattedPrice price={item?.price} />
          </li>
        ))}
      </ul>
      <div className="subtotal flex items-center justify-between">
        <h6>Subtotal</h6>
        <FormattedPrice price={cart?.subTotal} />
      </div>
      <div className="shipping">
        <span className="flex flex-col">
          <h6>
            Shippong to <span className="font-bold">Hong Kong</span>
          </h6>
          <p className="text-gray-500">Express (3-5 business days, tracking)</p>
        </span>
        <h5>FREE</h5>
      </div>
      <div className="total bg-gray-500 p-4 justify-between items-center">
        <h4>ORDER TOTAL</h4>
        <FormattedPrice price={cart?.grandTotal} />
      </div>
      <div className="email flex items-center">
        <input type="checkbox" />{" "}
        <p>Email me about new products, deals and surprise treats</p>
      </div>
      <button className="w-full bg-orange-500 text-white text-center hover:bg-orange-700">
        COMPLETE ORDER
      </button>
      <p>
        *By signing up or placing an order, you're consenting to our privacy
        policy
      </p>
    </div>
  );
}
