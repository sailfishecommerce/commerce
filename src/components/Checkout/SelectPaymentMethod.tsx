import Image from "next/image";

import BankTransferPaymentMethod from "@/components/Form/BankTransferPaymentMethod";
import AirwallexPaymentMethod from "@/components/Airwallex/AirwallexPaymentMethod";
import PaymentWithStripe from "@/components/Stripe/PaymentWithStripe";

export default function SelectPaymentMethod() {
  return (
    <div className="flex w-full lg:w-1/4 md:w-1/2">
      <div className="payment-methods flex items-center justify-between">
        <h3 className="font-medium">3. SELECT PAYMENT METHOD</h3>{" "}
        <Image
          src="/stripe.png"
          alt="stripe"
          height={70}
          width={100}
          title="stripe"
        />
      </div>
      <>
        <PaymentWithStripe title="Stripe" />
        <AirwallexPaymentMethod />
        <BankTransferPaymentMethod />
      </>
    </div>
  );
}
