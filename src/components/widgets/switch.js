import React from 'react';
import { useFormContext } from 'react-hook-form';
import { FormControlLabel, Switch } from '@mui/material';
import { Controller } from "react-hook-form";

export default function SwitchComponent({ name, label, className = null, placement = 'start' }) {

  const { control } = useFormContext();


  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, onBlur, value } }) => (
        <>
          <FormControlLabel
            className={className}
            control={<Switch color="primary" />}
            onChange={
              onChange
            }
            onBlur={
              onBlur
            }
            // defaultChecked={value}
            checked={value ?? false}
            label={label}
            labelPlacement={placement}
          />

          {/* <span className={className}>{label}</span> */}
        </>
      )}
    />
  )
}


