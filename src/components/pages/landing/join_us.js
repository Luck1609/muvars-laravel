import { FormBtn } from 'components/widgets/btn'
import Input from 'components/widgets/input'
import React from 'react'
import { FormProvider, useForm } from 'react-hook-form'

export default function JoinUs() {
  const methods = useForm()

  const { handleSubmit } = methods

  return (
    
    <div className="w-full p-2 lg:p-8 rounded mt-20">
      <div className="w-full max-w-5xl rounded-md m-auto bg-slate-200 p-10">
        <div className="text-center my-4">
          <h2 className="text-3xl mb-2.5 font-bold text-center">Like to partner with us?</h2>
          <label className="">Enter your email and we&apos;ll send them your way.</label>
        </div>

        <FormProvider {...methods}>
          <form className="w-full max-w-3xl m-auto grid grid-cols-4 gap-3 p-5">
            <Input 
              name="email"
              label="Type in your email address"
              className="col-span-3 overflow-hidden bg-white"
            />

            <FormBtn 
              content="Suscribe"
              className="bg-rose-500 hover:bg-rose-600"
            />
          </form>
        </FormProvider>
      </div>
    </div>
  )
}
