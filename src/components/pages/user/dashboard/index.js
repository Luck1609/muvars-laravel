import React, { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import Image from "next/image";
import {
  EmailSharp,
  Phone,
  PostAdd,
  SearchOutlined,
  Settings,
  Grade,
  NotificationAdd,
  EditOutlined,
} from "@mui/icons-material";
import { Avatar, Divider } from "@mui/material";
import { buses } from "assets/img/bus";
import { Btn, FormBtn } from "components/widgets/btn";
import Input from "components/widgets/input";
import Link from "components/widgets/link";
import CustomMenu from "components/widgets/menu_item";
import PostCard from "./post_card";

export default function DashboardComponent() {
  const [toggler, setToggler] = useState("Active");
  const methods = useForm({ mode: "all" });

  const toggle = (data) => setToggler(data);

  const options = [
    {
      name: ({ close }) => (
        <div
          className="p-1.5 px-3 cursor-pointer"
          onClick={() => {
            toggle("Active");
            close();
          }}
        >
          Active
        </div>
      ),
      label: "Active",
    },
    {
      name: ({ close }) => (
        <div
          className="p-1.5 px-3 cursor-pointer"
          onClick={() => {
            toggle("Pending");
            close();
          }}
        >
          Pending
        </div>
      ),
      label: "Pending",
    },
    {
      name: ({ close }) => (
        <div
          className="p-1.5 px-3 cursor-pointer"
          onClick={() => {
            toggle("Declined");
            close();
          }}
        >
          Declined
        </div>
      ),
      label: "Declined",
    },
    {
      name: ({ close }) => (
        <div
          className="p-1.5 px-3 cursor-pointer"
          onClick={() => {
            toggle("Expired");
            close();
          }}
        >
          Expired
        </div>
      ),
      label: "Expired",
    },
  ];

  return (
    <div className="mt-10 grid grid-cols-8 gap-8">
      <div className="col-span-2 w-full grid gap-8">
        <div className="w-full bg-white rounded p-5 relative">
          <Btn
            content={<EditOutlined fontSize="small" />}
            className="absolute"
          />
          {/* <h4 className="text-center mb-4 text-2xl font-semibold">Agency Name</h4> */}

          <div className="w-4/5 h-14 m-auto relative mb-5">
            {/* <Image src={buses.logo} alt="agency logo" layout="fill" /> */}
            <Avatar className="h-16 w-16 m-auto" />
          </div>
          <h4 className="text-center mb-4 text-xl font-semibold">User Name</h4>

          <ul className="w-full">
            <li className="w-full p-1">
              <a
                href="tel:+2330500404908"
                className="flex items-center justify-center w-full"
              >
                <Phone /> <span className="ml-1">0500404908</span>
              </a>
            </li>
            <li className="w-full p-1">
              <a
                href="mailto:muvers@gmail.com"
                className="flex items-center justify-center w-full"
              >
                <EmailSharp /> <span className="ml-1">muvers@gmail.com</span>
              </a>
            </li>
          </ul>
        </div>

        <ul className="w-full bg-white rounded overflow-hidden">
          <li className="w-full">
            <Link
              url="/my-posts"
              className="flex items-center w-full p-3 pl-5 hover:bg-slate-200"
            >
              <PostAdd /> <span className="ml-2">My posts</span>
            </Link>
          </li>
          <li className="w-full">
            <Link
              url="/my-posts"
              className="flex items-center w-full p-3 pl-5 hover:bg-slate-200"
            >
              <Grade /> <span className="ml-2">Reviews</span>
            </Link>
          </li>
          <li className="w-full">
            <Link
              url="/my-posts"
              className="flex items-center w-full p-3 pl-5 hover:bg-slate-200"
            >
              <NotificationAdd /> <span className="ml-2">Notifications</span>
            </Link>
          </li>
          <li className="w-full">
            <Link
              url="/my-posts"
              className="flex items-center w-full p-3 pl-5 hover:bg-slate-200"
            >
              <Settings /> <span className="ml-2">Settings</span>
            </Link>
          </li>
        </ul>
      </div>

      <div className="w-full col-span-6">
        <div className="bg-white rounded">
          <div className="flex items-center p-4">
            <label className="block text-lg font-semibold grow">My posts</label>

            <FormProvider {...methods}>
              <form className="flex items-center relative mr-3">
                <Input
                  name="filter-posts"
                  label="Search posts"
                  className="w-[300px] dashboard-filter"
                />

                <FormBtn
                  content={<SearchOutlined />}
                  className="bg-transparent text-slate-400 btn h-11 absolute right-0 hover:bg-slate-200"
                />
              </form>
            </FormProvider>

            <CustomMenu
              Component={({ click }) => (
                <Btn
                  content={toggler}
                  className="bg-sky-500 hover:bg-sky-600 mr-3 capitalize"
                  click={click}
                />
              )}
              options={options.filter(({ label }) => label !== toggler)}
            />
          </div>
        </div>

        <Divider className="border-slate-20000" />

        <div className="p-8 bg-white">
          <PostCard />
        </div>
      </div>
    </div>
  );
}
