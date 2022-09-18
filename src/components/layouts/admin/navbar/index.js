import React from 'react'
import UserTab from './user_tab'
import * as Icons from '@iconscout/react-unicons'
import { Badge } from '@mui/material'
import CustomMenu from 'components/widgets/menu_item'
import useMenu from 'hooks/useMenu'
import { Btn } from 'components/widgets/btn'


export default function NavBar({user, toggle}) {
  const { items } = useMenu(user?.unread_notifications);
  


  return (
    <div className="w-full fixed bg-white flex items-center justify-between border-b border-gray-300 shadow px-10">
      <div className="flex items-center">
        <Btn 
          content={<Icons.UilBars className="" />}
          className="btn bg-transparent hover:bg-slate-100 text-slate-500 mr-5"
          click={toggle}
        />
        
        <label className="font-bold text-2xl">SmartTkt</label>
      </div>
      
      <div className="flex items-center grow justify-between ml-24">
        <form className="w-1/5 flex relative py-3 pr-0 ml-5">
          <input type="text" name="" className="pl-3 h-10 w-full mx-auto rounded-md border border-gray-300" placeholder="Search" />
        </form>

        <div className="flex items-center">
          <ul className="relative ">
            <li className="inline-block text-slate-500 relative mr-3 cursor-pointer">
              <CustomMenu
                Component={({click}) => <Badge color="error" onClick={click} badgeContent={user?.unread_notifications.length}>
                    <Icons.UilBell size={30} className="text-slate-500" />
                  </Badge>
                }
                options={items ?? []}
              />
            </li>
          </ul>
        
          <UserTab />
        </div>
      </div>
    </div>
  )
}