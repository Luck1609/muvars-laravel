import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { Btn, FormBtn } from "components/widgets/btn";
import Input from "components/widgets/input";
import { useAuth } from "hooks/auth";
import { show_auth_modal } from "hooks/redux/modal_reducer";
import Login from "../auth/login";
import { login_validation } from "components/validations";
import { useRouter } from "next/router";

export default function JoinUs() {
  const { user } = useAuth({ middleware: "" });
  const { push } = useRouter();
  const dispatch = useDispatch();
  const methods = useForm();

  const { handleSubmit } = methods;

  const handle_agency_registration = () => {
    if (!user) {
      dispatch(
        show_auth_modal({
          url: "/login",
          title: "Login",
          content: Login,
          values: {
            email: "",
            password: "",
          },
          validation: login_validation,
          width: "w-[350px]",
        })
      );
    } else push("/agency-registration");
  };

  return (
    <div className="w-full p-2 lg:p-8 rounded mt-20">
      <div className="w-full max-w-5xl rounded-md m-auto bg-slate-200 p-10">
        <div className="text-center my-4">
          <h2 className="text-3xl mb-2.5 font-bold text-center">
            Like to partner with us?
          </h2>
          <label className="">
            Enter your email and we&apos;ll send them your way.
          </label>
        </div>

        <FormProvider {...methods}>
          <form className="w-full max-w-3xl m-auto grid grid-cols-4 gap-3 p-5">
            <Input
              name="email"
              label="Type in your email address"
              className="col-span-3 overflow-hidden bg-white"
            />

            <FormBtn
              content="Suscribe"
              className="bg-rose-500 hover:bg-rose-600"
            />
          </form>
        </FormProvider>

        <p className="py-8 text-center uppercase font-semibold">Or</p>

        <div className="w-full text-center">
          <h2 className="text-3xl mb-2.5 font-bold">
            Register your travel agency with us!
          </h2>
          <label>Join us to reap the benefits together</label>

          <div className="text-center mt-7">
            <Btn
              content="Register agency"
              variant="outlined"
              className="h-12 w-72 text-rose-500 hover:text-white border border-rose-500 hover:border-rose-600 hover:bg-rose-600"
              click={handle_agency_registration}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
