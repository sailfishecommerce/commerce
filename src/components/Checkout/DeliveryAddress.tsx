import { Formik } from "formik";

import { checkoutFormSchema } from "@/components/Form/schema/CheckoutFormSchema";
import checkoutFormContent from "@/json/checkout-form.json";
import { displayFormElement } from "@/components/Form/FormElement";
import { useAppDispatch } from "@/hooks/useRedux";
import { AddressInputGroup } from "@/components/Form/FormFields";
import { updatePaymentForm } from "@/redux/payment-slice";
import useShippingPayment from "@/hooks/useShippingPayment";

export default function DeliveryAddress() {
  const { formValues } = useShippingPayment();
  const dispatch = useAppDispatch();

  return (
    <div className="w-full bg-white md:w-1/2 lg:w-1/3 p-4">
      <h3>2. DELIVERY ADDRESS</h3>
      <p>All fields required</p>

      <div className="delivery-form">
        <Formik
          enableReinitialize
          initialValues={formValues}
          validationSchema={checkoutFormSchema}
          onSubmit={(values, { setSubmitting }) => {
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
                        <div key={index} className="w-full">
                          {displayFormElement(formInput, formik)}
                        </div>
                      ))}
                    </div>
                  )
                )}
                <AddressInputGroup formik={formik} />
              </div>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
}
