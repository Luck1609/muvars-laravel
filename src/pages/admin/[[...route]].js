// import { getSession } from "next-auth/react";
import { useRouter } from "next/router";
import DashboardComponent from "components/pages/admin/dashboard";
import SettingsComponent from "components/pages/admin/settings";
import ProtectedAdminLayout from "components/layouts/admin/protect_admin_route";
import AgencyComponent from "components/pages/admin/agency";
import AdminUsersComponent from "components/pages/admin/users";
import EventsComponent from "components/pages/admin/events";

export default function ProtectedAdminArea() {
  const { asPath } = useRouter()

  return <ProtectedAdminLayout>{switcher(asPath)}</ProtectedAdminLayout>;
}

// export async function getServerSideProps({resolvedUrl: url, ...context}) {
//   const session = await getSession(context);

//   // console.log('Protectedt route session ', session, context, url)

//   if (!session) {
//     return {
//       redirect: {
//         destination: "/admin",
//         permanent: false,
//       },
//     };
//   }
//   else if (url === '/admin' && session) {
//     return {
//       redirect: {
//         destination: "/admin/dashboard",
//         permanent: false,
//       },
//     };
//   }

//   return {
//     props: {
//       session,
//     },
//   };
// }

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
