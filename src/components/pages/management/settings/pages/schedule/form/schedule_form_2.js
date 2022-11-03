import React from 'react'
import { Btn } from 'components/widgets/btn'
import Input from 'components/widgets/input'

export default function AddStops() {
  

  return (
    <>
      <Btn 
        content="Add stop"
        className="bg-blue-500 h-10"
      />

      <div className="grid grid-cols-2 gap-5">
        <Input 
          name="name"
          label="Stopping place name"
          className="w-full"
        />

        <Input 
          name="fare"
          label="Fare"
          className="w-full"
        />
        
      </div>

      <div className="grid gap-5">
        <label className="col-span-2 font-medium text-lg block p-3">Total stops</label>
        
        <div className="w-full grid grid-cols-2 gap-3">
          <label className="font-medium">Sankori</label>
          <span className="">GHc 50</span>
        </div>
      </div>
    </>
  )
}
