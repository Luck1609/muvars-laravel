import React from 'react'
import { FormProvider, useForm } from "react-hook-form";
import Input from "components/widgets/input";
import { FormBtn } from 'components/widgets/btn';
import ImageSelection from 'components/widgets/image_selection';

export default function Bisuness() {
  const methods = useForm({mode: 'all'})

  return (
    <FormProvider {...methods}>
      <form className="w-full grid grid-cols-2 gap-5 px-10 pb-7 bg-white rounded">
        <div className="flex col-span-2 pt-7">
          <label className="font-xl font-semibold block grow">Business basic info</label>

          <FormBtn 
            content="Save"
            className="btn bg-primary"
          />
        </div>

        <div className="col-span-2">
          <ImageSelection 
            name="logo"
            label={<>Upload business logo <span className="text-red-400 font-medium">(max 3Mb)</span></>}
          />
        </div>

        <Input 
          name="name"
          label="Business name"
          className="w-full"
        />

        <Input 
          name="phone"
          label="Business primary phone number"
          className="w-full"
        />

        <Input 
          name="email"
          label="Business email address"
          className="w-full"
        />

        <Input 
          name="website"
          label="Link to website"
          className="w-full"
        />

        <Input 
          name="description"
          label="About your business"
          className="w-full col-span-2"
          rows={4}
          multiline
        />
      </form>

      <form className="w-full grid grid-cols-2 gap-5 px-10 pb-7 bg-white rounded mt-10">
        <div className="flex col-span-2 pt-7">
          <label className="font-xl font-semibold block grow">Business location info</label>

          <FormBtn 
            content="Save"
            className="btn bg-primary"
          />
        </div>

        <Input 
          name="region"
          label="Business location (Region)"
          className="w-full"
        />

        <Input 
          name="email"
          label="Business location (City/Town)"
          className="w-full"
        />

        <Input 
          name="name"
          label="Business address"
          className="w-full"
        />
      </form>
    </FormProvider>
  )
}
