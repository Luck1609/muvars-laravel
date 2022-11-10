import React from "react";
import Layout from "components/layouts/users_nav";
import SettingsComponent from "components/pages/user/settings";
import HttpReq from "helpers/axios";

export default function Settings({ pageProps: {user} }) {   

  return (
    <Layout>
      <SettingsComponent user={user} />
    </Layout>
  );
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
