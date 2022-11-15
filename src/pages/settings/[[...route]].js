import React from "react";
import { useRouter } from "next/router";
// import { useState } from "react";
import { ArrowDropDown } from "@mui/icons-material";
import { Divider } from "@mui/material";
import Layout from "components/layouts/users_nav";
// import SettingsComponent from "components/pages/user/settings";
import HttpReq from "helpers/axios";
import CustomMenu from "components/widgets/menu_item";
import Profile from "components/pages/user/settings/profile";
import Security from "components/pages/user/settings/security";
import Business from "components/pages/user/settings/bisuness";
import { Btn } from "components/widgets/btn";
import AuthLayout from "components/pages/user/auth_layout";

export default function Settings({ pageProps }) {
  // const [toggler, setToggler] = useState("Basic info settings");
  const { push, query: { route } } = useRouter();

  const toggle = (form) => push(form)

  const options = [
    {
      name: ({ close }) => (
        <div
          className="p-1.5 px-3 cursor-pointer"
          onClick={() => {
            toggle("profile-settings");
            close();
          }}
        >
          Basic info settings
        </div>
      ),
      label: "Profile settings",
    },
    {
      name: ({ close }) => (
        <div
          className="p-1.5 px-3 cursor-pointer"
          onClick={() => {
            toggle("security-settings");
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
            toggle("bisuness-info");
            close();
          }}
        >
          Bisuness info
        </div>
      ),
      label: "Bisuness info",
    },
  ];   

  // console.log('Auth user', query)
  const user = pageProps.user

  const url = route[0].split('-').join(' ')
  
  const toggler = `${url.charAt(0).toUpperCase()}${url.substring(1)}`

  return (
    <Layout>
      <AuthLayout user={user}>
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
    </Layout>
  );
}


const form_switch = (name, user) => {

  switch (name) {
    case 'Profile settings':
      return <Profile user={user} />
  
    case 'Security settings':
      return <Security />
  
    case 'Bisuness info':
      return <Business business={user?.agency} />

    default:
      return <></>
      break;
  }
}

const http = new HttpReq();

export async function getServerSideProps({ req }) {
  const { user } = await http.get(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/user-data`,
    {
      headers: {
        cookie: req.headers.cookie,
      },
    }
  );

  console.log("Current user details", user);

  return {
    props: { user },
  };
}
