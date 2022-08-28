import * as Icons from '@iconscout/react-unicons'

export default function OverviewCards() {
  return (
    <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-5">
      <div className="w-full flex items-center bg-gradient-to-tr from-green-500 to-teal-500 text-white rounded-md p-8">
        <div className="flex items-center justify-between w-full">
          <div className="p-4 rounded-full bg-white bg-opacity-[0.15]">
            <Icons.UilTicket size={50} />
          </div>

          <div className="ml-5">
            <label className="text-lg font-medium">Tickets sold</label>
            <p className="font-semibold text-2xl">1609</p>
          </div>
        </div>
      </div>

      <div className="w-full flex items-center bg-gradient-to-tr from-yellow-500 to-rose-500 text-white rounded-md p-8">
        <div className="flex items-center justify-between w-full">
          <div className="p-4 rounded-full bg-white bg-opacity-[0.15]">
            <Icons.UilMoneyBill size={50} />
          </div>

          <div className="ml-5">
            <label className="text-lg font-medium">Total revenue (GHc)</label>
            <p className="font-semibold text-2xl">1,609,013</p>
          </div>
        </div>
      </div>

      <div className="w-full flex items-center bg-gradient-to-tr from-red-500 to-pink-500 text-white rounded-md p-8">
        <div className="flex items-center justify-between w-full">
          <div className="p-4 rounded-full bg-white bg-opacity-[0.15]">
            <Icons.UilMoneyBillSlash size={50} />
          </div>

          <div className="ml-5">
            <label className="text-lg font-medium"> Total expenses (GHc)</label>
            <p className="font-semibold text-2xl">502,122</p>
          </div>
        </div>
      </div>

      <div className="w-full flex items-center bg-gradient-to-tr from-sky-500 to-cyan-500 text-white rounded-md p-8">
        <div className="flex items-center justify-between w-full">
          <div className="p-4 rounded-full bg-white bg-opacity-[0.15]">
            <Icons.UilBus size={50} />
          </div>

          <div className="ml-5">
            <label className="text-lg font-medium"> Total trips</label>
            <p className="font-semibold text-2xl">98</p>
          </div>
        </div>
      </div>
    </div>
  )
}
