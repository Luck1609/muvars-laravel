import React from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import Input from 'components/widgets/input'
import useAPIContext from 'hooks/api_context'
import { FormBtn } from 'components/widgets/btn'

export default function Search() {
  const methods = useForm()
  const { makeRequest } = useAPIContext()

  const { handleSubmit } = methods

  
  const submit = async (payload) => {
    const result = await makeRequest({
      method: 'post',
      url: '',
      payload
    });
  }

  return (
    <div className="w-full bg-banner h-[350px] bg-cover relative flex items-end flex-col before:absolute before:top-0 before:left-0 before:bg-blue-500 before:w-full before:h-full before:bg-opacity-30">
      <h1 className="m-auto text-3xl lg:text-5xl font-bold text-white z-10 max-w-3xl text-center leading-snug">Search and book you next travelling ticket with us!</h1>

      <div className="w-full max-w-5xl rounded-md bg-blue-600 py-5 bg-opacity-90 z-10 mx-auto  lg:-mb-[90px]">
        <FormProvider {...methods}>
          <form className="w-full lg:grid lg:grid-cols-4 gap-3 p-5" onSubmit={handleSubmit(submit)}>
            <div className="flex col-span-4 items-center mb-3">
              <label className="grow block text-2xl font-semi-bold text-white">Where should we take you?</label>
              
              <FormBtn 
                content="Search"
                className="bg-rose-500 hover:bg-rose-600 h-12 w-36"
              />
            </div>
            <Input 
              name="origin"
              label="from where?"
              className="w-full bg-white rounded-md mb-5 lg:mb-0"
            />

            <Input 
              name="destination"
              label="to where?"
              className="w-full bg-white rounded-md mb-5 lg:mb-0"
            />

            <Input 
              name="destination"
              // label="Travel date"
              type="datetime-local"
              className="w-full bg-white rounded-md mb-5 lg:mb-0"
              InputLabelProps={
              {
                  shrink: true,
                }
              }
            />

            <Input 
              name="passengers"
              label="Number of passengers"
              className="w-full bg-white rounded-md mb-5 lg:mb-0"
              type="number"
            />
          </form>
        </FormProvider>
      </div>
    </div>
  )
}
