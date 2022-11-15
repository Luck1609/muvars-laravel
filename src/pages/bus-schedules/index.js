import Layout from 'components/layouts/users_nav'
import BusScheduleComponent from 'components/pages/bus_schedule'
import HttpReq from 'helpers/axios'
// import { beautifyUrl } from 'helpers/index'
// import { useRouter } from 'next/router'
// import useSWR from 'swr'

export default function BusSchedules({ pageProps: { buses = [] } }) {
  // const { query: {destination, origin, date} } = useRouter()
  // const buses = useSWR(`/search-routes?origin=${origin}&destination=${destination}&date=${date}`)

  console.log('Component buses', buses)

  return (
  
    <Layout
    >
      <div className="contained">
        <div className="my-10 grid lg:grid-cols-8 gap-5">

          <div className="lg:col-span-2 px-3 lg:px-0 w-full">
            <div className="bg-white shadow-sm">
              <h4 className="text-lg font-semibold">Filter</h4>
            </div>
          </div>

          <div className="col-span-6">
            {
              buses?.length < 1 ? (
                <div className="w-full flex items-center justify-center h-96">
                  <p className="text-xl font-medium">No buses are available for the current route</p>
                </div>
              ) : (
                <BusScheduleComponent buses={buses} />
              )
            }
          </div>
        </div>
      </div>
    </Layout>
  )
}

const http = new HttpReq();

export async function getServerSideProps({ query: {origin, destination, date} }) {
  const {buses}  = await http.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/search-routes?origin=${origin}&destination=${destination}&date=${date}`)

  console.log('Server-side query', buses)

  return {
    props: {
      buses
    }
  }
}