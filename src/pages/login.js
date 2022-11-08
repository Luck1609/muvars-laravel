import React from 'react'
import { useRouter } from 'next/router';
import GuestLayout from 'components/layouts/admin/guest_route';
import LoginComponent from 'components/pages/auth/login';


export default function Login() {
  const  pathname  = useRouter();

  // console.log('Use router params', pathname)

  return (
    <GuestLayout>
      <label className="text-3xl font-bold block py-4">Login</label>
      <LoginComponent />
    </GuestLayout>
  )
}



export async function getServerSideProps() {
  // const { data, error } = await http.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/user-data`);
  console.log('User data')
  // if (error) {
  //   return {
  //     redirect: {
  //       destination: `/?unauthenticated?redirect=/admin/${query.route}`,
  //       permanent: false,
  //     },
  //   };
  // }

  return {
    props: {
    },
  };
}