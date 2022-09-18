import React from 'react'
import { useRouter } from "next/router";
import GuestLayout from "components/layouts/admin/guest_route";

export default function Unguarded({ Component, pageProps }) {
  const { pathname } = useRouter();

  const match =
    pathname.startsWith("/management") || pathname.startsWith("/admin");

  return (
    <>
      {
        match ? (
          <GuestLayout>
            <Component {...pageProps} />
          </GuestLayout>
        ) : (
          <Component {...pageProps} />
        )
      }
    </>
  )
}
