import React, { useState } from "react";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { Controller, useFormContext } from "react-hook-form";

export default function PasswordInput({ name, label, className }) {
  const { control, watch, trigger } = useFormContext();
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <Controller
      control={control}
      name={name}
      render={({
        field: { onChange, onBlur, value },
        fieldState: { error },
      }) => (
        <>
          {/* { console.log('Password input value', value, 'Password error', error) } */}
          <FormControl variant="outlined" className={className}>
            <InputLabel htmlFor="outlined-adornment-password">
              {label}
            </InputLabel>
            <OutlinedInput
              id={`${name}-outlined-adornment-password`}
              type={showPassword ? "text" : "password"}
              value={value}
              onChange={onChange}
              error={Boolean(error)}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label={label}
            />
          </FormControl>
        </>
      )}
    />
  );
}
