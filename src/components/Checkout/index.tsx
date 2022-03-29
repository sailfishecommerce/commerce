import ReviewOrder from "./ReviewOrder";
import PaymentMethod from "./PaymentMethod";
import DeliveryAddress from "./DeliveryAddress";

export default function index() {
  return (
    <div className="w-full bg-gray-100 mx-auto p-4">
      <div className="container mx-auto flex flex-wrap">
        <ReviewOrder />
        <DeliveryAddress />
        <PaymentMethod />
      </div>
    </div>
  );
}
