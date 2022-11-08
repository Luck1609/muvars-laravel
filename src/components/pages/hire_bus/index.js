import React from "react";
import Layout from "components/layouts/users_nav";
import { LocationOn } from '@mui/icons-material/';
// import Hero from "./hero";
// import HireBusCard from "./hire_bus_card";
import Image from "next/image";
import { buses } from "assets/img/bus";
import Dropdown from "components/widgets/accordion";

export default function HireBusComponent() {
  return (
    <Layout>
      {/* <div className="w-full bg-[#007bff]">
        <Hero />
      </div> */}

      <div className="w-full max-w-7xl m-auto">

        {/* <h3 className="text-2xl font-semibold mt-12 mb-5">
          Available 40 - 50 Seater Buses
        </h3>
        <div className="grid gap-5">
          <HireBusCard name="VIP" />
          <HireBusCard name="OA Travel and tour" />
          <HireBusCard name="S. O. Frimpong Transport" />
          <HireBusCard name="Intercity STC" />
          <HireBusCard name="VVIP" />
        </div> */}

        <div className="grid grid-cols-8 gap-8 mt-10">
          <div className="w-full col-span-2 rounded overflow-hidden">
            <label className="py-3 text-white px-5 block font-semibold bg-sky-500">Categories</label>

            <div className="w-full grid gap-5">
              <div className="w-full bg-white  shadow-sm">
                <label className="pt-4 px-5 block font-semibold">Vehicles</label>

                <ul className="w-full px-3">
                  <li className="p-2 hover:bg-slate-100 rounded">Cars</li>
                  <li className="p-2 hover:bg-slate-100 rounded">Buses &amp; Mini buses</li>
                  <li className="p-2 hover:bg-slate-100 rounded">Trucks &amp; Trailers</li>
                </ul>
              </div>

              <div className="w-full bg-white rounded shadow-sm">
                {/* <label className="pt-4 px-5 block font-semibold">Location</label> */}

                <Dropdown 
                  options={[
                    { label: 'Ahafo Region' },
                    { label: 'Ashanti Region' },
                    { label: 'Bono Region' },
                    { label: 'Bono East Region' },
                    { label: 'Central Region' },
                    { label: 'Eastern Region' },
                    { label: 'Greater Accra Region' },
                    { label: 'North East Region' },
                    { label: 'Oti Region' },
                    { label: 'Northern Region' },
                    { label: 'Savannah Region' },
                    { label: 'Upper East Region' },
                    { label: 'Upper West Region' },
                    { label: 'Volta Region' },
                    { label: 'Western North Region' },
                    { label: 'Western Region' }
                  ]}
                />
                {/* <ul className="w-full px-3">
                  <li className="p-2 hover:bg-slate-100 rounded">Cars</li>
                  <li className="p-2 hover:bg-slate-100 rounded">Buses &amp; Mini buses</li>
                  <li className="p-2 hover:bg-slate-100 rounded">Trucks &amp; Trailers</li>
                </ul> */}
              </div>
            </div>
          </div>

          

          <div className="w-full col-span-6 grid grid-cols-4 gap-5">
            <div className="col-span-4 flex items-center justify-center rounded w-full h-40 bg-sky-200">
              <label className="text-2xl font-bold">
                Ad space banner
              </label>
            </div>

            <div className="col-span-4 gap-5 grid grid-cols-4 max-h-[725px]">
              <div className="w-full rounded overflow-hidden bg-white max-h-[270px]">
                <div className="w-full h-36 relative">
                  <Image 
                    src={buses.bus_1}
                    alt=""
                    layout="fill"
                  />
                </div>

                <div className="w-full p-2">
                  <label className="text-lg font-medium block py-1">Caption for bus hiring</label>
                  <p className="text-[13px]">Item description goes here</p>
                </div>

                <div className="flex items-center text-xs font-semibold p-2">
                  <LocationOn fontSize="inherit" /> <span className="ml-1">Bono Region</span>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
