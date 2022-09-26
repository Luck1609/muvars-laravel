import Input from 'components/widgets/input'
import React from 'react'

export default function RouteForm() {
  return (
    <div>
      <Input 
        name="region"
        label="Select region"
        options={[]}
      />

      <Input 
        name="town"
        label="Town or city name"
      />
    </div>
  )
}
