import { Formik } from "formik";

import Accordion from "@/components/Accordion";
import { checkoutFormSchema } from "@/components/Form/schema/CheckoutFormSchema";
import checkoutFormContent from "@/json/checkout-form.json";
import { displayFormElement } from "@/components/Form/FormElement";
import { useAppDispatch, useAppSelector } from "@/hooks/useRedux";
import { AddressInputGroup } from "@/components/Form/FormFields";
import { accordionButtonStyle } from "@/lib/single-Checkout";
import { updateFormStage, updatePaymentForm } from "@/redux/payment-slice";
import useShippingPayment from "@/hooks/useShippingPayment";

export default function ShippingCheckoutForm(): JSX.Element {
  const { stage } = useAppSelector((state) => state.payment);
  const accordion = accordionButtonStyle(stage);
  const { formValues } = useShippingPayment();
  const dispatch = useAppDispatch();

  return (
    <Accordion stage={1} title="Shipping Address" isOpen={true}>
      <Formik
        enableReinitialize
        initialValues={formValues}
        validationSchema={checkoutFormSchema}
        onSubmit={(values, { setSubmitting }) => {
          dispatch(updateFormStage(2));
          setSubmitting(false);
          dispatch(updatePaymentForm({ form: values, completed: true }));
        }}
      >
        {(formik) => (
          <form onSubmit={formik.handleSubmit}>
            <div>
              {checkoutFormContent.personalDetails.content.map(
                (formRow, index) => (
                  <div key={index} className="flex flex-wrap">
                    {formRow.map((formInput, index) => (
                      <div key={index} className="w-full lg:w-1/2">
                        {displayFormElement(formInput, formik)}
                      </div>
                    ))}
                  </div>
                )
              )}
              <AddressInputGroup formik={formik} />
            </div>
            <button
              aria-label="proceed with shipping"
              type="submit"
              disabled={formik.isSubmitting}
              className="flex border-2 mb-4 border-red-500 hover:bg-red-500 text-red-500 hover:text-white rounded-md px-2 py-1 mx-auto font-bold"
            >
              Proceed
            </button>
          </form>
        )}
      </Formik>
    </Accordion>
  );
}

// ShippingCheckoutForm.whyDidYouRender = true;
