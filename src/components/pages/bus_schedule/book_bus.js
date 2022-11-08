import { useEffect, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { useRouter } from "next/router";
import Layout from "components/layouts/users_nav";
// import ScheduleCard from "./schedule_card";
// import BookingFormDetails from "./widgets/booking_form_details";
// import SeatComponent from "./widgets/seat_component";
import { BusCard } from "./schedule_card";
import { Btn, FormBtn } from "components/widgets/btn";
import BusBookingForm from "./form/bus_booking_form";
import { useRef } from "react";
import PreviewTickets from "./widgets/preview_tickets";
import { yupResolver } from "@hookform/resolvers/yup";
import { booking_validation } from "components/validations";
import { useMemo } from "react";
import { beautifyUrl } from "helpers/index";

export default function BookBusComponent({ info }) {
  const [tickets, setTickets] = useState(1)
  const [preview, setPreview] = useState(false)
  const purchase = useRef(1)
  const ticketEntry = useRef([])
  const { query } = useRouter()
  const methods = useForm({
    mode: 'all',
    resolver: yupResolver(booking_validation)
  });

  const { handleSubmit, reset, watch, formState: {isValid, isDirty, errors} } = methods;
// useMemo(() => first, [second])

  const defaultFormData = useMemo(() => { return {
    name: '',
    phone: '',
    gender: '',
    emergency_contact_phone: '',
    date: query.date,
    origin: beautifyUrl(query.origin),
    destination: query.destination,
    scheduleId: info.id,
    fare: info.fare
  }}, [info, query])

  useEffect(() => {
    reset(defaultFormData)
  }, [reset, defaultFormData, query, info]);
  


  const submit = (payload) => {
    ticketEntry.current = [...ticketEntry.current, payload]
    if (ticketEntry.current.length + 1 !== tickets) setPreview(!preview)
    reset(defaultFormData)
  };


  const number_of_tickets = (e) => {
    e.preventDefault();
    setTickets(purchase.current.value)
    // purchase.current.value = ''
  }

  // console.log('Bus to be boarded', info)
  // console.log('Ticket entries', ticketEntry.current)
  console.log('Watching ticket form entries', watch(), errors)

  const book_bus = () => {

  }

  return (
    <Layout>
      <div className="contained">
        <div className="my-10 grid lg:grid-cols-8 gap-5">
          <div className="lg:col-span-2 bg-teal-300 hidden lg:block">
            <label className="text-xl font-semibold py-5 block text-center rounded">Advertising space</label>
          </div>



          <div className="lg:col-span-6 grid gap-7">
            {/* <ScheduleCard /> */}
            <BusCard data={info} />

            <form className="w-full flex items-center bg-white p-5 rounded shadow-sm" onSubmit={number_of_tickets}>
              <label className="font-semibold text-xl grow">Purchase bus ticket</label>

              <div className="w-2/5 flex items-center justify-end">
                <input type="number" className="w-3/5 border p-3 rounded" defaultValue={1} maxLength={5} placeholder="No. of tickets" ref={purchase} />
                <Btn 
                  content="Add details"
                  className="bg-white text-primary hover:text-white hover:bg-primary h-12 ml-3 border-primary"
                  variant="outlined"
                  type="submit"
                />
              </div>
            </form>
            
            <FormProvider {...methods}>
              <form
                onSubmit={handleSubmit(submit)}
                className="grid lg:grid-cols-3 gap-5"
              >
      
                <div className="bg-white shadow-sm p-5 rounded col-span-3 grid lg:grid-cols-3 gap-5">
                  <div className="w-full col-span-3 flex items-center">
                    <label className="font-semibold text-lg block grow">Buyer details (Ticket {ticketEntry.current.length + 1}/{tickets ?? 1})</label>

                    {/* <Btn 
                      content="Change destination"
                      className="bg-rose-500 mr-3"
                    /> */}

                    {
                      tickets > 1 && ticketEntry.current.length >= 1 ? (
                        <FormBtn 
                          content="Previous ticket"
                          className="bg-slate-500 hover:bg-slate-600 mr-3"
                        />
                      ) : null
                    }
                    {
                      ticketEntry.current.length + 1 !== tickets ? (
                        <FormBtn 
                          content="Next ticket"
                          className="bg-primary"
                          disabled={!isValid || !isDirty}
                        />
                      ) : (
                        <FormBtn 
                          content="Preview ticket(s)"
                          className="bg-emerald-500"
                          disabled={!isValid || !isDirty}
                        />
                      )
                    }
                    {/* <Btn 
                      content="Buy ticket(s)"
                      className="bg-primary mr-3"
                      click={book_bus}
                    /> */}
                  </div>


                  {
                    !preview ? (
                      <BusBookingForm />
                    ) : (
                      <PreviewTickets tickets={ticketEntry.current} />
                    )
                  }
                </div>
              </form>
            </FormProvider>
          </div>
        </div>
      </div>
    </Layout>
  );
}



                
{/* {
  showBookingForm ? (
    <div className="w-full col-span-3 grid gap-7">
      <h3 className="font-semibold text-2xl mt-3">
        Booking info for 4 passenger(s)
      </h3>

      {bookedSeats.length > 0 ? (
        <BookingFormDetails bookedSeats={bookedSeats} />
      ) : null}
    </div>
  ) : null
}

<SeatComponent data={{ bookedSeats, setBookedSeats, booking_form, showBookingForm }} /> */}