import React from 'react'
import Image from 'next/image'
import { buses } from 'assets/img/bus'

const buses_list = [
  {
    name: 'VIP',
    img: buses.bus_1,
    count: 79
  },
  {
    name: 'OA travel & tour',
    img: buses.bus_2,
    count: 63
  },
  {
    name: 'Metro Mass Transit',
    img: buses.bus_3,
    count: 94
  },
  {
    name: 'Adehyeman',
    img: buses.bus_4,
    count: 32
  },
]

export default function BusCard() {
  return (
    <div className="w-full mt-40">
      <div className="contained grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        <h2 className="text-3xl font-bold col-span-3">Available Buses</h2>
        {
          buses_list.map(({ img, name, count }, index) => {
            return  <Card img={img} name={name} count={count} key={index.toString()} />
          })
        }
      </div>
    </div>
  )
}


const Card = ({ img, name, count }) => {
  return (
    <div className="w-full h-52 relative rounded-md overflow-hidden before:absolute before:left-0 before:top-0 before:bg-black before:bg-opacity-40 before:w-full before:h-full before:z-10">
      <Image src={ img } alt="bus name" layout="fill" className="z-0" />
      
      <div className="absolute bottom-0 right-0 z-10 w-full h-20 pl-8 text-white">
        <label className="text-xl font-semibold block">{ name }</label>
        <span className="text-sm font-medium">{ count } buses</span>
      </div>
    </div>
  )
}