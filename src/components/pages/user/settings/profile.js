import React from 'react'
import { FormProvider, useForm } from "react-hook-form";
import Input from "components/widgets/input";
import SingleImageSelection from "components/widgets/single_image_selection";
import { Btn } from 'components/widgets/btn';
import PhoneNumberInput from 'components/widgets/phone_number_input';

export default function Profile({ user }) {
  const methods = useForm({mode: 'all'})

  return (
    <FormProvider {...methods}>
      <form className="w-full grid grid-cols-2 gap-5 px-10 pb-7 bg-white">
        
        <div className="flex col-span-2 pt-7">
          <label className="font-xl font-semibold block grow">Basic info settings</label>

          <Btn 
            content="Save"
            className="btn bg-primary"
          />
        </div>

        <div className="w-full grid gap-5">
          <Input 
            name="email"
            label="Change email address"
            className="w-full"
          />

          <PhoneNumberInput 
            name="phone"
            label="Change primary phone number"
            className="w-full h-14 rounded-[4px]"
          />
        </div>

        <div className="">
          <SingleImageSelection 
            name="avatar"
            label={<>Upload profile picture <span className="font-semibold text-red-400">(max 3Mb)</span></>}
            flexDirection="flex-col text-center"
          />
        </div>
      </form>
    </FormProvider>
  )
}
