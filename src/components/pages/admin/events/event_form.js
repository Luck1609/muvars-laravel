import ImageSelection from 'components/widgets/image_selection'
import Input from 'components/widgets/input'
import React from 'react'

export default function EventForm1() {
  return (
    <div className="grid grid-cols-2 gap-5 w-11/12 mx-auto">
      <Input 
        name="name"
        label="Event name"
      />

      <Input 
        name="time"
        label="Event date and time"
        type="datetime-local"

        InputLabelProps={
          {
            shrink: true
          }
        }
      />

      <Input 
        name="price"
        label="Price"
        type="number"
      />

      <Input 
        name="location"
        label="Location"
      />

    </div>
  )
}
