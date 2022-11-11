import React, { useState } from "react";
import useSWR from "swr";
import { useRouter } from "next/router";
import { FormProvider, useForm } from "react-hook-form";
// import Image from "next/image";
import {
  EmailSharp,
  Phone,
  PostAdd,
  SearchOutlined,
  Settings,
  Grade,
  NotificationAdd,
  EditOutlined,
  ArrowDropDown,
} from "@mui/icons-material";
import { Avatar, Divider } from "@mui/material";
import { buses } from "assets/img/bus";
import { Btn, FormBtn } from "components/widgets/btn";
import Input from "components/widgets/input";
import Link from "components/widgets/link";
import CustomMenu from "components/widgets/menu_item";
import PostCard from "./post_card";
import AuthLayout from "../auth_layout";
// import AdForm from "./ad_form";

export default function DashboardComponent() {
  const { push } = useRouter()
  const { data: posts } = useSWR('/posts')
  const [toggler, setToggler] = useState("Active");
  const methods = useForm({ mode: "all" });

  const toggle = (data) => setToggler(data);
  const goto = (route) => () => push(route)

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

  // console.log('Dashboard posts', posts)

  return (
    <AuthLayout>
      <>
        <div className="bg-white rounded">
          <div className="flex items-center p-4">
            <label className="block text-xl font-semibold grow">My posts</label>

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
                    content={<>{toggler} <ArrowDropDown fontSize="small" /></>}
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
          <div className="flex items-center mb-5 border-b py-2">
            <label htmlFor="" className="font-medium grow text-lg">{ toggler } posts</label>
            <Btn 
              content="Post Ad"
              className="btn bg-sky-500 hover:bg-sky-600"
              click={goto('/post-ad')}
            />
          </div>

          {/* <AdForm /> */}
          {
            posts?.post ? (
              posts.post.map((data, index) => <PostCard data={data} key={index.toString()} />)
            ) : null
          }
        </div>
      </>
    </AuthLayout>
  );
}
