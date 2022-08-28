import { Btn } from "components/widgets/btn";
import { FormProvider, useForm } from "react-hook-form";

export default function Hero() {
  const methods = useForm();
  const { handleSubmit } = methods;

  const submit = () => {};

  return (
    <div className="flex w-full contained h-80 items-center px-5 gap-5">
      <p className="font-medium text-2xl text-white w-full leading-snug">
        Welcome to the home of Smart-Ticket bus hiring! Our buses have the
        mission to take you to your destination safely. Pick a category to start
        your bus search now!
      </p>

      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(submit)} className="w-full">
          <ul className="w-full grid grid-cols-2 gap-5">
            {
            bus_types.map(({label, icon}, index) => {
              return (
                <li className="" key={index.toString()}>
                  <Btn
                    content={
                      <p className="flex items-center">
                        <span>{ label }</span>
                      </p>
                    }
                    className="text-left bg-default-gold h-12 w-full font-medium rounded-full text-slate-700"
                  />
                </li>
              )
            })
            }
          </ul>
        </form>
      </FormProvider>
    </div>
  );
}

const bus_types = [
  {
    label: "40 - 50 Seater",
    icon: "",
  },
  {
    label: "VIP buses",
    icon: "",
  },
  {
    label: "Coastal Buses",
    icon: "",
  },
  {
    label: "Mini Vans",
    icon: "",
  },
  {
    label: "SUV&apos;s",
    icon: "",
  },
  {
    label: "Others",
    icon: "",
  },
];
