import { useEffect } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { UilTimes } from '@iconscout/react-unicons'
import useAPIContext from 'hooks/api_context'
import { show_modal } from 'hooks/redux/modal_reducer'
import { FormBtn, Btn } from './btn'
import { useDispatch, useSelector } from 'react-redux'
import { modals } from 'helpers/modal_group'


export default function FormModal() {
  const { makeRequest } = useAPIContext()
  const dispatch = useDispatch()
  const { modal: { state, data } } = useSelector(state => state.ModalReducer)

  const method = useForm({
    mode: 'all',
    resolver: data?.validation ? yupResolver(data?.validation) : ''
  })

  const { handleSubmit, reset, watch, formState: { isDirty, isValid,  } } = method

  useEffect(() => {
    reset(data?.values)
  }, [data, reset])


  const submit = async (payload) => {

    try {
      await makeRequest({
        method: data?.method,
        url: data?.url,
        payload,
        mutation: data?.mutation,
        action: () => data?.action ?? dispatch(show_modal('close'))
      })
    } catch ({ message }) {
    }
  }

  const Component = data?.content
  // const Component = modals[data?.content]

  if (!state) return <></>
  else {
    return (
      <FormProvider {...method}>
        <div className={`fixed w-screen h-screen bg-black bg-opacity-50 flex top-0 left-0 z-50 ${state ? 'flex' : 'hidden'}`}>

          <div className={`m-auto w-full ${data?.width ?? 'max-w-[600px]'}`}>

            <form className="w-full m-auto bg-white rounded-md" onSubmit={handleSubmit(submit)}>
              <header className="p-4 relative border-b px-10 mb-5">
                <h1 className="text-gray-600 text-center text-lg capitalize font-medium">{data?.title}</h1>
                
                <Btn 
                  content={<UilTimes className="m-0" />}
                  className="btn text-slate-500 hover:bg-slate-50 absolute right-2 top-1 shadow-none hover:shadow-none p-2"
                  click={
                    () => {
                      dispatch(show_modal('close'))
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
                    className="btn bg-teal h-12 w-56"
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