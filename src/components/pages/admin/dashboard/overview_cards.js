import * as Icons from '@iconscout/react-unicons'

export default function OverviewCards() {
  return (
    <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-5">
      <div className="w-full flex items-center bg-gradient-to-tr from-amber-500 to-orange-500 text-white rounded-md p-8">
        <div className="flex items-center justify-between w-full">
          <div className="p-4 rounded-full bg-white bg-opacity-[0.15]">
            <Icons.UilTicket size={50} />
          </div>

          <div className="ml-5">
            <label className="text-lg font-medium">Partner Agencies</label>
            <p className="font-semibold text-2xl">14</p>
          </div>
        </div>
      </div>

      <div className="w-full flex items-center bg-gradient-to-tr from-pink-500 to-indigo-500 text-white rounded-md p-8">
        <div className="flex items-center justify-between w-full">
          <div className="p-4 rounded-full bg-white bg-opacity-[0.15]">
            <Icons.UilMoneyBill size={50} />
          </div>

          <div className="ml-5">
            <label className="text-lg font-medium">Total Admins (GHc)</label>
            <p className="font-semibold text-2xl">2</p>
          </div>
        </div>
      </div>

      <div className="w-full flex items-center bg-gradient-to-tr from-red-500 to-pink-500 text-white rounded-md p-8">
        <div className="flex items-center justify-between w-full">
          <div className="p-4 rounded-full bg-white bg-opacity-[0.15]">
            <Icons.UilMoneyBillSlash size={50} />
          </div>

          <div className="ml-5">
            <label className="text-lg font-medium"> Total tickets sold</label>
            <p className="font-semibold text-2xl">1301</p>
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
