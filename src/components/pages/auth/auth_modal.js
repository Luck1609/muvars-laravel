import { useForm,FormProvider } from "react-hook-form";
import * as Icons from "@iconscout/react-unicons";
import { signIn } from "next-auth/react";
import { buses } from "assets/img/bus";
import { Btn, FormBtn } from "components/widgets/btn";
// import Input from "components/widgets/input";
// import PasswordInput from "components/widgets/password_input";
import { show_auth_modal } from "hooks/redux/modal_reducer";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
// import Register from "./register";

export default function AuthModal() {
  const method =  useForm();
  const dispatch = useDispatch();
  const { auth_modal: { state, data } } = useSelector(state => state.ModalReducer)
  
  const { handleSubmit, reset, formState: {isDirty, isValid} } = method;

  const handle_auth = (provider) => () => signIn(provider);

  const submit = ({email, password}) =>  {
    // console.log('Auth credentials', credentials)
    signIn('credentials', {email, password});
  }

  const Content = data?.content

  if (!state) <></>
  else {
    return (
      
        <FormProvider {...method}>
          <div className={`fixed w-screen h-screen bg-black bg-opacity-50 flex top-0 left-0 z-50 ${state ? 'flex' : 'hidden'}`}>

            <div className={`m-auto w-full ${data?.width ?? 'max-w-[600px]'}`}>

              <form className="w-full m-auto bg-white rounded-md" onSubmit={handleSubmit(submit)}>
                <header className="p-4 relative border-b px-10 mb-5">
                  <h1 className="text-gray-600 text-center text-lg capitalize font-medium">{data?.title}</h1>
                  
                  <Btn 
                    content={<Icons.UilTimes className="m-0" />}
                    className="btn text-slate-500 hover:bg-slate-50 absolute right-2 top-1 shadow-none hover:shadow-none p-2"
                    click={
                      () => {
                        dispatch(show_auth_modal('close'))
                        reset(data?.values)
                      }
                    }
                  />
                </header>

                <Content />

                <div className="w-4/5 mx-auto pb-8">
                  <FormBtn 
                    content={` ${ data.title === 'Login' ? 'Login' : 'Register' }`}
                    className="bg-green-500 hover:bg-green-600 h-10 w-full"
                  />

                  <div className="w-full flex items-center justify-center relative my-4">
                    <hr className="w-full border absolute" />
                    <span className="font-medium z-10 bg-white px-3">Or</span>
                  </div>

                  <div className="">
                    <Btn
                      content={
                        <div className="w-full flex items-center">
                          <Icons.UilFacebook size={25} className="mr-2" /> { data.title === 'Login' ? 'Login with Facebook' : 'Register with Facebook' }
                        </div>
                      }
                      variant="outlined"
                      className={`text-blue-600 bg-white hover:bg-blue-600 hover:text-white mb-3 w-full h-10 ${ data.title === 'Login' ? 'pl-14' : 'pl-32' }`}
                      click={handle_auth('facebook')}
                    />

                    <Btn
                      content={
                        <div className="w-full flex items-center">
                          <Image
                            src={buses.google}
                            alt=""
                            width={25}
                            height={25}
                          />
                          <span className="ml-2">{ data.title === 'Login' ? 'Login with Google' : 'Register with Google' }</span>
                        </div>
                      }
                      variant="outlined"
                      className={`text-slate-500 bg-white border-slate-300 hover:bg-slate-500 hover:text-white hover:border-white w-full h-10 ${ data.title === 'Login' ? 'pl-14' : 'pl-32' }`}
                      click={handle_auth('google')}
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>

        </FormProvider>

    );
  }
}
