import { Btn } from 'components/widgets/btn'
import ListItems from 'components/widgets/list_item'
import React from 'react'
import * as Icons from '@iconscout/react-unicons'
import { useRouter } from 'next/router'

export default function SettingsNav() {
  const { replace } = useRouter();
  const goto = (url) => replace(url);


  return (
    <>
      <ListItems 
        options={nav(goto, navList)}
      />
    
    </>
  )
}

const navList = [
  {
    title: 'Profile settings',
    label: 'Update profile details (ie; Email address, Contact, Password)',
    icon: Icons.UilUser,
    url: '/management/settings/profile-info'
  },
  {
    title: 'Agency profile settings',
    label: ' additional agency information',
    icon: Icons.UilUniversity,
    url: '/management/settings/agency-info'
  },
  {
    title: 'Buses',
    label: 'Manage agency buses',
    icon: Icons.UilBus,
    url: '/management/settings/buses'
  },
  {
    title: 'Routes & schedules',
    label: 'Management agency bus routes and schedules',
    icon: Icons.UilSignAlt,
    url: '/management/settings/roles'
  },
  {
    title: 'Other settings',
    label: 'Others',
    icon: Icons.UilSetting,
    url: '/management/settings/misc'
  },
]

export const nav = (goto, links) => {
  const navItems = links.reduce((totalLinks, { title, label, icon: Icon, url }) => {
    return [...totalLinks, {
      title, label, Icon,
      component: <BtnComponent action={() => goto(url)} />,
      button: false
    }]
  }, [])

  return navItems;
}

export const BtnComponent = ({action}) => <Btn 
  content={<span className="flex items-center">Open</span>}
  className="btn bg-blue-500"
  click={action}
/>