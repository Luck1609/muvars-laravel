import LinkItem from "components/widgets/link";
import UserTab from "../admin/navbar/user_tab";

export default function Nav({ user }) {

  return (
    <nav className="flex w-full bg-[#007bff] text-white">
      <div className="contained w-full flex py-3 items-center">
        <div className="grow">
          <label className="text-2xl font-bold">SmartTkt</label>
        </div>

        <ul className="mr-10">
          <li className="inline-block mx-2">
            <LinkItem url="/">Home</LinkItem>
          </li>
          <li className="inline-block mx-2">
            <LinkItem url="/bus-schedules">Routes</LinkItem>
          </li>

          <li className="inline-block mx-2">
            <LinkItem url="/hire-bus">Hire Bus</LinkItem>
          </li>

          <li className="inline-block mx-2"></li>
        </ul>

        
        <UserTab  />
      </div>
    </nav>
  );
}
