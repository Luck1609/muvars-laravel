import Input from "components/widgets/input";
import React from "react";

export default function PickupForm() {
  return (
    <div className="grid grid-cols-2 gap-5 w-11/12 mx-auto">
      <Input name="location" label="Pickup location" />

      <Input
        name="time"
        label="Pickup date &amp; time"
        type="time"
        InputLabelProps={{
          shrink: true,
        }}
      />

      <Input
        name="departure"
        label="Departure time"
        type="time"
        InputLabelProps={{
          shrink: true,
        }}
      />
    </div>
  );
}
