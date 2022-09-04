import React, { useEffect, useState } from 'react';
import { useFormContext } from 'react-hook-form';
import { Controller } from 'react-hook-form';
import Input from 'react-phone-number-input/input';
// import PhoneInput, { formatPhoneNumber } from 'react-phone-number-input';
// import PhoneInputWithCountry from 'react-phone-number-input/react-hook-form';
// import GH from 'assets/img/GH.svg';




export default function PhoneNumberInput ({ name, label, className }) {
  const [active, setActive] = useState(false)
  const { control, watch, trigger } = useFormContext()
  let v = watch(name)

  useEffect(() => {
    if (v) trigger(name)
  }, [v, trigger, name])

  // console.log('Phone number errors', errors, watch(name))

  const change_state = () => setActive(!active)

  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, onBlur, value = '' }, fieldState: { error } }) => (
        <div className="relative">
          { 
            label ? <label className={`block mb-2 absolute ${ active ? '-top-2.5 bg-white px-2' : 'top-4' } left-4 font-light`} onClick={change_state}>{label}</label> : null
          }
          
          <Input
            country="GH"
            value={Array.isArray(value) ? '' : value }
            onChange={onChange}
            className={`border border-[#0000003b] ${className}`}
            label="Phone number"

          />
        </div>
      )} 
    />
  )
}