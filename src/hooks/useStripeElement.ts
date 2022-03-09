import useSwell from "@/hooks/useSwell";

const inputClasses = { base: "form-control StripeElement" };

export default function useStripeElement() {
  const { swellInit } = useSwell();

  async function createStripeElement() {
    const { swell } = await swellInit();
    swell.payment.createElements({
      card: {
        elementId: "#card-element-id",
        options: {
          classes: inputClasses,
          placeholder: "Credit Card Number",
          showIcon: true,
          iconStyle: "solid",
          hidePostalCode: true,
        },
      },
    });
  }

  return { createStripeElement };
}
