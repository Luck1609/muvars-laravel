import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Btn } from "../btn";
import Stepper from "./stepper";
import * as Icons from "@iconscout/react-unicons";
import useAPIContext from "hooks/api_context";
import { step_modal } from "hooks/redux/modal_reducer";
import { modals } from "helpers/modal_group";

export default function StepModal() {
  const { makeRequest } = useAPIContext();
  const {
    step_modal: { data, state },
  } = useSelector((state) => state.ModalReducer);
  const dispatch = useDispatch();
  const [step, setStep] = useState(0);

  const methods = useForm({
    mode: "all",
    // resolver: state ? yupResolver(modals[data?.content]?.validation[step]) : ''
  });

  const { handleSubmit, reset, watch } = methods;

  useEffect(() => {
    reset(data?.values);
  }, [reset, data?.values]);

  useEffect(() => {
    if (state === false) setStep(0);
  }, [state, setStep]);

  const submit = async (form_values) => {
    const form_data = new FormData();

    const { cover_photo, flyer, ...payload } = form_values;

    if (watch("cover_photo")) form_data.append("cover_photo", cover_photo[0]);
    if (watch("flyer")) form_data.append("flyer", flyer[0]);

    Object.entries(payload).forEach(([key, value]) => {
      form_data.append(key, value);
    });

    try {
  // console.log("Inspecting step form data changes", form_values);
      makeRequest({
        method: data?.method,
        url: data?.url,
        payload: form_data,
        mutation: data?.mutation,
      });
    } catch({message}) {
      
    }
    
  };


  if (!state) return <></>;
  else {
    const Component = modals[data?.content].forms[step];

    return (
      <FormProvider {...methods}>
        <form
          className="fixed w-screen h-screen bg-black bg-opacity-50 flex top-0 left-0 z-50"
          onSubmit={handleSubmit(submit)}
        >
          <div className="m-auto w-full max-w-xl">
            <section className={`m-auto w-full bg-white rounded-md`}>
              <header className="p-4 relative border-b mb-5">
                <h1 className="text-lg uppercase text-center font-medium">
                  {data?.title}
                </h1>

                <div className="absolute right-2 top-1 p-2">
                  <Btn
                    content={<Icons.UilTimes />}
                    className="btn p-2 hover:bg-slate-100 min-w-0 shadow-none hover:shadow-none text-slate-500"
                    click={() => {
                      dispatch(step_modal("close"));
                      reset(data?.values);
                    }}
                  />
                </div>
              </header>

              <div className="max-h-[400px] overflow-y-scroll py-3">
                <Component />
              </div>

              <footer className="mt-5 border-t">
                <div className="py-2">
                  <Stepper
                    step={step}
                    setStep={setStep}
                    total={modals[data.content].forms.length}
                  />
                </div>
              </footer>
            </section>
          </div>
        </form>
      </FormProvider>
    );
  }
}
