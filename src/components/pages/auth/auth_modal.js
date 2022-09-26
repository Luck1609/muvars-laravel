import { useForm,FormProvider } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import * as Icons from "@iconscout/react-unicons";
import { buses } from "assets/img/bus";
import { Btn, FormBtn } from "components/widgets/btn";
import { show_auth_modal } from "hooks/redux/modal_reducer";
import Image from "next/image";
import useAPIContext from "hooks/api_context";
import { modals } from "helpers/modal_group";
import { yupResolver } from "@hookform/resolvers/yup";

export default function AuthModal() {
  const { auth_modal: { state, data } } = useSelector(state => state.ModalReducer)
  const { makeRequest } = useAPIContext()
  const method =  useForm({
    mode: 'all',
    resolver: state ? yupResolver(modals[data?.content]?.validation) : ''
  });
  const dispatch = useDispatch();
  
  const { handleSubmit, reset, formState: {isDirty, isValid} } = method;


  const submit = (payload) =>  {
    makeRequest({
      method: 'post',
      url: data?.url,
      payload
    })
  }


  const Content = modals[data?.content]?.forms

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
                </div>
              </form>
            </div>
          </div>
        </FormProvider>
    );
  }
}
