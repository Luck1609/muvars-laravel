import { useMemo, useState, useEffect } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { useRouter } from 'next/router'
import useSWR from 'swr';
import { usePaystackPayment } from "react-paystack";
import HttpReq from 'helpers/axios';
// import { beautifyUrl } from 'helpers/index';
import Layout from 'components/layouts/users_nav';
import { BusCard } from 'components/pages/bus_schedule/schedule_card';
import { Btn, FormBtn } from 'components/widgets/btn';
import BusBookingForm from 'components/pages/bus_schedule/form/bus_booking_form';
import PreviewTickets from 'components/pages/bus_schedule/widgets/preview_tickets';
import { yupResolver } from '@hookform/resolvers/yup';
import { booking_validation } from 'components/validations';
import TicketQuantityComponent from 'components/pages/book-bus/ticket_quantity';
import useAPIContext from 'hooks/api_context';
import { useCallback } from 'react';

export default function BusBooking({ pageProps: { info } }) {
  const { data } = useSWR('/user-data')
  const [qty, setQty] = useState(1);
  const [purchase, setPurchase] = useState(1);
  const [step, setStep] = useState(1);
  const [preview, setPreview] = useState(false);
  const [entries, setEntries] = useState([]);
  const { query } = useRouter();
  const { makeRequest } = useAPIContext()


  const methods = useForm({
    mode: 'all',
    resolver: yupResolver(booking_validation)
  });

  const { handleSubmit, reset, watch, setValue, formState: {isValid, isDirty} } = methods;



  const defaultFormData = useMemo(() => { return {
    name: '',
    phone: '',
    gender: '',
    emergencyContactPhone: '',
    travelDate: query.date,
    origin: (query.origin.split('-').join(' ')).split('_').join('-'),
    destination: (query.destination.split('-').join(' ')).split('_').join('-'),
    scheduleId: info.id,
    fare: info.fare
  }}, [info, query])

  
  useEffect(() => {
    setEntries([defaultFormData])
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    reset(defaultFormData)
  }, [reset, defaultFormData, query, info]);
  


  const submit = (payload) => {
    const state = entries
    state[step - 1] = payload;

    setEntries(state)

    if (entries.length !== step) setStep(step + 1)
    if (entries.length === step) setPreview(!preview)
    reset(defaultFormData)
  };

  const handlePurchase = (e) => {
    if (e.target.value >= 1) setPurchase(e.target.value);
  }

  const handlePrevious = () => {
    // set form fields to previous data entered
    const previous_data = entries[step - 1];

    setValue('name', previous_data.name)
    setValue('phone', previous_data.phone)
    setValue('gender', previous_data.gender)
    setValue('emergencyContactPhone', previous_data.emergencyContactPhone)
    setValue('destination', previous_data.destination)
    setStep(step - 1);
  }
  
  // useEffect(() => {
  //   reset(entries[step]);
  // })
  
  


  const number_of_tickets = (e) => {
    e.preventDefault();
    setQty(purchase)

    for (let formData = 0; formData < (purchase - 1); formData++) {
      setEntries([...entries, defaultFormData])
    }
  }

  console.log('Watching ticket form', watch())
  console.log('Entries database', entries[step - 1])

  const totalFares = entries.reduce((acc, current) => {
    return acc + current.fare
  }, 0)
  
  const initializePayment = usePaystackPayment({

    reference : (Math.random().toString(36).slice(-10)).toUpperCase(),
    currency: 'GHS',
    email: data?.user.email,
    amount: totalFares * 100,
    publicKey: 'pk_test_990efee3f71a1bbe44dced41031d573c8be68217'
  })

  const onSuccess = ({ reference, transaction }) => {
    makeRequest({
      method: 'post',
      url: '/ticket',
      payload: {
        reference, transaction, entries
      }
    })
  }

  const onClose = (ref) => {
    console.log('Closed transaction reference', ref)
  }

  const book_bus = () => initializePayment(onSuccess, onClose)

  return (
    <Layout>
      <div className="contained">
        <div className="my-10 grid lg:grid-cols-8 gap-5">
          <div className="lg:col-span-2 bg-teal-300 hidden lg:block">
            <label className="text-xl font-semibold py-5 block text-center rounded">Advertising space</label>
          </div>

          <div className="lg:col-span-6 grid gap-7">
            <BusCard data={info} />

            <TicketQuantityComponent 
              preview={preview} 
              tickets={number_of_tickets} 
              handlePurchase={handlePurchase} 
              purchase={purchase} 
              qty={qty}
            />
            
            <FormProvider {...methods}>
              <form
                onSubmit={handleSubmit(submit)}
                className="grid lg:grid-cols-3 gap-5"
              >
      
                <div className="bg-white shadow-sm p-5 rounded col-span-3 grid lg:grid-cols-3 gap-5">
                  <div className="w-full col-span-3 flex items-center">
                    <label className="font-semibold text-lg block grow">Buyer details (Ticket { step }/{qty ?? 1})</label>

                    

                    {
                      qty > 1 && entries.length >= 1 ? (
                        <Btn 
                          content="Previous ticket"
                          className="bg-slate-500 hover:bg-slate-600 mr-3"
                          disabled={step === 1}
                          click={handlePrevious}
                        />
                      ) : null
                    }

                    {
                      entries.length !== step ? (
                        <FormBtn 
                          content="Next ticket"
                          className="bg-primary"
                          disabled={!isValid || !isDirty}
                        />
                      ) : (
                        <>
                          {
                            !preview ? (
                              <>
                                {/* <Btn 
                                  content="Change destination"
                                  className="bg-emerald-400 hover:bg-emerald-500 mr-3"
                                /> */}

                                <FormBtn 
                                  content="Preview ticket(s)"
                                  className="bg-emerald-500"
                                  disabled={!isValid || !isDirty}
                                />
                              </>
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
                      <>
                        {
                          entries.map((ticket, index) => <PreviewTickets key={index.toString()} ticket={ticket} />)
                        }
                      </>
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