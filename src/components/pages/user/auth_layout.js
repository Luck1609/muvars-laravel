import React from 'react';
import { useSelector } from "react-redux";
import {
  // EmailSharp,
  Phone,
  PostAdd,
  Settings,
  Grade,
  NotificationAdd,
  AlternateEmail,
} from "@mui/icons-material";
import { Avatar, Divider } from "@mui/material";
import { Btn, FormBtn } from "components/widgets/btn";
import Link from "components/widgets/link";

export default function AuthLayout({ children, user }) {

  return (
    <div className="mt-10 grid grid-cols-8 gap-8 contained">
      <div className="col-span-2 w-full flex flex-col gap-8">

        <div className="w-full bg-white rounded p-5 relative">
          <div className="w-4/5 h-14 m-auto relative mb-5">
            <Avatar className="h-16 w-16 m-auto" />
          </div>
          <h4 className="text-center mb-4 text-xl font-semibold">{`${user.firstname} ${user.lastname}`}</h4>

          <ul className="w-full">
            <li className="w-full p-1">
              <a
                href="tel:+2330500404908"
                className="flex items-center justify-center w-full"
              >
                <Phone /> <span className="ml-1">{ user.phone.replace('+233', '0') }</span>
              </a>
            </li>
            <li className="w-full p-1">
              <a
                href="mailto:muvers@gmail.com"
                className="flex items-center justify-center w-full"
              >
                <AlternateEmail /> <span className="ml-1">{ user.email }</span>
              </a>
            </li>
          </ul>
        </div>

        <ul className="w-full bg-white rounded overflow-hidden">
          <li className="w-full">
            <Link
              url="/dashboard"
              className="flex items-center w-full p-3 pl-5 hover:bg-slate-200"
            >
              <PostAdd /> <span className="ml-2">My posts</span>
            </Link>
          </li>
          <li className="w-full">
            <Link
              url="/reviews"
              className="flex items-center w-full p-3 pl-5 hover:bg-slate-200"
            >
              <Grade /> <span className="ml-2">Reviews</span>
            </Link>
          </li>
          <li className="w-full">
            <Link
              url="/notifications"
              className="flex items-center w-full p-3 pl-5 hover:bg-slate-200"
            >
              <NotificationAdd /> <span className="ml-2">Notifications</span>
            </Link>
          </li>
          <li className="w-full">
            <Link
              url="/settings"
              className="flex items-center w-full p-3 pl-5 hover:bg-slate-200"
            >
              <Settings /> <span className="ml-2">Settings</span>
            </Link>
          </li>
        </ul>
      </div>

      <div className="w-full col-span-6">
        { children }
      </div>
    </div>
  )
}
