// import { useEffect, useState } from 'react'
import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/router";
// import { yupResolver } from '@hookform/resolvers/yup'
// import validations from 'helper/yupValidations'

// import * as UIcons from '@iconscout/react-unicons'
import { Btn, FormBtn } from "components/widgets/btn";
import { useEffect } from "react";
import { agency_validation } from "components/validations";
import useAPIContext from "hooks/api_context";

export default function AgencyRegistrationComponent({ children }) {
  const { makeRequest } = useAPIContext();
  const { push } = useRouter();

  const methods = useForm({
    mode: "all",
    resolver: yupResolver(agency_validation),
  });

  const {
    handleSubmit,
    reset,
    formState: { isValid, isDirty },
  } = methods;

  useEffect(() => {
    reset({
      name: "",
      phone: "",
      starting_hours: "",
      closing_time: "",
    });
  }, []);

  const submitForm = async (payload) => {
    console.log("Agency payload", payload);
    makeRequest({
      method: "post",
      url: "/agency/create-agency",
      payload,
      action: () => push("/management/dashboard"),
    });
  };

  return (
    <main className="w-full flex">
      <div className="w-[65%] bg-wallpaper bg-cover h-screen relative hidden md:flex before:absolute before:left-0 before:top-0 before:bg-black before:bg-opacity-60 before:z-10 before:w-full before:h-full">
        <div className="m-auto text-white w-5/6 z-20 leading-snug text-center">
          <h3 className="text-3xl font-semibold leading-snug mb-4">
            Welcome to Mouvers Agency registration
          </h3>
          <h3 className="text-xl font-semibold leading-snug">
            Please provide you agency information to continue
          </h3>
        </div>
      </div>

      <FormProvider {...methods}>
        <div className="w-full md:w-[35%] flex">
          <form className="w-4/5 m-auto" onSubmit={handleSubmit(submitForm)}>
            {children}

            <div className="w-full text-center">
              <FormBtn
                disabled={!isValid || !isDirty}
                content={
                  <span className="flex items-center justify-center">
                    Submit
                  </span>
                }
                className="rounded-[4px] w-72 m-auto h-14 bg-green-400 hover:bg-green-500 block text-center"
              />
            </div>

            <p className="text-sm flex items-center mt-5 justify-center w-full">
              Have an agency code?
              <Btn
                content="Register here"
                className="text-primary hover:bg-transparent ml-1 p-0.5 px-3"
                // click={create_agency}
              />
            </p>
          </form>
        </div>
      </FormProvider>
    </main>
  );
}
