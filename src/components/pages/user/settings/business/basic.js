import React from "react";
import { useFormContext } from "react-hook-form";
import { FormBtn } from "components/widgets/btn";
import ImageSelection from "components/widgets/image_selection";
import Input from "components/widgets/input";
import PhoneNumberInput from "components/widgets/phone_number_input";
import { useEffect } from "react";
import MultiContactsChips from "components/widgets/multi_contacts";
import RenderChips from "components/widgets/render_chips";
import useAPIContext from "hooks/api_context";

export default function Basic() {
  const { handleSubmit, reset, formState: { isValid, isDirty }, watch } = useFormContext();
  const { makeRequest } = useAPIContext();

  // console.log('Business basic info', business)
  
  // useEffect(() => {
  //   reset({
  //     name: business?.name ?? "",
  //     phone: business?.phone ?? "",
  //     email: business?.email ?? "",
  //     logo: business?.logo ?? "",
  //     website: business?.website ?? "",
  //     description: business?.description ?? "",
  //     altPhones: business?.altPhones ?? ""
  //   })
  // }, [business, reset]);

  const submit = (data) => {
    const { logo, name, phone, email, website, description, altPhones } = data;
    const dataObj = {name, phone, email, website, description, altPhones};

    const form_data = new FormData();
    // console.log('Basic info payload', payload)
    Object.entries(dataObj).map(([key, value]) => form_data.append(key, value));

    if (logo.length === 1) {
      form_data.append('logo', logo[0]);
    }

    // if (altPhones) form_data.append('altPhones[]', altPhones)

    makeRequest({
      method: 'patch',
      url: '/agency',
      payload: form_data
    });
  }

    // console.log('Basic info input', watch())
  return (
    <form className="w-full grid grid-cols-2 gap-5 px-10 pb-7 bg-white rounded" onSubmit={handleSubmit(submit)}>
      <div className="flex col-span-2 pt-7">
        <label className="font-xl font-semibold block grow">
          Business basic info
        </label>
      </div>

      <div className="col-span-2">
        <ImageSelection
          name="logo"
          label={
            <>
              Upload business logo
              <span className="text-red-400 font-medium">(max 3Mb)</span>
            </>
          }
        />
      </div>

      <Input name="name" label="Business name" className="w-full" disabled />

      <PhoneNumberInput
        name="phone"
        label="Business primary phone number"
        className="w-full h-14 rounded-[4px]"
      />

      <div className="w-full">
        <MultiContactsChips 
          name="altPhones"
          label="Alternative phone numbers"
          className="w-full flex items-center"
        />
      </div>

      <RenderChips 
        name="altPhones"
        emptyLabel="No contacts added yet"
        className="w-full flex items-center"
      />

      <Input name="email" label="Business email address" className="w-full" />

      <Input name="website" label="Link to website" className="w-full" />

      <Input
        name="description"
        label="About your business"
        className="w-full col-span-2"
        rows={4}
        multiline
      />

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
