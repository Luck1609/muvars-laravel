import { useMemo, useState, useRef, useEffect } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { useRouter } from 'next/router'
// import BookBusComponent from 'components/pages/bus_schedule/book_bus'
import HttpReq from 'helpers/axios';
import { beautifyUrl } from 'helpers/index';
import Layout from 'components/layouts/users_nav';
import { BusCard } from 'components/pages/bus_schedule/schedule_card';
import { Btn, FormBtn } from 'components/widgets/btn';
import BusBookingForm from 'components/pages/bus_schedule/form/bus_booking_form';
import PreviewTickets from 'components/pages/bus_schedule/widgets/preview_tickets';
import { yupResolver } from '@hookform/resolvers/yup';
import { booking_validation } from 'components/validations';

export default function BusBooking({ pageProps: { info } }) {
  const [tickets, setTickets] = useState(1);
  const [preview, setPreview] = useState(false);
  const { query } = useRouter();
  const purchase = useRef(1);


  const methods = useForm({
    mode: 'all',
    resolver: yupResolver(booking_validation)
  });

  const { handleSubmit, reset, watch, formState: {isValid, isDirty, errors} } = methods;

  const ticketEntry = useRef([
    {
      name: '',
      phone: '',
      gender: '',
      emergency_contact_phone: '',
      date: query.date,
      origin: (query.origin.split('-').join(' ')).split('_').join('-'),
      destination: (query.destination.split('-').join(' ')).split('_').join('-'),
      scheduleId: info.id,
      fare: info.fare
    }
  ]);


  const defaultFormData = useMemo(() => { return {
    name: '',
    phone: '',
    gender: '',
    emergency_contact_phone: '',
    date: query.date,
    origin: (query.origin.split('-').join(' ')).split('_').join('-'),
    destination: (query.destination.split('-').join(' ')).split('_').join('-'),
    scheduleId: info.id,
    fare: info.fare
  }}, [info, query])

  useEffect(() => {
    reset(defaultFormData)
  }, [reset, defaultFormData, query, info]);
  


  const submit = (payload) => {
    if (!ticketEntry.current[0].name || !ticketEntry.current[0].phone || !ticketEntry.current[0].gender || !ticketEntry.current[0].emergency_contact_phone) {
      ticketEntry.current[0] = {
        ...ticketEntry.current[0],
        ...payload
      }
    }
    else {
      ticketEntry.current = [...ticketEntry.current, payload]
    }

    // console.log('Ticket entries', ticketEntry.current)
    // ticketEntry.current.length === tickets ? console.log('Yes, ready to book', ticketEntry.current.length, '=', tickets) : console.log('No, waiting to fill form', ticketEntry.current.length, '=', tickets)

    if (ticketEntry.current.length === tickets) setPreview(!preview)
    // reset(defaultFormData)
  };


  const number_of_tickets = (e) => {
    e.preventDefault();
    setTickets(purchase.current.value)
    // purchase.current.value = ''
  }

  // console.log('Bus to be boarded', info)
  // console.log('Ticket entries', ticketEntry.current)
  // console.log('Watching ticket form entries', ticketEntry.current, 'Preview status =>', preview)

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
            <BusCard data={info} />

            <form className="w-full flex items-center bg-white p-5 rounded shadow-sm" onSubmit={number_of_tickets}>
              <label className="font-semibold text-xl grow">Purchase bus ticket</label>

              <div className="w-2/5 flex items-center justify-end">
                <input type="number" className="w-3/5 border p-3 rounded" disabled={preview} defaultValue={1} maxLength={5} placeholder="No. of tickets" ref={purchase} />
                <Btn 
                  content="Add details"
                  className="bg-white text-primary hover:text-white hover:bg-primary h-12 ml-3 border-primary"
                  variant="outlined"
                  type="submit"
                  disabled={preview}
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
                    <label className="font-semibold text-lg block grow">Buyer details (Ticket {ticketEntry.current.length}/{tickets ?? 1})</label>

                    <Btn 
                      content="Change destination"
                      className="bg-emerald-400 hover:bg-emerald-500 mr-3"
                    />

                    {
                      tickets > 1 && ticketEntry.current.length >= 1 ? (
                        <FormBtn 
                          content="Previous ticket"
                          className="bg-slate-500 hover:bg-slate-600 mr-3"
                          disabled={!isValid || !isDirty}
                        />
                      ) : null
                    }
                    {
                      ticketEntry.current.length !== tickets ? (
                        <FormBtn 
                          content="Next ticket"
                          className="bg-primary"
                          disabled={!isValid || !isDirty}
                        />
                      ) : (
                        <>
                          {
                            !preview ? (
                              <FormBtn 
                                content="Preview ticket(s)"
                                className="bg-emerald-500"
                                disabled={!isValid || !isDirty}
                              />
                            ) : (
                              <>
                                <Btn 
                                  content="Clear booking"
                                  className="bg-red-400 hover:bg-red-500 mr-3"
                                  // click={book_bus}
                                />
                                <Btn 
                                  content="Buy ticket(s)"
                                  className="bg-primary mr-3"
                                  click={book_bus}
                                />
                              </>
                            )
                          }
                        </>
                      )
                    }
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


const http = new HttpReq();

export async function getServerSideProps({ query: {origin, destination, agency} }) {
  const { info } = await http.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/booking-info?origin=${origin}&destination=${destination}&agency=${agency}`)

  // console.log('Server-side query for info booking', info)

  return {
    props: {
      info
    }
  }
}