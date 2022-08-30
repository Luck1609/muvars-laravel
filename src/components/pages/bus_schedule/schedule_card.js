import { buses } from "assets/img/bus"
import Image from "next/image"
// import * as Icons from "@iconscout/react-unicons"
import { Btn } from "components/widgets/btn"
import { useRouter } from "next/router"

export default function ScheduleCard() {
  const { pathname, push } = useRouter()

  

  return (
    <>
      <div className="w-full grid grid-cols-2 lg:grid-cols-4 rounded-[3px] overflow-hidden bg-white shadow">
        <div className="w-full lg:w-full order-1">
          <Image src={buses.bus_1} alt="" layout="responsive" />
        </div>

        <div className="col-span-2 lg:ml-5 p-3 order-3 lg:order-2">
          <div className="flex items-start mb-3">
            <h3 className="text-lg font-semibold grow">VIP Bus</h3>
          </div>

          <div className="flex items-center mb-2 text-center">
            <div className="text-sm flex items-center justify-center flex-col">
              <span className="font-semibold">Accra (Departure)</span>

              <p className="font-medium">8:00am</p>
            </div>

            <div className="bus-separator"></div>

            <div className="text-sm flex items-center justify-center flex-col">
              <span className="font-semibold">Sunyani (Arrival)</span>

              <p className="font-medium">8:00am</p>
            </div>
          </div>

          <div className="text-sm font-semibold text-rose-500">
            <label className="mr-2">Price per passenger:</label>
            <span className="">GH¢ 105</span>
          </div>
        </div>

        <div
          className={`${
            pathname !== "bus-schedule" ? "flex flex-col lg:justify-center" : ""
          } text-center text-green-500 border-l p-2.5 lg:p-5 order-2 lg:order-3 lg:w-auto`}
        >
          <p className="font-semibold">Available seats</p>
          <label className="block font-semibold text-lg">21</label>

          {pathname !== "/bus-schedules" ? null : (
            <Btn
              content="Book now"
              className="bg-blue-500 hover:bg-blue-600 mt-2 w-28 mx-auto lg:w-auto"
              click={() => push("/bus-schedules/vip-bus")}
            />
          )}
        </div>
      </div>
    </>
  );
}
