import React from 'react'
import { Fragment } from 'react'

export default function PreviewTickets({ticket}) {
  return (
    <>
      <div className="w-full p-3 bg-slate-100 rounded">
        <label className="text-sm font-semibold">Name</label>
        <span className="block font-medium">{ ticket.name }</span>
      </div>

      <div className="w-full p-3 bg-slate-100 rounded">
        <label className="text-sm font-semibold">Phone number</label>
        <span className="block font-medium">{ticket.phone}</span>
      </div>

      <div className="w-full p-3 bg-slate-100 rounded">
        <label className="text-sm font-semibold">Gender</label>
        <span className="block font-medium" style={{textTransform: "capitalize"}}>{ ticket.gender }</span>
      </div>

      <div className="w-full p-3 bg-slate-100 rounded">
        <label className="text-sm font-semibold">Emergency contact number</label>
        <span className="block font-medium">{ ticket.emergencyContactPhone }</span>
      </div>
    </>
  )
}
