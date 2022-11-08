import { FormBtn } from 'components/widgets/btn';
import Input from 'components/widgets/input';
import React from 'react'
import { FormProvider, useForm } from 'react-hook-form'

export default function ReviewForm() {
  const methods = useForm({
    mode: 'all'
  });

  return (
    <>
      <FormProvider {...methods}>
        <form className="grid grid-cols-2 gap-5">
          <Input
            name="name"
            label="Full name"
          />
          
          <Input
            name="email"
            label="Email address  "
          />

          <Input
            name="review"
            label="Write your review here..."
            rows={3}
            multiline
            className="col-span-2"
          />

          <div className="col-span-2 text-center">
            <FormBtn 
              content="Post review"
              className="bg-primary h-10 w-44"
            />
          </div>
        </form>
      </FormProvider>
    </>
  )
}
