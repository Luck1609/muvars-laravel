import Link from 'components/widgets/link'
import * as Icon from '@iconscout/react-unicons'
import { useRouter } from 'next/router'

export default function Sidebar({ open }) {

  const { pathname } = useRouter()
  const match = pathname.startsWith("/admin");

  return (
    <div className={`${!open ? 'w-[80px]' : 'w-[240px]'} h-full ease-in-out duration-500`}>
      <div className={`${!open ? 'w-[70px]' : 'w-[200px]'} h-full fixed top-16 left-0 z-30 ease-in-out duration-500`}>

        <div className={`${!open ? 'w-[70px]' : 'w-[200px]'} bg-white h-screen pt-3 ease-in-out duration-500`}>
          <ul className={`${!open ? 'w-full' : 'w-11/12'}`}>
            {
              (match ? admin_links : links).map(({name, url, icon, highlight}, index) => {
                return (
                  <li key={index.toString()} className={`flex items-center pl-5 mb-2 p-2.5 ${ !open ? '' : 'rounded-r-md' } ${ pathname.startsWith(highlight) ? 'bg-slate-500 shadow-md shadow-slate-300' : '' }`}>
                    <Link url={url} className={`flex items-center ${pathname.startsWith(highlight) ? 'text-white' : 'text-slate-500'}`}>
                      {icon}
                      
                      <span className={`${!open ? 'hidden' : '' }  duration-500 text-md ml-2`}>{name}</span>
                    </Link>
                  </li>
                )
              })
            }
          </ul>
        </div>
      </div>
    </div>
  )
}


const links = [
  {
    name: 'Dashboard',
    url: '/management/dashboard',
    highlight: '/management/dashboard',
    icon: <Icon.UilApps />
  },
  {
    name: 'Tickets',
    url: '/management/tickets/pending',
    highlight: '/management/tickets',
    icon: <Icon.UilTicket />
  },
  {
    name: 'Users',
    url: '/management/users',
    highlight: '/management/users',
    icon: <Icon.UilUsersAlt />
  },
  {
    name: 'Revenue',
    url: '/management/revenue',
    highlight: '/management/revenue',
    icon: <Icon.UilMoneyBill />
  },
  {
    name: 'Schedule',
    url: '/management/schedule',
    highlight: '/management/schedule',
    icon: <Icon.UilSchedule />
  },
  {
    name: 'Parcel',
    url: '/management/parcel',
    highlight: '/management/parcel',
    icon: <Icon.UilBox />
  },
  {
    name: 'Expense',
    url: '/management/expenses',
    highlight: '/management/expenses',
    icon: <Icon.UilComparison />
  },
  {
    name: 'Settings',
    url: '/management/settings',
    highlight: '/management/settings',
    icon: <Icon.UilSetting />
  },
]


const admin_links = [
  {
    name: 'Dashboard',
    url: '/admin/dashboard',
    highlight: '/admin/dashboard',
    icon: <Icon.UilApps />
  },
  {
    name: 'Agency',
    url: '/admin/agencies',
    highlight: '/admin/agency',
    icon: <Icon.UilUniversity />
  },
  {
    name: 'Users',
    url: '/admin/users',
    highlight: '/admin/users',
    icon: <Icon.UilUsersAlt />
  },
  {
    name: 'Settings',
    url: '/admin/settings',
    highlight: '/admin/settings',
    icon: <Icon.UilSetting />
  },
]