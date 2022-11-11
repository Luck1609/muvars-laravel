import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import Input from "components/widgets/input";
import { FormBtn } from "components/widgets/btn";
import useAPIContext from "hooks/api_context";

export default function Security() {
  const methods = useForm({ mode: "all" });

  
  const { makeRequest } = useAPIContext();

  const { handleSubmit, formState: {isValid, isDirty} } = methods;
  

  const submit = (payload) => {

    makeRequest({
      method: 'patch',
      url: '/user-info',
      payload
    })
  }

  return (
    <FormProvider {...methods}>
      <form className="w-full grid grid-cols-2 gap-5 px-10 pb-7 bg-white" onSubmit={handleSubmit(submit)}>
        <div className="flex col-span-2 pt-7">
          <label className="font-xl font-semibold block grow">
            Security settings
          </label>

          <FormBtn content="Save" className="btn bg-primary" disabled={!isValid || !isDirty} />
        </div>

        <Input
          name="old_password"
          label="Enter your current password"
          className="w-full"
        />

        <Input
          name="password"
          label="Enter your new password"
          className="w-full"
        />

        <Input
          name="password_confirmation"
          label="Repeat new password"
          className="w-full"
        />
      </form>
    </FormProvider>
  );
}
