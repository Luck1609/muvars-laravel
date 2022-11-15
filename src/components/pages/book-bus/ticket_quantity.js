import { Btn } from 'components/widgets/btn'
import React from 'react'

export default function TicketQuantityComponent({ tickets, preview, handlePurchase, purchase, qty }) {
  return (
    <>
      
      <div className="">
        {
          purchase > 5 && (
            <div className="w-full flex justify-end p-2">
              <label className="bg-red-400 text-white p-1 px-3 rounded font-medium text-sm">Maximum booking cannot exceed (5) tickets</label>
            </div>
          )
        }

        <form className="w-full flex bg-white p-5 rounded shadow-sm items-center" onSubmit={tickets}>
          <label className="font-semibold text-xl grow">Purchase bus ticket</label>

          <div className="w-2/5 flex items-center justify-end">
            <input 
              type="number" 
              className="w-3/5 border p-3 rounded" 
              disabled={preview} 
              defaultValue={purchase} 
              placeholder="No. of tickets" 
              onChange={handlePurchase}
            />
            
            {/* { console.log('Ticket purchase quantity', purchase, 'Tickets =>', qty, 'status =>', qty === purchase) } */}

            <Btn 
              content="Add details"
              className="bg-white text-primary hover:text-white hover:bg-primary h-12 ml-3 border-primary"
              variant="outlined"
              type="submit"
              disabled={ qty === purchase || preview || purchase > 5 }
            />
          </div>
        </form>
      </div>
    </>
  )
}
