import { Avatar } from '@mui/material'

export default function Nav() {
  return (
    <nav className="flex w-full bg-[#007bff]">
      <div className="contained w-full flex py-3 items-center">
        <div className="grow">
          <label className="text-2xl font-bold">SmartTkt</label>
        </div>

        <div className="">
          <Avatar src="" alt="" />
        </div>
      </div>
  </nav>
  )
}
