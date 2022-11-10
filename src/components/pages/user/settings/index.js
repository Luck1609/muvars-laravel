import { useState } from "react";
import { ArrowDropDown } from "@mui/icons-material";
import { Divider } from "@mui/material";
import { Btn } from "components/widgets/btn";
// import Link from "components/widgets/link";
import CustomMenu from "components/widgets/menu_item";
import React from "react";
import AuthLayout from "../auth_layout";
import Profile from "./profile";
import Security from "./security";
import Bisuness from "./bisuness";

export default function SettingsComponent({ user }) {
  const [toggler, setToggler] = useState("Basic info settings");

  const toggle = (form) => setToggler(form)

  const options = [
    {
      name: ({ close }) => (
        <div
          className="p-1.5 px-3 cursor-pointer"
          onClick={() => {
            toggle("Basic info settings");
            close();
          }}
        >
          Basic info settings
        </div>
      ),
      label: "Basic info settings",
    },
    {
      name: ({ close }) => (
        <div
          className="p-1.5 px-3 cursor-pointer"
          onClick={() => {
            toggle("Security settings");
            close();
          }}
        >
          Security settings
        </div>
      ),
      label: "Security settings",
    },
    {
      name: ({ close }) => (
        <div
          className="p-1.5 px-3 cursor-pointer"
          onClick={() => {
            toggle("Bisuness info");
            close();
          }}
        >
          Bisuness info
        </div>
      ),
      label: "Bisuness info",
    },
  ];

  return (
    <AuthLayout>
      <div className="">
        <div className="rounded w-full mb-16">
          <div className="bg-white rounded">
            <div className="flex items-center p-4">
              <label className="block text-lg font-semibold grow">
                Settings
              </label>

              <CustomMenu
                Component={({ click }) => (
                  <Btn
                    content={
                      <>
                        {toggler} <ArrowDropDown fontSize="small" />
                      </>
                    }
                    className="bg-sky-500 hover:bg-sky-600 mr-3 capitalize"
                    click={click}
                  />
                )}
                options={options.filter(({ label }) => label !== toggler)}
              />
            </div>
          </div>

          <Divider className="border-slate-20000" />

          { form_switch(toggler, user) }
        </div>
      </div>
    </AuthLayout>
  );
}


const form_switch = (name, user) => {

  switch (name) {
    case 'Basic info settings':
      return <Profile user={user} />
  
    case 'Security settings':
      return <Security />
  
    case 'Bisuness info':
      return <Bisuness />

    default:
      break;
  }
}