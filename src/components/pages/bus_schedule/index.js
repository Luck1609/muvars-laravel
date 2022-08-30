import Layout from "components/widgets/layouts/users_nav";
import ScheduleCard from "./schedule_card";


export default function BusScheduleComponent() {
  return (
    <Layout>
      <div className="contained">
        <div className="my-10 grid lg:grid-cols-8 gap-5">

          <div className="lg:col-span-2 px-3 lg:px-0 w-full">
            <div className="bg-white shadow-sm">
              <h4 className="text-lg font-semibold">Filter</h4>
            </div>
          </div>


          <div className="lg:col-span-6 grid gap-7">
            <ScheduleCard />
            <ScheduleCard />
            <ScheduleCard />
            <ScheduleCard />
            <ScheduleCard />
            <ScheduleCard />
          </div>
        </div>
      </div>
    </Layout>
  )
}
