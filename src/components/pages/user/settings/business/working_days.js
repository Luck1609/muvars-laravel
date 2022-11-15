import React, { useEffect } from "react";
import { useFormContext } from "react-hook-form";
import Input from "components/widgets/input";
import CheckboxComponent from "components/widgets/checkbox";
import { FormBtn } from "components/widgets/btn";
import useAPIContext from "hooks/api_context";

export default function WorkingDays() {
  const { handleSubmit, watch, formState: { isValid, isDirty } } = useFormContext()
  const { makeRequest } = useAPIContext();

  
  // useEffect(() => {
  //   reset({
  //     startingHour: business?.starting_hours ?? "",
  //     phone: business?.closing_time ?? "",
  //     email: business?.workingDays ?? "",
  //   })
  // }, [business, reset]);

  const submit = (data) => {
    const { starting_hours, closing_time, working_days } = data;

    makeRequest({
      method: 'patch',
      url: '/agency',
      payload: { starting_hours, closing_time, working_days }
    })
  }

  console.log('Watching for updates', watch())

  return (
    <form className="w-full grid grid-cols-2 gap-5 px-10 pb-7 bg-white rounded mt-10" onSubmit={handleSubmit(submit)}>
      <div className="flex col-span-2 pt-7">
        <label className="font-xl font-semibold block grow">
          Business activity info
        </label>
      </div>

      <Input
        name="starting_time"
        label="Work start time"
        InputLabelProps={{
          shrink: true,
        }}
        type="time"
        className="w-full"
      />

      <Input
        name="closing_time"
        label="Closing time"
        InputLabelProps={{
          shrink: true,
        }}
        type="time"
        className="w-full"
      />

      <div className="col-span-2">
        <CheckboxComponent
          name="working_days"
          label="Selecting working days"
          className="flex-row"
          options={
            [
              {
                label: "Sunday"
              },
              {
                label: "Monday"
              },
              {
                label: "Tuesday"
              },
              {
                label: "Wednesday"
              },
              {
                label: "Thursday"
              },
              {
                label: "Friday"
              },
              {
                label: "Saturday"
              },
            ]
          }
        />
      </div>

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
