import React from "react";
import { useRouter } from "next/router";
import Layout from "components/layouts/users_nav";
import Dropdown from "components/widgets/accordion";
import Image from "next/image";
import { Add, LocationOn } from "@mui/icons-material";
import HttpReq from "helpers/axios";
import { Btn } from "components/widgets/btn";
import Link from "components/widgets/link";
// import HireBusComponent from 'components/pages/hire_bus'

export default function HireBus({ pageProps: { posts = [] } }) {
  const { push } = useRouter();
  const baseUrl = process.env.NEXT_PUBLIC_BACKEND_URL;

  const goto = () => push("/post-ad");

  return (
    <Layout>
      <div className="w-full max-w-7xl m-auto">
        <div className="grid grid-cols-8 gap-8 mt-10">
          <div className="w-full col-span-2 rounded overflow-hidden">
            <label className="py-3 text-white px-5 block font-semibold bg-sky-500">
              Categories
            </label>

            <div className="w-full flex flex-col gap-5">
              <div className="w-full bg-white  shadow-sm">
                <label className="pt-4 px-5 block font-semibold">
                  Vehicles
                </label>

                <ul className="w-full px-3">
                  <li className="p-2 hover:bg-slate-100 rounded">Cars</li>
                  <li className="p-2 hover:bg-slate-100 rounded">
                    Buses &amp; Mini buses
                  </li>
                  <li className="p-2 hover:bg-slate-100 rounded">
                    Trucks &amp; Trailers
                  </li>
                </ul>
              </div>

              <div className="w-full bg-white rounded shadow-sm">
                <Dropdown
                  options={[
                    { label: "Ahafo Region" },
                    { label: "Ashanti Region" },
                    { label: "Bono Region" },
                    { label: "Bono East Region" },
                    { label: "Central Region" },
                    { label: "Eastern Region" },
                    { label: "Greater Accra Region" },
                    { label: "North East Region" },
                    { label: "Oti Region" },
                    { label: "Northern Region" },
                    { label: "Savannah Region" },
                    { label: "Upper East Region" },
                    { label: "Upper West Region" },
                    { label: "Volta Region" },
                    { label: "Western North Region" },
                    { label: "Western Region" },
                  ]}
                />
              </div>
            </div>
          </div>

          <div className="w-full col-span-6 flex flex-col gap-5">
            <div className="col-span-4 flex items-center justify-center rounded w-full h-40 bg-sky-200">
              <label className="text-2xl font-bold">Ad space banner</label>
            </div>

            <div className="w-full col-span-4 grid grid-cols-4 gap-5 mb-10">
              {posts.length < 1 ? (
                <div className="w-full h-96 flex justify-center items-center col-span-4">
                  <div className="w-3/5 text-center">
                    <label className="text-xl font-medium block p-5">
                      No cars available
                    </label>

                    <Btn
                      content={
                        <span className="flex items-center justify-center text-xl">
                          <Add fontSize="medium" className="mr-2" /> Post Ad
                        </span>
                      }
                      className="btn bg-amber-400 hover:bg-amber-500 w-52 h-16 rounded-full"
                      click={goto}
                    />
                  </div>
                </div>
              ) : (
                posts.map((post, index) => {
                  return (
                    <Link url={`/hire-bus/${post.slug}`} key={index.toString()}>
                      <div className="w-full rounded overflow-hidden">
                        <div className="w-full h-[223px] relative">
                          <Image
                            src={`${baseUrl}/${JSON.parse(post.img)[0]}`}
                            alt=""
                            layout="fill"
                          />
                        </div>

                        <div className="w-full bg-white p-2">
                          <div className="w-full p-2">
                            <label className="text-md font-medium block py-1">
                              {post.title}
                            </label>
                            <p className="text-[13px]">{post.description}</p>
                          </div>

                          <div className="flex items-center text-xs font-semibold p-2">
                            <LocationOn fontSize="inherit" />{" "}
                            <span className="ml-1">{post.agency.region}</span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  );
                })
              )}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

const http = new HttpReq();

export async function getServerSideProps({
  query: { origin, destination, date },
}) {
  const { buses } = await http.get(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/bus-rentals`
  );

  // console.log("Server-side query", buses);

  return {
    props: {
      posts: buses,
    },
  };
}
