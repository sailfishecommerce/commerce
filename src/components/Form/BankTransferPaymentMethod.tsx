import { useCallback, useState } from "react";
import checkoutFormContent from "@/json/checkout-form.json";
import { sendBankTransfer } from "@/hooks/useVbout";
import { useAppSelector } from "@/hooks/useRedux";
import { useToast } from "@/hooks";
import BankTransferList from "@/components/Form/BankTransferList";

export default function BankTransferPaymentMethod() {
  const [bank, setBank] = useState("");
  const { paymentForm }: any = useAppSelector((state) => state.payment);
  const { isLoading, hasError, isSuccessful } = useToast();

  const setBankHandler = useCallback((e: any) => setBank(e.target.value), []);

  function submitHandler(e: any) {
    e.preventDefault();
    const loading = isLoading();
    sendBankTransfer(paymentForm?.email, bank)
      .then((response) => {
        isSuccessful(
          loading,
          `An email has been sent to ${paymentForm?.email}`
        );
      })
      .catch((error) => {
        hasError(loading, "an error occured");
      });
  }

  return (
    <div className="accordion-item">
      <h3 className="accordion-header bg-gray-100">
        <a
          className="accordion-button collapsed"
          href="#points"
          data-bs-toggle="collapse"
        >
          <i className="ci-gift mx-2"></i>
          Bank Transfer
        </a>
      </h3>
      <div
        className="accordion-collapse collapse"
        id="points"
        data-bs-parent="#payment-method"
      >
        <p className="mt-2 mb-0 text-center">
          Please select your preferred country and currency pair for payment to
          our bank accounts
        </p>
        <div className="accordion-body my-4 border rounded-md p-4">
          <form onSubmit={submitHandler}>
            <table className="manualTransfer mb-3 w-full">
              <thead>
                <tr className="border-b">
                  <th>CURRENCY</th>
                  <th>BANK LOCATION</th>
                </tr>
              </thead>
              <tbody>
                {checkoutFormContent.bankTransfer.content.map(
                  (content: any, index: number) => (
                    <BankTransferList
                      key={index}
                      content={content}
                      onChange={setBankHandler}
                    />
                  )
                )}
              </tbody>
            </table>
            <button
              type="submit"
              aria-label="Submit"
              className="border-2 border-red-500 rounded-md p-2 mx-auto flex my-4 hover:bg-red-500 hover:text-white"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
      <style jsx>
        {`
          .manualTransfer th {
            width: 300px;
          }
        `}
      </style>
    </div>
  );
}
