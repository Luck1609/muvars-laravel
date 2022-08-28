import Layouts from 'components/widgets/layouts'
import DashboardComponent from 'components/pages/management/dashboard'

export default function Dashboard() {
  return (
    <Layouts>
      <div className="contained">
        <DashboardComponent />
      </div>
    </Layouts>
  )
}
