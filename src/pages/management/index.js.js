import { useRouter } from 'next/router';
import { getSession } from "next-auth/react";
import LoginComponent from 'components/pages/management/auth';
import GuestLayout from 'components/layouts/admin/guest_route';

export default function ManagmentEntry() {
  const { asPath } = useRouter()

  return (
    <GuestLayout>
      {switcher(asPath)}
    </GuestLayout>
  )
}


export async function getServerSideProps(context) {
  const session = await getSession(context);

  if (session) {
    return {
      redirect: {
        destination: "/management/dashboard",
        permanent: false,
      },
    };
  }
}


const switcher = (path) => {
  switch (path) {

    case '/management/register':
      return <>Register component</>

    case '/management/forgot-password':
      return <>Forgot password component</>

    case '/management/reset-password':
      return <>Forgot reset component</>
  
    case '/management':
      return <LoginComponent />

    default:
      return <>Unauthenticated</>
      break;
  }
}