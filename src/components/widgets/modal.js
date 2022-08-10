import { useEffect } from 'react';
import { FormBtn, Btn } from './btn';
import { FormProvider, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useSelector, useDispatch } from 'react-redux';
import { showModal } from 'redux/types';
import { UilTimes } from '@iconscout/react-unicons';
import useAPIContext from 'hooks/api_context';


export default function FormModal() {
  const { makeRequest } = useAPIContext();
  const dispatch = useDispatch();
  const { modal: { state, data } } = useSelector(state => state.MiscReducer);
  // const { modal: { validation, content: Component, url, values, title, method: actionMethod, action } } = useSelector(state => state.MiscReducer);

  const method = useForm({
    mode: 'all',
    resolver: data?.validation ? yupResolver(data?.validation) : '',
    defaultValues: data?.values
  })

  const { handleSubmit, reset, watch, formState: { isDirty, isValid,  } } = method;

  useEffect(() => {
    reset(data?.values)
  }, [data, reset])


  const submit = async (payload) => {

    try {
      await makeRequest({
        method: data?.method,
        url: data?.url,
        payload,
        mutation: data?.mutate_url,
        // action: () => dispatch(showModal('close'))
      });
    } catch ({ message }) {
    }
  }

  const Component = data?.content;

  // console.log('Watching modal values', watch())
  if (!state) return <></>
  else {
    return (
      <FormProvider {...method}>
        <div className={`fixed w-screen h-screen bg-black bg-opacity-50 flex top-0 left-0 z-50 ${state ? 'flex' : 'hidden'}`}>

          <div className={`m-auto w-full ${data?.width ?? 'max-w-md'}`}>

            <form className="w-full m-auto bg-white rounded-md" onSubmit={handleSubmit(submit)}>
              <header className="p-4 relative border-b px-10 mb-5">
                <h1 className="text-gray-600 text-center text-lg uppercase font-medium">{data?.title}</h1>
                
                <Btn 
                  content={<UilTimes className="m-0" />}
                  className="btn text-slate-500 hover:bg-slate-50 absolute right-2 top-1 shadow-none hover:shadow-none p-2"
                  click={
                    () => {
                      dispatch(showModal('close'))
                      reset(data?.values)
                    }
                  }
                />
              </header>


              <div className='h-full'>
                {
                  <Component />
                }
              </div>


              <footer className="mt-5 mb-3 border-t py-3">
                <div className="text-center">
                  <FormBtn
                    content="submit"
                    disabled={!isDirty || !isValid}
                    className=" btn bg-teal h-12 w-40 rounded-full"
                  />
                </div>
              </footer>
            </form>
          </div>
        </div>

      </FormProvider>
    )
  }
}





      // <FormProvider {...method}>
      //   <div className={`fixed w-screen h-screen bg-black bg-opacity-50 flex top-0 left-0 z-50 ${state ? 'flex' : 'hidden'}`}>

      //     <div className="m-auto w-full max-w-md">

      //       <form className="w-full m-auto bg-white rounded-md" onSubmit={handleSubmit(submit)}>
      //         <header className="p-4 relative border-b px-10 mb-5">
      //           <h1 className="text-gray-600 text-center text-lg uppercase font-medium">{data?.title}</h1>
                
      //           <Btn 
      //             content={<UilTimes className="m-0" />}
      //             className="text-slate-500 hover:bg-slate-100 absolute right-2 top-1 shadow-none hover:shadow-none h-8 w-8"
      //             click={
      //               () => {
      //                 dispatch(showModal('close'))
      //                 reset(data?.values)
      //               }
      //             }
      //           />
      //         </header>


      //         <div className='h-full'>
      //           {
      //             <Component />
      //           }
      //         </div>


      //         <footer className="mt-5 mb-3 border-t py-3">
      //           <div className="text-center">
      //             <FormBtn
      //               content="submit"
      //               disabled={!isDirty || !isValid}
      //               className=" btn bg-teal h-12 w-40 rounded-full"
      //             />
      //           </div>
      //         </footer>
      //       </form>
      //     </div>
      //   </div>

      // </FormProvider>