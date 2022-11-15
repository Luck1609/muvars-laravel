import React, { useEffect, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import Input from "components/widgets/input";
import useAPIContext from "hooks/api_context";
import { FormBtn } from "components/widgets/btn";
import useSWR from "swr";
import FilterRoutes from "components/widgets/filterRoutes";
import Helper, { beautifyUrl } from "helpers/index";
import { useRouter } from "next/router";

const { filterValues } = new Helper();

export default function Search() {
  const [originParam, setOriginParam] = useState("");
  const [destinationParam, setDestinationParam] = useState("");
  const { push } = useRouter();

  const { data: origins } = useSWR(
    originParam ? `/autofill-searched-routes/${originParam}` : ""
  );
  const { data: destinations } = useSWR(
    destinationParam ? `/autofill-searched-routes/${destinationParam}` : ""
  );
  const methods = useForm();
  const { makeRequest } = useAPIContext();

  const { handleSubmit, watch } = methods;

  const originFormField = watch("origin"),
    destinationFormField = watch("destination");

  useEffect(() => {
    if (originFormField !== originParam) setOriginParam(originFormField);
    if (destinationFormField !== destinationParam)
      setDestinationParam(destinationFormField);
  }, [originFormField, destinationFormField, originParam, destinationParam]);

  const submit = async ({ origin, destination, date }) => {
    push(
      `/bus-schedules?origin=${beautifyUrl(origin)}&destination=${beautifyUrl(destination)}&date=${date}`
    );
    // await makeRequest({
    //   method: 'post',
    //   url: '/search-routes',
    //   payload
    // });
  };

  // console.log('Search origin input', origins, destinations)

  return (
    <div className="w-full bg-banner h-[350px] bg-cover relative flex items-end flex-col before:absolute before:top-0 before:left-0 before:bg-blue-500 before:w-full before:h-full before:bg-opacity-30">
      <h1 className="m-auto text-3xl lg:text-5xl font-bold text-white z-10 max-w-3xl text-center leading-snug">
        Search and book you next travelling ticket with us!
      </h1>

      <div className="w-full max-w-5xl rounded-md bg-blue-600 py-5 bg-opacity-90 z-10 mx-auto  lg:-mb-[90px]">
        <FormProvider {...methods}>
          <form
            className="w-full lg:grid lg:grid-cols-4 gap-3 p-5"
            onSubmit={handleSubmit(submit)}
          >
            <div className="flex col-span-4 items-center mb-3">
              <label className="grow block text-2xl font-semi-bold text-white">
                Where should we take you?
              </label>
            </div>

            <div className="w-full relative">
              <Input
                name="origin"
                label="from where?"
                className="w-full bg-white rounded-md mb-5 lg:mb-0"
              />


              <FilterRoutes
                options={
                  origins?.search
                    ? filterValues({
                        options: origins.search,
                        param: {
                          label: ({ region, town }) => `${region} - ${town}`,
                          value: "town",
                        },
                      })
                    : []
                }
                name="origin"
                className="bg-white rounded absolute top-14 w-full z-[60]"
              />
            </div>

            <div className="w-full relative">
              <Input
                name="destination"
                label="to where?"
                className="w-full bg-white rounded-md mb-5 lg:mb-0"
              />

              <FilterRoutes
                options={
                  destinations?.search
                    ? filterValues({
                        options: destinations.search,
                        param: {
                          label: ({ region, town }) => `${region} - ${town}`,
                          value: "town",
                        },
                      })
                    : []
                }
                name="destination"
                className="bg-white rounded absolute top-14 w-full z-10"
              />
            </div>

            <Input
              name="date"
              // label="Travel date"
              type="date"
              className="w-full bg-white rounded-md mb-5 lg:mb-0"
              InputLabelProps={{
                shrink: true,
              }}
            />

            <FormBtn
              content="Search"
              className="bg-rose-500 hover:bg-rose-600 h-14"
            />
          </form>
        </FormProvider>
      </div>
    </div>
  );
}
