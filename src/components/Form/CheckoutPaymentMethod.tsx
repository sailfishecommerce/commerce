import { toast } from "react-toastify";

import { accordionButtonStyle } from "@/lib/single-Checkout";
import { useAppSelector, useAppDispatch } from "@/hooks/useRedux";
import BankTransferPaymentMethod from "@/components/Form/BankTransferPaymentMethod";
import AirwallexPaymentMethod from "@/components/Airwallex/AirwallexPaymentMethod";
import PaymentWithStripe from "@/components/Stripe/PaymentWithStripe";
import Accordion from "@/components/Accordion";
import { updateFormStage } from "@/redux/payment-slice";

export default function CheckoutPaymentMethod() {
  const { stage } = useAppSelector((state) => state.payment);
  const dispatch = useAppDispatch();
  const accordion = accordionButtonStyle(stage);

  function paymentHandler() {
    dispatch(updateFormStage(1));
    if (stage === 1) {
      toast.error("Please complete stage 1");
    }
  }

  return (
    <Accordion
      // onClick={paymentHandler}
      stage={2}
      title=" Choose payment method"
    >
      <PaymentWithStripe title="Pay with Credit Card (powered by Stripe)" />
      <AirwallexPaymentMethod />
      <BankTransferPaymentMethod />
    </Accordion>
  );
}

// CheckoutPaymentMethod.whyDidYouRender = true;
