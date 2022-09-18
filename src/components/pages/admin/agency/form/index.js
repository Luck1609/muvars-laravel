import React from "react";
import Input from "components/widgets/input";
import PhoneNumberInput from "components/widgets/phone_number_input";

export default function CreateAgencyForm() {
  return (
    <div className="grid grid-cols-2 gap-4 w-11/12 px-3 m-auto">
      <Input name="name" label="Agency name" />

      <Input name="location" label="Location of headquarters" />

      <PhoneNumberInput
        name="phone"
        label="Phone number"
        className="rounded-[4px] p-3.5 w-full border border-zinc-300"
      />

      <Input
        name="starting_hours"
        label="Open hours"
        type="time"
        InputLabelProps={{
          shrink: true,
        }}
      />

      <Input
        name="closing_time"
        label="Closing time"
        type="time"
        InputLabelProps={{
          shrink: true,
        }}
      />
    </div>
  );
}
