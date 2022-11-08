import Image from 'next/image'
import { buses } from 'assets/img/bus'
import { Phone, LocationOn, Facebook, Twitter, Category, FlightClass, Email, WhatsApp } from '@mui/icons-material';
import Layout from 'components/layouts/users_nav'
import DescriptionTabs from './widgets/description_tabs'
import ReviewForm from './widgets/review_form';


export default function BusDetailsComponent() {
  return (
    <Layout>
      <div className="grid grid-cols-8 gap-5 max-w-7xl m-auto mt-10">
        <div className="col-span-6 flex gap-5">
          <ul className="text-center flex flex-col gap-1 justify-center w-[150px] h-[450px]">
            <li className="relative w-full h-20 m-auto mb-3">
              <Image src={buses.bus_1} alt="" layout="fill" className="rounded" />
            </li>
            <li className="relative w-full h-20 m-auto mb-3">
              <Image src={buses.bus_2} alt="" layout="fill" className="rounded" />
            </li>
            <li className="relative w-full h-20 m-auto mb-3">
              <Image src={buses.bus_3} alt="" layout="fill" className="rounded" />
            </li>
            <li className="relative w-full h-20 m-auto mb-3">
              <Image src={buses.bus_4} alt="" layout="fill" className="rounded" />
            </li>
            <li className="relative w-full h-20 m-auto mb-3">
              <Image src={buses.coach} alt="" layout="fill" className="rounded" />
            </li>
          </ul>

          <div className="grow bg-white pb-16">
            <div className="w-full h-[450px] relative">
              <Image src={buses.white_bus_2} alt="" layout="fill" />
            </div>

            <div className="w-full p-5">
              <div className="w-full">
                <div className="flex items-center">
                  <label className="text-2xl font-semibold block mb-3 grow">Caption for bus rental</label>

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
                    <span className="text-sm font-medium ml-1">Bono</span>
                  </span>

                  <span className="ml-3 flex items-center">
                    <Category fontSize="small" /> 
                    <span className="text-sm font-semibold ml-1">Category:</span>
                    <span className="text-sm font-medium ml-1">Micro &amp; Mini bus</span>
                  </span>

                  <span className="ml-3 flex items-center">
                    <FlightClass fontSize="small" /> 
                    <span className="text-sm font-semibold ml-1">Seat:</span>
                    <span className="text-sm font-medium ml-1">14 seater bus</span>
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
            <h4 className="text-center mb-4 text-2xl font-semibold">Agency Name</h4>

            <div className="w-4/5 h-14 m-auto relative mb-5">
              <Image src={buses.logo} alt="agency logo" layout="fill" />
            </div>

            <ul className="w-full">
              <li className="w-full p-1">
                <a href="tel:+2330500404908" className="flex items-center w-full">
                  <Phone /> <span className="ml-1">0500404908</span>
                </a>
              </li>
              <li className="w-full p-1">
                <a href="mailto:muvers@gmail.com" className="flex items-center w-full">
                  <Email /> <span className="ml-1">muvers@gmail.com</span>
                </a>
              </li>
            </ul>
          </div>

          <div className="w-full bg-white rounded p-5">
            <label className="block mb-2 font-semibold">Working days/hours</label>

            <ul className="flex w-full flex-wrap justify-between text-xs">
              <li className="inline-flex items-center justify-center w-[45px] h-[45px] bg-slate-200 rounded">Mon</li>
              <li className="inline-flex items-center justify-center w-[45px] h-[45px] bg-slate-200 rounded">Tues</li>
              <li className="inline-flex items-center justify-center w-[45px] h-[45px] bg-slate-200 rounded">Wed</li>
              <li className="inline-flex items-center justify-center w-[45px] h-[45px] bg-slate-200 rounded">Thurs</li>
              <li className="inline-flex items-center justify-center w-[45px] h-[45px] bg-slate-200 rounded">Fri</li>
            </ul>

            <div className="w-full py-1 mt-3">
              <label className="font-medium text-sm">Starting time:</label>
              <span className="">8:00am</span>
            </div>

            <div className="w-full py-1">
              <label className="font-medium text-sm">Closing time:</label>
              <span className="">8:00am</span>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
