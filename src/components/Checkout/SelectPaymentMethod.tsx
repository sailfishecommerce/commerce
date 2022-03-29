import Image from "next/image";

import BankTransferPaymentMethod from "@/components/Form/BankTransferPaymentMethod";
import AirwallexPaymentMethod from "@/components/Airwallex/AirwallexPaymentMethod";
import PaymentWithStripe from "@/components/Stripe/PaymentWithStripe";

export default function SelectPaymentMethod() {
  return (
    <div className="flex w-full flex-col">
      <div className="payment-methods flex items-center justify-between">
        <h3 className="font-medium">3. SELECT PAYMENT METHOD</h3>{" "}
        <div className="w-1/4 mb-2">
          <Image
            src="/stripe.png"
            alt="stripe"
            height={40}
            width={120}
            title="stripe"
            layout="responsive"
          />
        </div>
      </div>
      <>
        <PaymentWithStripe title="Stripe" />
        <AirwallexPaymentMethod />
        <BankTransferPaymentMethod />
      </>
    </div>
  );
}
