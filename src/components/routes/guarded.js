import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import ProtectedAdminLayout from "components/layouts/admin/protect_admin_route";

export default function Guarded({ Component, pageProps }) {
  const { push } = useRouter();
  // const { data: session } = useSession({
  //   required: true,
  //   onUnauthenticated() {
  //     push()
  //   },
  // });
  const { pathname } = useRouter();

  const match =
    pathname.startsWith("/management") || pathname.startsWith("/admin");

  return (
    <>
      {match ? (
        <ProtectedAdminLayout>
          <Component {...pageProps} />
        </ProtectedAdminLayout>
      ) : (
        <Component {...pageProps} />
      )}
    </>
  );
}



export async function getServerSideProps(context) {
  const session = await getSession(context)
  
  if (!session) {
    return {
      redirect: {
        destination:  `?callbackUrl=${process.env.CALLBACK_URL}`,
        permanent: false
      }
    }
  }

  return {
    props: {
      session
      
    }
  }
}