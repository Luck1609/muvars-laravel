import React, { useEffect } from 'react'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormControl from '@mui/material/FormControl'
import FormLabel from '@mui/material/FormLabel'
import { useFormContext } from 'react-hook-form'
import { Controller } from "react-hook-form"


export default function RadioOptions({ name, label, options = [], placement = 'end' }) {
  const { control, watch, trigger } = useFormContext()
  let v = watch(name)
  
  React.useEffect(() => {
    if (v) trigger(name);
  }, [v, trigger, name])
  
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, onBlur, value = '' }, fieldState: { error } }) => (
        <FormControl>
          <RadioGroup
            row
            aria-labelledby="demo-form-control-label-placement"
            // name={name}
            value={value}
            onChange={onChange}
          >
            {
              options.map(({ label, value }, index) => {
                return (
                  <FormControlLabel
                    value={value}
                    control={<Radio />}
                    label={label}
                    labelPlacement={placement}
                    key={index.toString()}
                  />
                )
              })
            }
          </RadioGroup>
        </FormControl>
      )}
    />
  );
}
