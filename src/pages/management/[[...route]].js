// import { unstable_getServerSession } from "next-auth";
import { useRouter } from "next/router";
import DashboardComponent from "components/pages/management/dashboard";
import UsersComponent from "components/pages/management/users";
import TicketsComponent from "components/pages/management/tickets";
import ScheduleComponent from "components/pages/management/settings/pages/schedule";
import ParcelComponent from "components/pages/management/parcel";
import RevenueComponent from "components/pages/management/revenue";
import ExpensesComponent from "components/pages/management/expenses";
import SettingsComponent from "components/pages/management/settings";
import ProtectedAdminLayout from "components/layouts/admin/protect_admin_route";
import HttpReq from "helpers/axios";
// import { authOptions } from "../api/auth/[...nextauth]";
import EventsComponent from "components/pages/admin/events";
import AgencyComponent from "components/pages/admin/agency";

export default function ProtectedManagement() {
  const { asPath } = useRouter();

  return <ProtectedAdminLayout>{switcher(asPath)}</ProtectedAdminLayout>;
}


const switcher = (path) => {

  if (path.startsWith("/management/users")) return <UsersComponent />;

  if (path.startsWith("/management/tickets")) return <TicketsComponent />;

  if (path.startsWith("/management/schedule")) return <ScheduleComponent />;

  if (path.startsWith("/management/parcel")) return <ParcelComponent />;

  if (path.startsWith("/management/revenue")) return <RevenueComponent />;

  if (path.startsWith("/management/agencies")) return <AgencyComponent />;

  if (path.startsWith("/management/events")) return <EventsComponent />;

  if (path.startsWith("/management/expense")) return <ExpensesComponent />;

  if (path.startsWith("/management/settings")) return <SettingsComponent />;
  
  if (path.startsWith("/management")) return <DashboardComponent />;
  else return <>Yo fish</>;
};


const http = new HttpReq();

export async function getServerSideProps({req, res, query}) {
  // const session = await unstable_getServerSession(req, res, authOptions);

  const {data: user} = await http.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/user-data`, {
    headers: {
      cookie: req.headers.cookie
    }
  })

console.log('Current user', user)

  // if (!session) {
  //   return {
  //     redirect: {
  //       destination: '/login?unauthenticated&redirect=management/dashboard',
  //       permanent: false
  //     }
  //   }
  // }
  // else if (!user.isAdmin && !user.agency_id) {
  //   return {
  //     redirect: {
  //       destination: `/?unauthorized`,
  //       permanent: false,
  //     },
  //   };
  // }

  return {
    props: {
    },
  };
}