import { buses } from "assets/img/bus";
import Image from "next/image";
import * as Icons from "@iconscout/react-unicons";
import Svg from "assets/img/svg";
import { Btn } from "components/widgets/btn";
import { FormProvider, useForm } from "react-hook-form";
import { useRouter } from "next/router";

export default function ScheduleCard() {
  const { pathname } = useRouter();

  const methods = useForm();

  const { handleSubmit } = methods;

  const submit = () => {};

  let seats = [];

  for (let i = 1; i <= 44; i++) {
    seats = [...seats, { label: `Seat No: ${i}`, value: i }];
  }

  return (
    <>
      <div className="w-full grid grid-cols-4 rounded-[3px] overflow-hidden bg-white shadow">
        <div className="w-full">
          <Image src={buses.bus_1} alt="" layout="responsive" />
        </div>

        <div className="col-span-2 ml-5 p-3">
          <div className="flex items-start mb-3">
            <h3 className="text-lg font-semibold grow">VIP Bus</h3>
          </div>

          <div className="flex items-center mb-2">
            <div className="text-sm flex items-center justify-center flex-col">
              <span className="font-semibold">Accra (Departure)</span>

              <p className="font-medium">8:00am</p>
            </div>

            <div className="bus-separator"></div>

            <div className="text-sm flex items-center justify-center flex-col">
              <span className="font-semibold">Sunyani (Arrival)</span>

              <p className="font-medium">8:00am</p>
            </div>
          </div>

          <div className="text-sm font-semibold text-rose-500">
            <label className="mr-2">Price per passenger:</label>
            <span className="">GH¢ 105</span>
          </div>
        </div>

        <div className="text-center text-green-500 border-l p-5">
          <p className="font-semibold">Available seats</p>
          <label className="block font-semibold text-lg">21</label>

          {pathname !== "/bus-schedules" ? null : (
            <Btn
              content="Book now"
              className="bg-blue-500 hover:bg-blue-600 mt-2"
            />
          )}
        </div>
      </div>

      {pathname !== "/bus-schedules" ? (
        <FormProvider {...methods}>
          <form onSubmit={handleSubmit(submit)} className="">
            <div className="col-span-2 w-56 grid grid-cols-4 gap-y-3 bg-white">
              {seats.map(({ value }, index) => {
                return (
                  <div
                    className="w-12 h-12 text-white bg-empty-seat bg-cover rotate-90"
                    key={index.toString()}
                  ></div>
                );
              })}
              {/* <div className="bg-rose-500 h-8"></div>
            <div className="bg-rose-500 h-8"></div>
            <div className="bg-rose-500 h-8"></div>
            <div className="bg-rose-500 h-8"></div>
            <div className="bg-rose-500 h-8"></div>
            <div className="bg-rose-500 h-8"></div>
            <div className="bg-rose-500 h-8"></div>
            <div className="bg-rose-500 h-8"></div>
            <div className="bg-rose-500 h-8"></div>
            <div className="bg-rose-500 h-8"></div>
            <div className="bg-rose-500 h-8"></div>

            <div className="bg-rose-500 h-8"></div>
            <div className="bg-rose-500 h-8"></div>
            <div className="bg-rose-500 h-8"></div>
            <div className="bg-rose-500 h-8"></div>
            <div className="bg-rose-500 h-8"></div>
            <div className="bg-rose-500 h-8"></div>
            <div className="bg-rose-500 h-8"></div>
            <div className="bg-rose-500 h-8"></div>
            <div className="bg-rose-500 h-8"></div>
            <div className="bg-rose-500 h-8"></div>
            <div className="bg-rose-500 h-8"></div>
            <div className="bg-rose-500 h-8"></div> */}
            </div>
            <div className=""></div>
          </form>
        </FormProvider>
      ) : null}
    </>
  );
}
