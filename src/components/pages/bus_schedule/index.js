import Layout from "components/layouts/users_nav";
import { useRouter } from "next/router";
import ScheduleCard from "./schedule_card";


export default function BusScheduleComponent({ buses }) {
  const router = useRouter();

  // console.log('Schedule router ', router)

  return (
    <div className="grid gap-7">
      {
        buses.map((bus, index) => <ScheduleCard data={bus} key={index.toString()} />)
      }
    </div>
  )
}
