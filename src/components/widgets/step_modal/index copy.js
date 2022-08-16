import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FormProvider, useForm } from 'react-hook-form'
// import { yupResolver } from '@hookform/resolvers/yup'
import { Btn } from '../btn'
import Stepper from './stepper'
import * as Icons from '@iconscout/react-unicons'
import useAPIContext from 'hooks/api_context'
import { step_modal } from 'hooks/redux/modal_reducer'


export default function StepModal() {
  const {makeRequest} = useAPIContext()
  const { step_modal: { data, state } } = useSelector(state => state.ModalReducer)
  const dispatch = useDispatch();
  let [step, setStep] = useState(0);



  const methods = useForm({
    mode: 'all',
    // resolver: yupResolver(Schema[stepFieldName[step]])
  })

  const { handleSubmit, reset, watch  } = methods;

  // useEffect(() => {
  //   reset(values)
  // }, [reset, values])

  useEffect(() => {
    if (state === false) setStep(0);
  }, [state, setStep])



  const submit = async (data) => {
    // await makeRequest({
    //   method: 'post',
    //   url: 'tickets',
    //   payload: data,
    //   mutation: `tickets/pending`
    // });

    // setStep = 0;
  }
  console.log('Inspecting step form data changes', data, state);

  return <></>
  // if (!state) return <></>
  // else {

    return (
      <FormProvider {...methods}>
        <form className="fixed w-screen h-screen bg-black bg-opacity-50 flex top-0 left-0 z-50" onSubmit={handleSubmit(submit)}>

          <div className="m-auto w-full max-w-xl">

            <section className={`m-auto w-full bg-white rounded-md`}>
              <header className="p-4 relative border-b mb-5">
                <h1 className="text-lg uppercase text-center font-medium">{ data?.title }</h1>

                <div className="absolute right-2 top-1 p-2">

                  <Btn
                    content={<Icons.Clear />}
                    className="btn p-2 hover:bg-slate-100 min-w-0 shadow-none hover:shadow-none text-slate-500"
                    click={
                      () => {
                        dispatch(step_modal('close'))
                        // reset(data?.values)
                      }
                    }
                  />
                </div>
              </header>


              <div className="max-h-[400px] overflow-y-scroll pt-7">
                {/* <ShowForm step={step} /> */}
              </div>

              <footer className="mt-5 border-t">

                <div className="py-2">
                  <Stepper step={step} setStep={setStep}  />
                </div>
              </footer>
            </section>
          </div>
        </form>
      </FormProvider>
    )
  }
}
