import React, {useState} from 'react'
import Drawer from '@mui/material/Drawer'
import * as Icon from '@iconscout/react-unicons'
import { Btn } from 'components/widgets/btn'
import Link from 'components/widgets/link'
import { useRouter } from 'next/router'



export default function SideNav() {
  const {pathname} = useRouter()
  const [state, setState] = useState(false)

  const toggleDrawer = () => {setState(!state)}

console.log('Pathname of route ', pathname)

  return (
    <div>
      <Btn
        content={<Icon.UilBars />}
        className="text-default btn hover:bg-slate-100 p-2 mr-3"
        click={toggleDrawer}
      />

      <Drawer
        anchor="left"
        open={state}
        onClose={toggleDrawer}
      >
        <div className="w-[250px] bg-default h-screen">
          <ul>
            {
              links.map(({name, url, icon}, index) => {
                return (
                  <li key={index.toString()} className={`flex items-center pl-5 mb-2 p-2 ${ pathname === url ? 'bg-white' : '' }`}>
                  {/* <li key={index.toString()} className={`flex items-center pl-5 my-2 p-2 ${ pathname === url ? 'bg-white' : '' } relative before:absolute before:h-4 before:right-0 before:-top-1 before:bg-red-300 before:rounded-br-full before:w-full`}> */}
                    <Link url={url} className={`flex items-center ${pathname === url ? '' : 'text-white'}`}>
                      {icon}
                      
                      <span className="font-medium text-lg ml-2">{name}</span>
                    </Link>
                  </li>
                )
              })
            }
          </ul>
        </div>
      </Drawer>
    </div>
  )
}


const links = [
  {
    name: 'Dashboard',
    url: '/',
    icon: <Icon.UilApps />
  },
  {
    name: 'Tickets',
    url: '/tickets',
    icon: <Icon.UilTicket />
  },
  {
    name: 'Revenue',
    url: '/revenue',
    icon: <Icon.UilMoneyBill />
  },
  {
    name: 'Schedule',
    url: '/schedule',
    icon: <Icon.UilSchedule />
  },
  {
    name: 'Parcel',
    url: '/parcel',
    icon: <Icon.UilBox />
  },
  {
    name: 'Expense',
    url: '/expense',
    icon: <Icon.UilComparison />
  },
]