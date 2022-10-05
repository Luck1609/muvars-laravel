import { UilBars } from "@iconscout/react-unicons";
import { Btn } from "components/widgets/btn";
import LinkItem from "components/widgets/link";
import CustomMenu from "components/widgets/menu_item";
import { useRouter } from "next/router";
import UserTab from "../admin/navbar/user_tab";

export default function Nav() {
  const { push } = useRouter();

  const goto = (url) => push(url)

  return (
    <nav className="flex w-full bg-[#007bff] text-white">
      <div className="contained w-full flex py-3 items-center">
        <div className="grow">
          <label className="text-2xl font-bold text-white">Muvars</label>
        </div>

        <ul className="mr-10 hidden md:block">
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

        
        <div className="hidden md:block">
          <UserTab />
        </div>

        <CustomMenu 
          Component={({click}) => <>
            <Btn 
              content={<UilBars />}
              className="bg-transparent hover:bg-black hover:bg-opacity-10 btn md:hidden"
              click={click}
            />
          </>}
          options={[
            {
              name: ({close}) =><>
                <LinkItem url="/" className="block p-1.5 pl-5 w-40 border-b" onClick={close}>
                  Home
                </LinkItem>
              </>
            },
            {
              name: ({close}) =><>
                <LinkItem url="/bus-schedules" className="block p-1.5 pl-5 w-40 border-b" onClick={close}>
                  Routes
                </LinkItem>
              </>
            },
            {
              name: ({close}) =><>
                <LinkItem url="/hire-bus" className="block p-1.5 pl-5 w-32" onClick={close}>
                  Hire bus
                </LinkItem>
              </>
            },
          ]}
        />
      </div>
    </nav>
  );
}
