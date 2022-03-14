import { Formik } from "formik";
import Link from "next/link";

import { useAppDispatch } from "@/hooks/useRedux";
import { signinFormSchema } from "@/components/Form/schema/AuthSchema";
import authContent from "@/json/authForm.json";
import { displayFormElement } from "@/components/Form/FormElement";
import { useAuth } from "@/hooks";
import { toggleAuthModal } from "@/redux/ui-slice";

export default function SigninForm() {
  const { signIn } = useAuth();
  const dispatch = useAppDispatch();

  function toggleAuthmodal() {
    dispatch(toggleAuthModal());
  }
  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      validationSchema={signinFormSchema}
      onSubmit={(values, formik) => signIn(values, formik)}
    >
      {(formik) => (
        <form
          className="w-full"
          autoComplete="off"
          noValidate
          onSubmit={formik.handleSubmit}
          id="signin-tab"
        >
          {authContent.signIn.map((content, index) => (
            <div key={index} className="flex flex-col w-100">
              {displayFormElement(content, formik)}
            </div>
          ))}
          <div className="mb-3 flex flex-wrap justify-between">
            <Link href="/account-password-recovery" passHref>
              <a
                aria-label="forgot password?"
                onClick={toggleAuthmodal}
                className="fs-sm text-red-500"
              >
                Forgot password?
              </a>
            </Link>
          </div>
          <button
            aria-label="Sign in"
            className="bg-red-500 mx-auto rounded-md hover:bg-red-400 text-white px-3 py-2 flex"
            type="submit"
          >
            Sign in
          </button>
        </form>
      )}
    </Formik>
  );
}
