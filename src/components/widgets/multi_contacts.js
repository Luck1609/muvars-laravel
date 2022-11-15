import React, { useEffect } from "react";
import { useFormContext } from "react-hook-form";
import { Add } from "@mui/icons-material";
import { Controller } from "react-hook-form";
import PhoneNumberInput from "./phone_number_input";
import Input from "./input";
// import { Checkbox } from "@mui/material";
import SwitchComponent from "./switch";
import { Btn } from "./btn";

export default function MultiContactsChips({name, label, className, phone_input = true, field_name = 'phone_number', field_label = ''}) {
  const { control, watch, trigger, getValues, setValue } = useFormContext();
  let fieldValue = watch(name);
  // const [checked, setChecked] = useState(false);

  useEffect(() => {
    if (fieldValue) trigger(name)
  }, [fieldValue, trigger, name])



  const chips = fieldValue?? []

  

  const submitChip = () => {
    if (getValues(field_name) && getValues(field_name) !== '') {
      const unique_chips = [...new Set([...chips, getValues('is_boolean') ? { label: getValues(field_name), value: false } : getValues(field_name)])]
      
      
    console.log('Watchin unique chips', unique_chips)
      
      setValue(name, unique_chips)
      setValue(field_name, '')
    }
  }

  // const boolean_value = () => setChecked(!checked);

    // console.log('All contacts', watch(name))
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, value = [] }, fieldState: { error } }) => (
        <>
          <div className={`${className} relative`}>
            <label className="font-medium text-sm block absolute z-20 -top-2.5 bg-white px-1 left-2">{label}</label>
            {
              phone_input ? (
                <PhoneNumberInput 
                  name="phone_number"
                  className="h-14 p-2 rounded-[4px] w-full"
                />
              ) : (
                <Input 
                  name={field_name}
                  label={field_label}
                  className="w-full"
                />
              )
            }
            <Btn 
              content={<span className="flex items-center justify-center"><Add fontSize="small" className="mr-1" /> Add</span>}
              className="bg-blue-500 hover:bg-blue-400 text-sm btn p-1 px-2 h-10 block ml-2 w-20 text-center"
              click={submitChip}
            />
          </div>
        </>
      )}
    />
  )
}