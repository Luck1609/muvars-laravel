import React, { useEffect } from 'react';
import { useFormContext } from 'react-hook-form';
import { Controller } from 'react-hook-form';
import Input from 'react-phone-number-input/input';
// import PhoneInput, { formatPhoneNumber } from 'react-phone-number-input';
// import PhoneInputWithCountry from 'react-phone-number-input/react-hook-form';
// import GH from 'assets/img/GH.svg';




export default function PhoneNumberInput ({ name, label, className }) {

  const { control, watch, trigger } = useFormContext()
  let v = watch(name)

  useEffect(() => {
    if (v) trigger(name)
  }, [v, trigger, name])

  // console.log('Phone number errors', errors, watch(name))


  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, onBlur, value = '' }, fieldState: { error } }) => (
        <>
          { 
            label ? <label className="font-medium text-sm block mb-2">{label}</label> : null
          }
          
          <Input
            country="GH"
            value={Array.isArray(value) ? '' : value }
            onChange={onChange}
            className={`border border-[#0000003b] ${className}`}
            label="Phone number"

          />
        </>
      )} 
    />
  )
}