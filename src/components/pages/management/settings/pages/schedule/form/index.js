import React from "react";
import useSWR from "swr";
import { useFormContext } from "react-hook-form";
import Input from "components/widgets/input";
import Helper from "helpers/index";

export default function ScheduleForm() {
  const { data: routeData } = useSWR("/management/route");
  const { data: busData } = useSWR("/management/bus");
  const { watch } = useFormContext()

  const { filterValues } = new Helper();

  // console.log("Schedule form data", routeData?.routes, busData?.buses);

  const origin = watch('origin');

  console.log('Selected origin', origin)

  return (
    <div className="grid grid-cols-2 gap-5 w-11/12 px-3 m-auto">
      {/* <Input name="driver" label="Select driver" options={[]} /> */}

      <Input
        name="bus"
        label="Select bus"
        options={
          busData?.buses
            ? filterValues({
                options: busData.buses,
                param: {
                  label: ({ label, plateNo, capacity, color }) => {
                    return `${label} (${color}, ${capacity}) - ${plateNo} `;
                  },
                  value: "id",
                },
              })
            : []
        }
      />

      <Input name="fare" label="Fare" type="number" />

      <Input
        name="origin"
        label="Bus origin"
        options={
          routeData?.routes
            ? filterValues({
                options: routeData.routes,
                param: { label: ({region, town}) => { return `${town} - ${region}` }, value: "id" },
              })
            : []
        }
      />

      <Input
        name="destination"
        label="Bus destination"
        options={
          routeData?.routes
            ? filterValues({
                options: routeData.routes.filter(route => route.id !== origin?.id),
                param: { label: ({region, town}) => { return `${town} - ${region}` }, value: "id" },
              })
            : []
        }
      />

      <Input
        name="reportingTime"
        label="Reporting time"
        type="time"
        InputLabelProps={{
          shrink: true,
        }}
      />

      <Input
        name="departureTime"
        label="Departure time"
        type="time"
        InputLabelProps={{
          shrink: true,
        }}
      />
    </div>
  );
}
