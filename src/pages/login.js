import React from 'react'
import { useRouter } from 'next/router';
import GuestLayout from 'components/layouts/admin/guest_route';


export default function Login() {
  const  pathname  = useRouter();

  // console.log('Use router params', pathname)

  return (
    <GuestLayout>

    </GuestLayout>
  )
}



export async function getServerSideProps() {
  // const { data, error } = await http.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/mouvers/user-data`);
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