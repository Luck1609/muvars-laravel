import React, { useEffect } from "react";
import { useFormContext } from "react-hook-form";
import { FormBtn } from "components/widgets/btn";
import Input from "components/widgets/input";
import useAPIContext from "hooks/api_context";

export default function Location() {
  const { handleSubmit, formState: { isValid, isDirty } } = useFormContext();
  const { makeRequest } = useAPIContext();

  
  const submit = (data) => {
    const { region, town, address } = data;

    makeRequest({
      method: 'patch',
      url: '/agency',
      payload: { region, town, address }
    });
  }

  return (
    <form className="w-full grid grid-cols-2 gap-5 px-10 pb-7 bg-white rounded mt-10" onSubmit={handleSubmit(submit)}>
      <div className="flex col-span-2 pt-7">
        <label className="font-xl font-semibold block grow">
          Business location info
        </label>
      </div>

      <Input
        name="region"
        label="Business location (Region)"
        className="w-full"
        options={
          [
            {label: "Ahafo Region"},
            {label: "Ashanti Region"},
            {label: "Bono Region"},
            {label: "Bono East Region"},
            {label: "Central Region"},
            {label: "Eastern Region"},
            {label: "Greater Accra Region"},
            {label: "North East Region"},
            {label: "Oti Region"},
            {label: "Northern Region"},
            {label: "Savannah Region"},
            {label: "Upper East Region"},
            {label: "Upper West Region"},
            {label: "Volta Region"},
            {label: "Western North Region"},
            {label: "Western Region"},
          ]
        }
      />

      <Input
        name="town"
        label="Business location (City/Town)"
        className="w-full"
      />

      <Input name="address" label="Business address" className="w-full" />

      <div className="col-span-2 text-center mt-5">
        <FormBtn
          content="Save"
          className="btn bg-sky-500 hover:bg-sky-600 w-72 h-12"
          disabled={!isValid || !isDirty}
        />
      </div>
    </form>
  );
}
