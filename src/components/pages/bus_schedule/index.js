import Layout from "components/widgets/layouts/users_nav";
import ScheduleCard from "./schedule_card";


export default function BusScheduleComponent() {
  return (
    <Layout>
      <div className="contained">
        <div className="my-10 grid grid-cols-8 gap-5">

          <div className="col-span-2 bg-teal-300"></div>


          <div className="col-span-6 grid gap-7">
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
