import EventComponent from "components/pages/event";
import HttpReq from "helpers/axios";
import React from "react";

export default function EventBooking({pageProps}) {
  // console.log('Booking component props', pageProps)

  return <EventComponent event={pageProps.event} />;
}

const http = new HttpReq();

export async function getServerSideProps({ query: { slug } }) {
  const { data } = await http.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/mouvers/event-bus-booking/${slug}`)
  console.log('Returned event', data)
  
  return {
    props: {
      event: data[0],
    },
  };
}
