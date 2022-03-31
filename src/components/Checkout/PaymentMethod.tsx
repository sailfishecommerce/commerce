import OrderSummary from "./OrderSummary";
import SelectPaymentMethod from "./SelectPaymentMethod";

export default function PaymentMethod() {
  return (
    <div className="flex flex-col w-1/3">
      <SelectPaymentMethod />
      <OrderSummary />
    </div>
  );
}
