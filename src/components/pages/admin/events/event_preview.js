import dayjs from 'dayjs'
import Image from 'next/image'
import React from 'react'
import { useFormContext } from 'react-hook-form'

export default function EventPreview() {
  const { watch } = useFormContext()

  const cover = watch('cover_photo'), flyer = watch('flyer'), time = watch('time');

  return (
    <div className="w-4/5 mx-auto grid grid-cols-2 gap-5">
      <div className="w-full p-3 bg-slate-100">
        <label className="text-sm">Event name</label>
        <span className="block">{ watch('name') }</span>
      </div>
      
      <div className="w-full p-3 bg-slate-100">
        <label className="text-sm">Event location</label>
        <span className="block">{ watch('location') }</span>
      </div>
      
      <div className="w-full p-3 bg-slate-100">
        <label className="text-sm">Event date and time</label>
        <span className="block">{ time ? `${dayjs(time).format('MMM DD, YYYY')}  ${dayjs(time).format('HH:mma')}` : null  }</span>
      </div>

      <div className="w-full p-3 bg-slate-100">
        <label className="text-sm">Bus fare</label>
        <span className="block">{ watch('price') }</span>
      </div>

      {/* <div className="w-full p-3 bg-slate-100">
        <label className="text-sm">Cover photo</label>
        <div className="w-44 h-20 relative">
          {cover && <Image src={URL.createObjectURL(cover[0])} alt="cover photo" layout="fill" className="rounded inline-block mr-2" />}
        </div>
      </div> */}

      <div className="w-full p-3 bg-slate-100">
        <label className="text-sm">Event flyer</label>
        <div className="w-44 h-20 relative">
          {flyer && <Image src={URL.createObjectURL(flyer[0])} alt="flyer" layout="fill" className="rounded inline-block mr-2" />}
        </div>
      </div>
    </div>
  )
}
