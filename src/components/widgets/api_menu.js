import React, {useState} from 'react'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Fade from '@mui/material/Fade'
import * as UIcons from '@iconscout/react-unicons'
// import Helper from 'helpers'
import { useRouter } from 'next/router'
import { Btn } from './btn'


export default function ApiMenu({options, baseUrl, apiUrl}) {
  const [anchorEl, setAnchorEl] = useState(null)
  const { replace } = useRouter()

  const open = Boolean(anchorEl)
  
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = (option) => {
    setAnchorEl(null)

    replace(option.toLowerCase(), `${apiUrl}/${option.toLowerCase()}`)
    // replace(option.toLowerCase().replace(' ', '-'), `${apiUrl}/${(option.replace(' ', '-')).toLowerCase()}`)
  }

  // console.log('router details', router)

  const state_url = ""
  // const state_url = new Helper().ucwords(history.location.state?.split('/').pop())?.replace('-', ' ')
  const url = state_url ?? baseUrl
  

  return (
    <div>
      <Btn 
        content={<span className="flex justify-between">{ url }<UIcons.UilAngleDown /></span>}
      click={handleClick}
        className="shadow-none hover:shadow-none text-slate-500 bg-slate-100 hover:bg-slate-200 h-12"
      />

      <Menu
        id="fade-menu"
        MenuListProps={{
          'aria-labelledby': 'fade-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        {
          (options.filter(option => option !== url)).map(option => <MenuItem key={option} onClick={() => handleClose(option)}>{ option }</MenuItem>)
        }
      </Menu>
    </div>
  )
}
