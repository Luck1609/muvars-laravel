import React from 'react'
import { useFormContext } from 'react-hook-form'
import { Btn } from "components/widgets/btn";
import Input from "components/widgets/input";
import dayjs from 'dayjs';

export default function SearchUserForm({ isLoading, submit_handler }) {
  const { formState: {isDirty, isValid} } = useFormContext();

  return (
    <div className="w-11/12 mx-auto lg:mx-0 md:w-[500px] bg-white rounded z-10 my-20">
      <label className="block p-3 md:p-5 font-semibold text-xl text-center border-b">
        Search User Info
      </label>
      <form className="w-4/5 mx-auto grid gap-5 my-8">
        <Input name="token" label="Enter token" className="" />

        <Btn
          content="Search"
          className="bg-green-500 hover:bg-green-600 w-56 h-12 m-auto"
          disabled={!isValid || !isDirty || isLoading}
          click={submit_handler}
        />
      </form>
    </div>
  )
}
