import Input from 'components/widgets/input'
import PhoneNumberInput from 'components/widgets/phone_number_input'
import React from 'react'

export default function VerifierForm() {
  return (
    <div className="grid grid-cols-2 gap-5 w-11/12 mx-auto">
      <Input 
        name="name"
        label="Name"
      />

      <Input 
        name="email"
        label="Email address"
      />

      <PhoneNumberInput 
        name="phone"
        label="Phone number"
        className="h-14 w-full rounded pl-3"
      />
    </div>
  )
}
