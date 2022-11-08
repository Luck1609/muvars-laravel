// import { useRouter } from 'next/router'
import BookBusComponent from 'components/pages/bus_schedule/book_bus'
import HttpReq from 'helpers/axios';
import { beautifyUrl } from 'helpers/index';

export default function BusBooking({ pageProps: { info } }) {
  // const { query } = useRouter()
console.log('Booking info', info)
  return (
    <div className="">
      <BookBusComponent info={info} />
    </div>
  )
}


const http = new HttpReq();

export async function getServerSideProps({ query: {origin, destination, agency} }) {
  const { info } = await http.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/booking-info?origin=${origin}&destination=${destination}&agency=${agency}`)

  console.log('Server-side query for info booking', info)

  return {
    props: {
      info
    }
  }
}