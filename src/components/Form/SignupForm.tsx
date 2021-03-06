import { Formik } from "formik";

import { signupFormSchema } from "@/components/Form/schema/AuthSchema";
import authContent from "@/json/authForm.json";
import { displayFormElement } from "@/components/Form/FormElement";
import { useAuth } from "@/hooks";

export default function SignupForm() {
  const { signUp } = useAuth();
  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
      }}
      validationSchema={signupFormSchema}
      onSubmit={(values, formik) => signUp(values, formik)}
    >
      {(formik) => (
        <form
          className="w-full"
          autoComplete="off"
          onSubmit={formik.handleSubmit}
          noValidate
          id="signup-tab"
        >
          {authContent.signUp.map((content: any, index) => {
            return content?.length ? (
              <div key={index} className="flex flex-wrap">
                {content.map((inputContent: any, index: number) => (
                  <div key={index} className="w-full md:w-1/2">
                    {displayFormElement(inputContent, formik)}
                  </div>
                ))}
              </div>
            ) : (
              <div key={index} className="flex flex-col">
                {displayFormElement(content, formik)}
              </div>
            );
          })}
          <button
            aria-label="Sign up"
            className="bg-red-500 hover:bg-red-400  mx-auto rounded-md text-white p-2 shadow-lg flex justify-center"
            type="submit"
            disabled={formik.isSubmitting}
          >
            Sign up
          </button>
        </form>
      )}
    </Formik>
  );
}
