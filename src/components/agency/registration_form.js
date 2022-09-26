import React from "react";
import Input from "components/widgets/input";
import PhoneNumberInput from "components/widgets/phone_number_input";

export default function AgencyRegistrationForm() {
  return (
    <div className="grid mb-5 gap-5">
      <Input name="name" label="Agency name" className="bg-white" />

      {/* <Input name="location_region" label="Head office location" className="bg-white" options={[]} /> */}

      <PhoneNumberInput name="phone" label="Primary phone number" className="w-full h-14 pl-3 rounded" />

      <Input
        name="starting_hours"
        label="Official starting time"
        type="time"
         className="bg-white" 
        InputLabelProps={{
          shrink: true,
        }}
      />

      <Input
        name="closing_time"
        label="Official closing time"
        type="time"
         className="bg-white" 
        InputLabelProps={{
          shrink: true,
        }}
      />
    </div>
  );
}
