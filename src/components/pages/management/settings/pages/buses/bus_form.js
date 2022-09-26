import Input from 'components/widgets/input'
import React from 'react'

export default function BusForm() {
  return (
    <div className="grid grid-cols-2 gap-5 w-11/12 mx-auto">
      <Input 
        name="label"
        label="Bus label"
      />

      <Input 
        name="capacity"
        label="Bus capacity"
      />

      <Input 
        name="plate_no"
        label="Bus capacity"
      />

      <Input 
        name="color"
        label="Bus color"
      />

      <Input 
        name="seat_arrangement_style"
        label="Seat type"
        options={[]}
      />
    </div>
  )
}
