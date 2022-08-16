import React from 'react'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import { UilAngleDown } from '@iconscout/react-unicons'
import { Controller, useFormContext } from 'react-hook-form'

export default function BtnSelection({ name, options = [], label, className }) {
  const [anchorEl, setAnchorEl] = React.useState(null)
  const open = Boolean(anchorEl)

  const {setValue, watch} = useFormContext()

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = (id) => {
    setValue(name, id)
    setAnchorEl(null)
  }

  
  const { control } = useFormContext()

  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, onBlur, value }, fieldState: { error } }) => (
        <div className={`mb-3`}>
          <MenuItem className="bg-input focus:bg-input rounded-md w-full md:w-auto flex justify-between" onClick={handleClick}>
            { watch(name) ? options.filter(option => +option.id === + watch(name))[0].name : label} <UilAngleDown className="ml-2" />
          </MenuItem>

          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onChange={onChange}
            onClose={handleClose}
            MenuListProps={{
              'aria-labelledby': 'basic-button',
            }}
          >
            {
              options.map(option => <MenuItem key={option.id.toString()} onClick={() => handleClose(option.id)}>{option.name}</MenuItem>)
            }
          </Menu>
        </div>
      )}
    />
  )
}
