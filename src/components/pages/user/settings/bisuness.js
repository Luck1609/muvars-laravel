import React, { useEffect } from 'react'
import { FormProvider, useForm } from "react-hook-form";
// import Input from "components/widgets/input";
// import { FormBtn } from 'components/widgets/btn';
// import ImageSelection from 'components/widgets/image_selection';
// import { useEffect } from 'react';
// import PhoneNumberInput from 'components/widgets/phone_number_input';
// import CheckboxComponent from 'components/widgets/checkbox';
import Basic from './business/basic';
import WorkingDays from './business/working_days';
import Location from './business/location';
import dayjs from 'dayjs';

export default function Bisuness({ business }) {
  const methods = useForm({mode: 'all'})

  const { reset } = methods;

  console.log('business info', business)

  useEffect(() => {
    reset({
      name: business?.name ?? "",
      phone: business?.phone ?? "",
      email: business?.email ?? "",
      logo: business?.logo ?? "",
      website: business?.website ?? "",
      description: business?.description ?? "",
      region: business?.region ?? "",
      town: business?.town ?? "",
      address: business?.address ?? "",
      starting_time: business?.startingTime ? dayjs(business?.startingTime).format('HH:mm') : "",
      closing_time: business?.closingTime ? dayjs(business?.closingTime).format('HH:mm') : "",
      working_days: business?.workingDays ? JSON.parse(business.workingDays) : [],
      altPhones: business?.altPhones ?? "",
    })
  }, [business, reset]);
  

  return (
    <FormProvider {...methods}>
      <Basic />

      <Location />

      <WorkingDays />
    </FormProvider>
  )
}
