import React from 'react'
import { useRouter } from 'next/router';
import GuestLayout from 'components/layouts/admin/guest_route';
import RegisterComponent from 'components/pages/auth/register';


export default function Register() {
  const  pathname  = useRouter();

  // console.log('Use router params', pathname)

  return (
    <GuestLayout>
      <label className="text-3xl font-bold block">Register</label>
      <RegisterComponent />
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