import ListItems from 'components/widgets/list_item';
import Menu from 'components/widgets/menu';
import {useAuth} from 'hooks/auth'
import { useRouter } from 'next/router';
import AgencyBasics from './pages';
import BusComponent from './pages/buses';
import RoutesComponent from './pages/routes';
import ScheduleComponent from './pages/schedule';
import TerminalComponent from './pages/terminals';
import SettingsNav from './widgets';
import AgencyInfoComponent from './widgets/agency-info';
import MiscSettings from './widgets/misc';
import NotificationSettings from './widgets/notification';
import PermissionSettings from './widgets/permissions';
import ProfileSettings from './widgets/profile';
import RoleSettings from './widgets/roles';

export default function SettingsComponent() {
  const {asPath, replace} = useRouter()
  // const { user, logout } = useAuth({middleware: 'auth'});

  return (
    <div className="w-full mx-auto p-3 items-center my-10">

      {
        asPath === '/management/settings' ? (
          <AgencyBasics />
        ) : null
      }
      
      <Menu />

      { showSettings(asPath) }
    </div>
  )
}


const showSettings = (path) => {
  console.log('Settings path', path)

  switch (path) {
    case '/management/settings':
      return <SettingsNav />
    

    case '/management/settings/profile-settings':
      return <ProfileSettings />
    

    case '/management/settings/profile-settings':
      return <ProfileSettings />

    case '/management/settings/agency-info':
      return <AgencyInfoComponent />

    case '/management/settings/buses':
      return <BusComponent />

    case '/management/settings/schedules':
      return <ScheduleComponent />

    case '/management/settings/terminals':
      return <TerminalComponent />

    case '/management/settings/routes':
      return <RoutesComponent />

    case '/management/settings/notifications':
      return <NotificationSettings />


    case '/management/settings/misc':
      return <MiscSettings />


    case '/management/settings/roles':
      return <RoleSettings />

    case '/management/settings/roles/permissions':
      return <PermissionSettings />
  
    default:
      break;
  }
}