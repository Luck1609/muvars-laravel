// import { getSession } from "next-auth/react";
import { useRouter } from "next/router";
import DashboardComponent from "components/pages/admin/dashboard";
import SettingsComponent from "components/pages/admin/settings";
import ProtectedAdminLayout from "components/layouts/admin/protect_admin_route";
import AgencyComponent from "components/pages/admin/agency";
import AdminUsersComponent from "components/pages/admin/users";
import EventsComponent from "components/pages/admin/events";
import HttpReq from "helpers/axios";


export default function ProtectedAdminArea() {
  const { asPath } = useRouter()

  return <ProtectedAdminLayout>{switcher(asPath)}</ProtectedAdminLayout>;
}

const http = new HttpReq();

export async function getServerSideProps({req, res, query}) {
  const {data: user} = await http.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/user/user-data`, {
    headers: {
      cookie: req.headers.cookie
    }
  })

  console.log('User data', user)
  if (!user.isAdmin) {
    return {
      redirect: {
        destination: user?.agency_id ? `/management/dashboard?unauthorized` : `/?unauthorized`,
        permanent: false,
      },
    };
  }

  return {
    props: {
    },
  };
}

const switcher = (path) => {
    if (path.startsWith("/admin/dashboard"))
      return <DashboardComponent />;

    if (path.startsWith("/admin/users"))
      return <AdminUsersComponent />;

    if (path.startsWith("/admin/agencies"))
      return <AgencyComponent />;

    if (path.startsWith("/admin/events"))
      return <EventsComponent />;

    if (path.startsWith("/admin/settings"))
      return <SettingsComponent />;

    else
      return <>Yo fish</>;
};
