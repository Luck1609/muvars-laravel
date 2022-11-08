import { useEffect } from "react";
import { useForm,FormProvider } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/router";
import * as Icons from "@iconscout/react-unicons";
import { Btn, FormBtn } from "components/widgets/btn";
import { show_auth_modal } from "hooks/redux/modal_reducer";
import useAPIContext from "hooks/api_context";
import { modals } from "helpers/modal_group";
import { toast } from "react-toastify";

export default function AuthModal() {
  const { auth_modal: { state, data } } = useSelector(state => state.ModalReducer)
  const { asPath, push } = useRouter()
  const { makeRequest } = useAPIContext()
  const method =  useForm({
    mode: 'all',
    resolver: state ? yupResolver(modals[data?.content]?.validation) : ''
  });
  const dispatch = useDispatch();
  
  const { handleSubmit, reset, formState: {isDirty, isValid} } = method;

  const url = asPath.split('?')

  const action = url[1] === 'unauthenticated' ? () => window.location.href = (url[2]) : ''

  
  useEffect(() => {
    reset(data?.values)
  }, [reset, data?.values]);
  

  // const handle_auth = (provider) => () => signIn(provider);

  const submit = async (payload) =>  {
    try {
      const result = await makeRequest({
        url: data.url,
        method: 'post',
        payload,
        mutation: '/user-data'
      });
      // close_form();
    } catch ({message}) {
      toast.error(message)
    }
  }

// alert(data.url)
  
  const close_form = () => {
    dispatch(show_auth_modal('close'))
    reset(data?.values)
  }

  const Content = modals[data?.content]?.forms

  if (!state) <></>
  else {
    return (
      <FormProvider {...method}>
          <div className={`fixed w-screen h-screen bg-black bg-opacity-50 flex top-0 left-0 z-50 ${state ? 'flex' : 'hidden'}`}>

            <div className={`m-auto w-full ${data?.width ?? 'max-w-[600px]'}`}>
              {
                url[1] === 'unauthenticated' ? <div className="w-full bg-red-200 text-sm text-red-500 p-3 rounded mb-2">
                  Uauthorized access, please login to continue
                </div> : null
              }
              <form className="w-full m-auto bg-white rounded-md" onSubmit={handleSubmit(submit)}>
                <header className="p-4 relative border-b px-10 mb-5">
                  <h1 className="text-gray-600 text-center text-lg capitalize font-medium">{data?.title}</h1>
                  
                  <Btn 
                    content={<Icons.UilTimes className="m-0" />}
                    className="btn text-slate-500 hover:bg-slate-50 absolute right-2 top-1 shadow-none hover:shadow-none p-2"
                    click={close_form}
                  />
                </header>

                <Content />

                <div className="w-4/5 mx-auto pb-8">
                  <FormBtn 
                    content={` ${ data.title === 'Login' ? 'Login' : 'Register' }`}
                    className="bg-green-500 hover:bg-green-600 h-10 w-full"
                  />

                  {/* <div className="w-full flex items-center justify-center relative my-4">
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
                  </div> */}
                </div>
              </form>
            </div>
          </div>
        </FormProvider>
    );
  }
}
