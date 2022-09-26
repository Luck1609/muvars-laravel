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
// import HttpReq from "helpers/axios";
// import GuestLayout from "components/layouts/admin/guest_route";
import LoginComponent from "components/pages/management/auth";
import { useAuth } from "hooks/auth";

// const http = new HttpReq();

export default function ProtectedManagement() {
  const { user, error } = useAuth({ middleware: "manager" });
  const { asPath } = useRouter();

  if (!user && !error)
    return (
      <div className="w-full h-full flex justify-center items-center">
        <span>Loading...</span>
      </div>
    );

  else return <ProtectedAdminLayout>{switcher(asPath)}</ProtectedAdminLayout>;
}


const switcher = (path) => {

  if (path.startsWith("/management/users")) return <UsersComponent />;

  if (path.startsWith("/management/tickets")) return <TicketsComponent />;

  if (path.startsWith("/management/schedule")) return <ScheduleComponent />;

  if (path.startsWith("/management/parcel")) return <ParcelComponent />;

  if (path.startsWith("/management/revenue")) return <RevenueComponent />;

  if (path.startsWith("/management/expense")) return <ExpensesComponent />;

  if (path.startsWith("/management/settings")) return <SettingsComponent />;
  
  if (path.startsWith("/management")) return <DashboardComponent />;
  else return <>Yo fish</>;
};
