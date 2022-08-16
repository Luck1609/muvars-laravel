import React from 'react'
import Input from 'components/widgets/input'
import PhoneInput from 'react-phone-number-input/input'

export default function AddUserForm() {

  return (
    <div className="grid grid-cols-2 gap-4 w-11/12 px-3 m-auto">
      <Input 
        name="firstname"
        label="Firstname"
      />

      <Input 
        name="lastname"
        label="Lastname"
      />

      <PhoneInput 
        name="phone"
        label="Phone number"
        className="rounded-[4px] p-3.5 w-full border border-zinc-300"
      />

      <Input 
        name="role"
        label="Select user role"
        options={[]}
      />
    </div>
  )
}
