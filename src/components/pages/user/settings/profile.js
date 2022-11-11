import React from 'react'
import { FormProvider, useForm } from "react-hook-form";
import Input from "components/widgets/input";
import SingleImageSelection from "components/widgets/single_image_selection";
import { FormBtn } from 'components/widgets/btn';
import PhoneNumberInput from 'components/widgets/phone_number_input';
import { useEffect } from 'react';
import useAPIContext from 'hooks/api_context';

export default function Profile({ user }) {
  const methods = useForm({mode: 'all'});
  const { makeRequest } = useAPIContext();

  const { reset, handleSubmit, formState: {isValid, isDirty} } = methods;

  useEffect(() => {
    reset({
      email: user.email,
      phone: user.phone,
      avatar: user.avatar ? `${process.env.NEXT_PUBLIC_BACKEND_URL}/${user.avatar}` : ''
    })
  }, [reset, user]);
  

  const submit = (data) => {
    console.log('Submit payload', data)
    const { avatar, ...payload } = data;

    const formdata = new FormData();

    Object.entries(payload).forEach(([key, value]) => {
      formdata.append(key, value);
    });

    formdata.append('avatar', avatar ? avatar[0] : avatar)

    makeRequest({
      method: 'patch',
      url: '/user-info',
      payload: formdata
    })
  }

  return (
    <FormProvider {...methods}>
      <form className="w-full grid grid-cols-2 gap-5 px-10 pb-7 bg-white" onSubmit={handleSubmit(submit)}>
        
        <div className="flex col-span-2 pt-7">
          <label className="font-xl font-semibold block grow">Basic info settings</label>

          <FormBtn 
            content="Save"
            className="btn bg-primary"
            disabled={!isValid || !isDirty}
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
            flexdirection="flex-col text-center"
          />
        </div>
      </form>
    </FormProvider>
  )
}
