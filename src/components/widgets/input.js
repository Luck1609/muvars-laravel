import React, { useEffect } from 'react';
import { useFormContext } from 'react-hook-form';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import { Controller } from "react-hook-form";

const Input = (props) => {
  const { name, options, className = '', ...newProps } = props;

  const { control, watch, trigger } = useFormContext();
  let v = watch(name)
  
  useEffect(() => {
    if (v) trigger(name);
  }, [v, trigger, name])
  
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, onBlur, value = '' }, fieldState: { error } }) => (
        
          
        <TextField
          { ...newProps }
          className={className}
          variant="outlined"
          error={Boolean(error)}
          helperText={error?.message}
          onChange={
            onChange
          }
          onBlur={
            onBlur
          }
          value={ value ?? '' }
          select={options ? true : false}
        >
          {
            options && (
              // <>
              //   <MenuItem value="">
              //     `Choose`
              //   </MenuItem>
              //   {
                  options.map(
                    option => {
                      return (
                        <MenuItem key={option?.label ?? option} value={option.value ? option.value : option?.label ?? option}>
                          { option?.label ?? option }
                        </MenuItem>
                      )
                    }
                  )
              //   }
              // </>
            ) 
          }
        </TextField>
      )}
    />
  )
}

export default Input
