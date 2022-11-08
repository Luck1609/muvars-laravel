import { buses } from "assets/img/bus"
import Image from "next/image"
import { useRouter } from "next/router"
import dayjs from "dayjs"
import Link from "components/widgets/link"
import { beautifyUrl } from "helpers/index"

export default function ScheduleCard({ data }) {
  const { query: { origin, destination, date } } = useRouter()

  console.log('Bus info', data)

  return (
    <Link url={`/book-bus?origin=${origin}&destination=${destination}&agency=${beautifyUrl(data.bus.agency.name)}&date=${date}`} className="block">
      <BusCard data={data} />
    </Link>
  );
}


export const BusCard = ({ data }) => {
  const img = data.bus.img ? JSON.parse(data.bus.img) : '';

  return (
    <div className="w-full grid grid-cols-2 lg:grid-cols-4 rounded-[3px] overflow-hidden bg-white shadow-sm">
      <div className="w-full lg:w-full order-1 relative">
        <Image src={img ? `${process.env.NEXT_PUBLIC_BACKEND_URL}${img[0]}` : buses.bus_1} alt="" layout="fill" />
      </div>

      <div className="col-span-3 lg:ml-5 p-3 order-3 lg:order-2">
        <div className="flex items-start mb-3">
          <h3 className="text-lg font-semibold grow">{ data.bus.agency.name }</h3>
        </div>

        <div className="flex items-start mb-2 text-center">
          <div className="text-sm flex items-center justify-center flex-col">
            <span className="font-semibold">{ data.travelOrigin.town } (Departure)</span>

            <p className="font-medium">{ dayjs(data.departureTime).format('HH:mma') }</p>
          </div>

          <div className="bus-separator my-auto"></div>

          <div className="text-sm flex items-center justify-center flex-col">
            <span className="font-semibold">{ data.travelDestination.town } (Arrival)</span>

            {/* <p className="font-medium">8:00am</p> */}
          </div>
        </div>

        <div className="text-sm font-semibold text-rose-500">
          <label className="mr-2">Price per passenger:</label>
          <span className="">GH¢ { data.fare }</span>
        </div>
      </div>

      {/* <div
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
      </div> */}
    </div>
  )
}