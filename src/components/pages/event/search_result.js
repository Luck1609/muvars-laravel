import React from 'react'
import * as Icon from "@iconscout/react-unicons";
import dayjs from "dayjs";
import { useFormContext } from "react-hook-form";
import Image from "next/image";
import { Btn, FormBtn } from "components/widgets/btn";

export default function SearchResult({ user }) {
  // const { formState: {isValid, isDirty} } = useFormContext()
  
  const flyer = `${process.env.NEXT_PUBLIC_BACKEND_URL}/${user.event.flyer}`;

  return (
    <div className="w-11/12 mx-auto lg:mx-0 lg:w-[600px] bg-white rounded z-10 my-20">
      <label className="block p-3 md:p-5 font-semibold text-xl text-center border-b">
        User Info
      </label>

      <div className="w-full flex items-center p-4">
        <div className="">
          <div className="w-20 h-20 rounded-full relative overflow-hidden mr-3">
            <Image src={flyer} alt="event flyer" layout="fill" />
          </div>
        </div>

        <div className="">
          <label className="font-bold text-xl block mt-3">
            {user.event.name}
          </label>
          <div className="text-sm flex items-center">
            <Icon.UilLocationPoint />
            <span className="font-bold mx-2">Location:</span>
            <span>
              {user.event.location}
            </span>
          </div>
          <div className="text-sm flex items-center">
            <Icon.UilSchedule />
            <span className="font-bold mx-2">Date:</span>{" "}
            <span>
              {dayjs(user.event.time).format("MMM DD, YYYY")} -{" "}
              {dayjs(user.event.time).format("HH:mma")}
            </span>
          </div>
          <div className={`text-sm p-1 mt-2 rounded flex items-center ${user.status ? 'bg-green-200 text-green-500' : 'bg-red-200 text-red-500'}`}>
            { user.status ? <Icon.UilCheck className="text-green-500" /> : <Icon.UilTimes className="text-red-500" /> }
            <span className="font-bold mx-2">Payment status:</span>
            <span>
              { user.status ? 'Paid' : 'Pending payment' }
            </span>
          </div>
        </div>
      </div>

      <form className="w-5/6 mx-auto grid md:grid-cols-2 gap-5 my-8">
        <div className="bg-slate-100 p-2 rounded">
          <label className="block text-sm mb-2 font-semibold">Email address</label>
          <span className="">{user.email}</span>
        </div>

        <div className="bg-slate-100 p-2 rounded">
          <label className="block text-sm mb-2 font-semibold">Phone number</label>
          <span className="">{user.phone}</span>
        </div>

        <div className="bg-slate-100 p-2 rounded md:col-span-2">
          <label className="block text-sm mb-2 font-semibold">Pickup location &amp; time</label>
          <span className="">{user.pickup?.location ?? 'Location not available'}</span>
          <span className="">{user.pickup?.time ? `(${dayjs(user.pickuptime).format('HH:mma')})` : ' - Time not available'}</span>
        </div>

        {/* <div className="md:col-span-2">
          <Btn
            content="Search"
            className="bg-green-500 hover:bg-green-600 w-56 h-12 m-auto"
            disabled={!isValid || !isDirty || isLoading}
            click={submit_handler}
          />
        </div> */}
      </form>
    </div>
  )
}
