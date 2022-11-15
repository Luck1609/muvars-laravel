import React, { useEffect, Fragment } from 'react';
import { useFormContext } from 'react-hook-form';
import { FormControl, FormControlLabel, FormLabel } from '@mui/material';
import { Controller } from 'react-hook-form';
import FormGroup from '@mui/material/FormGroup';
import Checkbox from '@mui/material/Checkbox';

const CheckBox = ({ name, options, className, label }) => {

  const { control, watch, trigger, setValue } = useFormContext();
  let v = watch(name)

  useEffect(() => {
    if (v) trigger(v);
  }, [v, trigger])

  

  const handleChange = (data) => () => {
    const labelValues = watch(name);

    // console.log('Label values', labelValues, data)

    setValue(name, [...labelValues, data])
  } 

  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, onBlur, value } }) => (
        
        <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
          <FormLabel component="legend">{label}</FormLabel>
          <FormGroup className={className}>
            {
              options.map(({label}, index) => {
                return (
                  <Fragment key={index.toString()}>
                    {/* {console.log('Checkbox value', value?.includes(label))} */}
                    <FormControlLabel 
                      key={index.toString()} 
                      control={<Checkbox checked={value?.includes(label)} onChange={handleChange(label)} />} 
                      label={label} 
                    />
                  </Fragment>
                )
              })
            }
          </FormGroup>
        </FormControl>
      )}
    />
  )
}

export default CheckBox
