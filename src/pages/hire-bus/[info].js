import React from 'react'
import Image from 'next/image'
import { Category, Email, Facebook, FlightClass, LocationOn, Phone, Twitter, WhatsApp } from '@mui/icons-material'
import Layout from 'components/layouts/users_nav'
// import BusDetailsComponent from 'components/pages/hire_bus/bus_info'
import DescriptionTabs from 'components/pages/hire_bus/widgets/description_tabs'
import ReviewForm from 'components/pages/hire_bus/widgets/review_form'
import HttpReq from 'helpers/axios'
import { buses } from 'assets/img/bus'
import dayjs from 'dayjs'

export default function BusDetails({ pageProps: { buses } }) {
  const baseUrl = process.env.NEXT_PUBLIC_BACKEND_URL;

  console.log('Page props buses', buses)

  const images = JSON.parse(buses.img)

  return (
    <Layout>
      <div className="grid grid-cols-8 gap-5 max-w-7xl m-auto mt-10">
        <div className="col-span-6 flex gap-5">
          <ul className="text-center flex flex-col gap-1 w-[150px] h-[450px]">
            {
              images.map((image, index) => {
                return (
                  <li className="relative w-full h-20 m-auto mb-3" key={index.toString()}>
                    <Image src={`${baseUrl}/${image}`} alt="" layout="fill" className="rounded" />
                  </li>
                )
              })
            }
          </ul>

          <div className="grow bg-white pb-16">
            <div className="w-full h-[450px] relative">
              <Image src={`${baseUrl}/${images[0]}`} alt="" layout="fill" />
            </div>

            <div className="w-full p-5">
              <div className="w-full">
                <div className="flex items-center">
                  <label className="text-2xl font-semibold block mb-3 grow">{ buses.title }</label>

                  <ul className="flex-row-reverse">
                    <li className="p-2 inline-flex"><Facebook fontSize="large" /></li>
                    <li className="p-2 inline-flex"><Twitter fontSize="large" /></li>
                    <li className="p-2 inline-flex"><WhatsApp fontSize="large" /></li>
                  </ul>
                </div>

                <div className="flex">
                  <span className=" flex items-center">
                    <LocationOn fontSize="small" /> 
                    <span className="text-sm font-semibold">Region:</span>
                    <span className="text-sm font-medium ml-1">{ buses.agency.region }</span>
                  </span>

                  <span className="ml-3 flex items-center">
                    <Category fontSize="small" /> 
                    <span className="text-sm font-semibold ml-1">Category:</span>
                    <span className="text-sm font-medium ml-1">{ buses.category }</span>
                  </span>

                  <span className="ml-3 flex items-center">
                    <FlightClass fontSize="small" /> 
                    <span className="text-sm font-semibold ml-1">Seat:</span>
                    <span className="text-sm font-medium ml-1">{ buses.seats }</span>
                  </span>
                </div>
              </div>
              <div className="mt-8 px-5 mb-10">
                <DescriptionTabs />
              </div>

              <div className="w-full">
                <h4 className="text-2xl font-semibold">Reveiw agent&apos;s services</h4>
                <p className="text-md py-4">Your email will not be published along with this review.</p>
                <ReviewForm />
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-2 w-full flex flex-col gap-5">
          <div className="w-full bg-white rounded p-5">
            <h4 className="text-center mb-4 text-2xl font-semibold">{ buses.agency.name }</h4>

            <div className="w-4/5 h-14 m-auto relative mb-5">
              <Image src={buses.logo} alt="agency logo" layout="fill" />
            </div>

            <ul className="w-full">
              <li className="w-full p-1">
                <a href="tel:+2330500404908" className="flex items-center w-full">
                  <Phone /> <span className="ml-1">{ buses.agency.phone ?? 'Not available' }</span>
                </a>
              </li>
              <li className="w-full p-1">
                <a href="mailto:muvers@gmail.com" className="flex items-center w-full">
                  <Email /> <span className="ml-1">{ buses.agency.email ?? 'Not available' }</span>
                </a>
              </li>
            </ul>
          </div>

          <div className="w-full bg-white rounded p-5">
            <label className="block mb-2 font-semibold">Working days/hours</label>

            {
              buses.agency.workingDays ? (
                <ul className="flex w-full flex-wrap justify-between text-xs">
                  {
                    JSON.parse(buses.agency.workingDays).map((day, index) => {
                      return (
                        <li className="inline-flex items-center justify-center w-[45px] h-[45px] bg-slate-200 rounded" key={index.toString()}>{ day }</li>
                      )
                    })
                  }
                  {/* <li className="inline-flex items-center justify-center w-[45px] h-[45px] bg-slate-200 rounded">Tues</li>
                  <li className="inline-flex items-center justify-center w-[45px] h-[45px] bg-slate-200 rounded">Wed</li>
                  <li className="inline-flex items-center justify-center w-[45px] h-[45px] bg-slate-200 rounded">Thurs</li>
                  <li className="inline-flex items-center justify-center w-[45px] h-[45px] bg-slate-200 rounded">Fri</li> */}
                </ul>
              ) : (
                <div className="w-full">Not available</div>
              )
            }

            <div className="w-full py-1 mt-3">
              <label className="font-medium text-sm">Starting time:</label>
              <span className="ml-1.5">{ buses.agency.startingTime ? dayjs(buses.agency.startingTime).format('HH:mma') : 'Not available'}</span>
            </div>

            <div className="w-full py-1">
              <label className="font-medium text-sm">Closing time:</label>
              <span className="ml-1.5">{ buses.agency.closingTime ? dayjs(buses.agency.closingTime).format('HH:mma') : 'Not available'}</span>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}


const http = new HttpReq();

export async function getServerSideProps({ query: { info } }) {
  const {buses}  = await http.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/bus-rentals/${info}`)

  console.log('Server-side query', buses)

  return {
    props: {
      buses
    }
  }
}