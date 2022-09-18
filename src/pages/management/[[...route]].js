import { getSession } from "next-auth/react";
import { useRouter } from "next/router";
import DashboardComponent from "components/pages/management/dashboard";
import UsersComponent from "components/pages/management/users";
import TicketsComponent from "components/pages/management/tickets";
import ScheduleComponent from "components/pages/management/schedule";
import ParcelComponent from "components/pages/management/parcel";
import RevenueComponent from "components/pages/management/revenue";
import ExpensesComponent from "components/pages/management/expenses";
import SettingsComponent from "components/pages/management/settings";
import ProtectedAdminLayout from "components/layouts/admin/protect_admin_route";

export default function ProtectedManagement() {
  const { asPath } = useRouter()

  return <ProtectedAdminLayout>{switcher(asPath)}</ProtectedAdminLayout>;
}

export async function getServerSideProps({resolvedUrl: url, ...context}) {
  const session = await getSession(context);

  console.log('Protectedt route session ', session, context, url)

  if (!session) {
    return {
      redirect: {
        destination: "/management",
        permanent: false,
      },
    };
  }
  else if (url === '/management' && session) {
    return {
      redirect: {
        destination: "/management/dashboard",
        permanent: false,
      },
    };
  }

  return {
    props: {
      session,
    },
  };
}

const switcher = (path) => {
    if (path.startsWith("/management/dashboard"))
      return <DashboardComponent />;

    if (path.startsWith("/management/users"))
      return <UsersComponent />;

    if (path.startsWith("/management/tickets"))
      return <TicketsComponent />;

    if (path.startsWith("/management/schedule"))
      return <ScheduleComponent />;

    if (path.startsWith("/management/parcel"))
      return <ParcelComponent />;

    if (path.startsWith("/management/revenue"))
      return <RevenueComponent />;

    if (path.startsWith("/management/expense"))
      return <ExpensesComponent />;

    if (path.startsWith("/management/settings"))
      return <SettingsComponent />;

    else
      return <>Yo fish</>;
};
