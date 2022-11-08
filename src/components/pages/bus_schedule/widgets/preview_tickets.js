import React from 'react'
import { Fragment } from 'react'

export default function PreviewTickets({tickets}) {
  return (
    <>
      {
        tickets.map((ticket, index) => {
          return (
            <Fragment key={index.toString()}>
              <div className="w-full p-3 bg-slate-100 rounded">
                <label className="text-sm font-semibold">Name</label>
                <span className="block font-medium">{ ticket.name }</span>
              </div>

              <div className="w-full p-3 bg-slate-100 rounded">
                <label className="text-sm font-semibold">Phone number</label>
                <span className="block font-medium">{ticket.phone}</span>
              </div>

              <div className="w-full p-3 bg-slate-100 rounded">
                <label className="text-sm font-semibold">Emergency contact name</label>
                <span className="block font-medium">{ ticket.emergency_contact_name }</span>
              </div> 

              <div className="w-full p-3 bg-slate-100 rounded">
                <label className="text-sm font-semibold">Emergency contact number</label>
                <span className="block font-medium">{ ticket.emergency_contact_phone }</span>
              </div>

              <div className="w-full p-3 bg-slate-100 rounded">
                <label className="text-sm font-semibold">Gender</label>
                <span className="block font-medium" style={{textTransform: "capitalize"}}>{ ticket.gender }</span>
              </div>
            </Fragment>
          )
        })
      }
    </>
  )
}
