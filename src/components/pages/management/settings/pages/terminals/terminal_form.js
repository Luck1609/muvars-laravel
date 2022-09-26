import Input from 'components/widgets/input'
import PhoneNumberInput from 'components/widgets/phone_number_input'
import React from 'react'

export default function TerminalForm() {
  return (
    <div className="grid grid-cols-2 gap-5 w-11/12 mx-auto">
      <Input 
        name="terminal"
        label="Terminal name"
      />

      <Input 
        name="location_region"
        label="Terminal name"
      />

      <Input 
        name="location_town"
        label="Terminal name"
      />

      <PhoneNumberInput 
        name="phone"
        label="Primary phone number"
        className="w-full h-14"
      />

      <PhoneNumberInput 
        name="alt_phones"
        label="Primary phone number"
        className="w-full h-14"
      />

      <>Add manager_id</>
      <>Add Location map here</>
    </div>
  )
}
