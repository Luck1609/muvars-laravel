// import { useEffect, useState } from 'react'
import { FormProvider, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useSWRConfig } from "swr";
import { useRouter } from "next/router";
// import { yupResolver } from '@hookform/resolvers/yup'
// import validations from 'helper/yupValidations'

// import * as UIcons from '@iconscout/react-unicons'
import { Btn, FormBtn } from "components/widgets/btn";
import useAPIContext from "hooks/api_context";
import { auth_user } from "hooks/redux/modal_reducer";

export default function GuestLayout({ children }) {
  const { mutate } = useSWRConfig()
  const { pathname, push } = useRouter();
  const { makeRequest } = useAPIContext();
  const dispatch = useDispatch();

  // const { login, forgotPassword, register, resetPassword } = useAdminAuth({
  //   middleware: "guest"
  // });
  const submitAction = (data) => {
    switch (pathname) {
      case '/login':
        mutation(data)
      break;

      case '/register':
        push('/login')
      break;
    
      default:
        break;
    }
  }

  const mutation = async (data) => {
    dispatch(auth_user(data))
    push('/')
  }

  const submitForm = async (payload) => {
    makeRequest({
      method: 'post',
      url: pathname,
      payload,
      action: (data) => submitAction(data)
    })
    // switch (pathname) {
    //   case "/login":
    //     makeRequest({

    //     })
    //     break;

    //   case "/forgot-password":
    //     forgotPassword({ payload });
    //     break;

    //   default:
    //     if (/password-reset/.test(pathname)) resetPassword({ payload });
    //     break;
    // }
  };


  const methods = useForm({
    mode: "all",
    // resolver: url === '/login' ? yupResolver(validations['login_validation'])
    //   : url === '/register' ? yupResolver(validations['register_validation'])
    //   : url === '/forgot-password' ? yupResolver(validations['forgot_password_validation'])
    //   : yupResolver(validations['reset_password_validation'])
  });

  const {
    handleSubmit,
    formState: { isValid, isDirty },
  } = methods;

  // const create_agency = () => push('/register');

  return (
    <main className="w-full flex">
      <div className="w-[60%] bg-wallpaper bg-cover h-screen relative hidden md:flex before:absolute before:left-0 before:top-0 before:bg-black before:bg-opacity-60 before:z-10 before:w-full before:h-full">
        <div className="m-auto text-white w-5/6 z-20 leading-snug text-center">
          <h3 className="text-3xl font-semibold leading-snug mb-4">
            Welcome to Muvers Ghana
          </h3>
          <h3 className="text-xl font-semibold leading-snug">
            Please login to continue
          </h3>
        </div>
      </div>

      <FormProvider {...methods}>
        <div className="w-full md:w-[40%] flex">
          <form className="w-5/6 m-auto" onSubmit={handleSubmit(submitForm)}>
            {children}
            <FormBtn
              disabled={!isValid || !isDirty}
              content={
                <span className="flex items-center justify-center">
                  Submit
                </span>
              }
              className="rounded-[4px] w-44 m-auto h-12 bg-green-400 hover:bg-green-500 block text-center"
            />

            
            {/* <div className="mt-8">
              <p className="text-sm flex items-center">Have an agency code? 
                <Btn 
                  content="Register here" 
                  className="text-primary hover:bg-transparent ml-1 p-0.5 px-3" 
                  click={create_agency}
                />
              </p>
            </div> */}
          </form>
        </div>
      </FormProvider>
    </main>
  );
}
