import React from 'react'
import Input from 'components/widgets/input'

export default function ScheduleForm() {

  return (
    <div className="grid grid-cols-2 gap-4 w-11/12 px-3 m-auto">
      <Input 
        name="driver"
        label="Select driver"
        options={[]}
      />
      
      <Input 
        name="driver"
        label="Select bus"
        options={[]}
      />

      <Input 
        name="fare"
        label="Fare"
        type="number"
      />

      <Input 
        name="origin"
        label="Bus origin"
        options={[]}
      />

      <Input 
        name="origin"
        label="Bus destination"
        options={[]}
      />

      <Input 
        name="time"
        label="Add departure time"
        type="datetime-local"
        InputLabelProps={
        {
            shrink: true,
          }
        }
      />
    </div>
  )
}
