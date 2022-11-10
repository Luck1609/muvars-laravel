import React from "react";
import Layout from "components/layouts/users_nav";
import AdForm from "components/pages/user/dashboard/ad_form";
import HttpReq from "helpers/axios";

export default function Posts({ pageProps: { user } }) {
  return (
    <Layout>
      <div className="w-full max-w-4xl m-auto bg-white p-10 rounded my-10">
        <AdForm user={user} />
      </div>
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
