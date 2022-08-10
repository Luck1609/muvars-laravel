import React, { useEffect } from 'react';
import { useFormContext } from 'react-hook-form';
import { MenuItem, Select, InputLabel, FormControl, FormHelperText } from '@mui/material';
// import { Controller } from "react-hook-form";


const SelectField = ({ name, options, label }) => {
  
  console.log('Name', name, 'Options available', options, 'Label value', label)

  const { watch, trigger, register, formState: {errors}} = useFormContext();
  let v = watch(name)

  useEffect(() => {
    if (v) trigger(v);
  }, [v, trigger])

  return (
    <div className="relative py-4">
      
      <FormControl className="w-full" error={ errors[name] }>
        <InputLabel id={name}>{label}</InputLabel>
        <Select
          labelId={name}
          id={name}
          // defaultValue={value ?? ''}
          // value={value ?? ''}
          { ...register(name, {required: true}) }
          label={label}
        >
          {
            options.map(({ value, label }) => {
              return (
                <MenuItem
                  key={label}
                  value={value}
                >
                  {label}
                </MenuItem>
              )
            })
          }
        </Select>

        {
          errors[name] && <FormHelperText>{ errors[name].message }</FormHelperText>
        }
        
      </FormControl>
    </div>
  )
}

export default SelectField

