import React from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import Layout from 'components/layouts/users_nav'
import { yupResolver } from '@hookform/resolvers/yup'
import Input from 'components/widgets/input'
import PhoneNumberInput from 'components/widgets/phone_number_input'
import { FormBtn } from 'components/widgets/btn'
import { event_user_validation } from 'components/validations'
import useSWR from 'swr'

export default function EventComponent({ event }) {
  // const { data } = useSWR(`/event-bus-booking/${slug}`)
  const method = useForm({ mode: 'all', resolver: yupResolver(event_user_validation) })


  const cover_photo = `${process.env.NEXT_PUBLIC_BACKEND_URL}/${event.cover_photo}`
  console.log('Event page info', cover_photo)

  return (
    <Layout>
      <div className={`bg-["url(${cover_photo})"] bg-cover w-full h-screen relative after:bg-black after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-opacity-25 flex justify-center items-center flex-col`}>
        <div className="relative z-10">
          <label className="font-bold text-3xl text-white">{ event.name }</label>
        </div>

        <div className="w-[500px] bg-white rounded z-10">
          <label className="block p-3 font-semibold text-xl text-center border-b">Event Bus Booking</label>
          <FormProvider {...method}>
            <form className="w-4/5 grid gap-5 mx-auto py-8">
              <Input 
                name="email"
                label="Email address"
                className="w-full"
              />

              <PhoneNumberInput 
                name="phone"
                label="Phone number"
                className="h-14 w-full rounded"
              />

              <Input 
                name="pickup_location"
                label="Pickup location &amp; time"
                className="w-full"
                options={[]}
              />

              <FormBtn 
                content="Book"
                className="bg-green-500 hover:bg-green-600 w-56 h-12 m-auto"
              />
            </form>
          </FormProvider>
        </div>
      </div>
    </Layout>
  )
}
