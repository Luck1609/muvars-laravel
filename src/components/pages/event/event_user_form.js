import { useEffect } from 'react'
import { FormProvider, useForm } from "react-hook-form";
import Image from "next/image";
import dayjs from "dayjs";
import { yupResolver } from "@hookform/resolvers/yup";
import { event_user_validation } from "components/validations";
import Input from "components/widgets/input";
import PhoneNumberInput from "components/widgets/phone_number_input";
import { FormBtn } from "components/widgets/btn";
import Helper from "helpers/index";
import useAPIContext from "hooks/api_context";

const { filterValues } = new Helper();

export default function EventUserForm({ event }) {
  const { makeRequest } = useAPIContext();
  const method = useForm({
    mode: "all",
    resolver: yupResolver(event_user_validation),
  });

  const { handleSubmit, watch, reset, formState: { isValid, isDirty, errors } } = method;

  useEffect(() => {
    reset({
      email: '',
      event_id: event.id,
      phone: '',
      pickup_point_id: ''
    })
  }, [event, reset]);
  


  const submit = (payload) => {
    makeRequest({
      method: "post",
      url: "/create-event-user",
      payload,
      mutation: '/event'
    });
  };

  const cover_photo = `${process.env.NEXT_PUBLIC_BACKEND_URL}/${event.cover_photo}`;
  const flyer = `${process.env.NEXT_PUBLIC_BACKEND_URL}/${event.flyer}`;
  return (
    <div className="w-[500px] bg-white rounded z-10 my-20">
      <label className="block p-5 font-semibold text-xl text-center border-b">
        Event Bus Booking
      </label>

      <div className="w-full flex items-center justify-center flex-col py-4">
        <div className="w-32 h-32 rounded-full relative overflow-hidden">
          <Image src={flyer} alt="event flyer" layout="fill" />
        </div>

        <label className="font-bold text-xl block mt-3">{event.name}</label>
        <div className="text-sm">
          <span className="font-bold">Date &amp; time:</span>{" "}
          <span>
            {dayjs(event.time).format("MMM DD, YYYY")} -{" "}
            {dayjs(event.time).format("HH:mma")}
          </span>
        </div>
      </div>

      <FormProvider {...method}>
        <form
          className="w-4/5 grid gap-5 mx-auto py-8 pt-4"
          onSubmit={handleSubmit(submit)}
        >
          <Input name="email" label="Email address" className="w-full" />

          <PhoneNumberInput
            name="phone"
            label="Phone number"
            className="h-14 w-full rounded"
          />

          <Input
            name="pickup_point_id"
            label="Pickup location &amp; time"
            className="w-full"
            options={
              event.points.length >= 1
                ? filterValues({
                    options: event.points,
                    param: {
                      label: (values) => (
                        <>
                          {values.location} - (
                          {dayjs(values.time).format("HH:mma")} -{" "}
                          {dayjs(values.departure).format("HH:mma")})
                        </>
                      ),
                      value: "id",
                    },
                  })
                : []
            }
          />

          <FormBtn
            content="Book"
            className="bg-green-500 hover:bg-green-600 w-56 h-12 m-auto"
            disabled={!isValid || !isDirty}
          />
        </form>
      </FormProvider>
    </div>
  )
}


