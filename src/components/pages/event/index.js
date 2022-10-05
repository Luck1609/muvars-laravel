import { useEffect } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import Layout from "components/layouts/users_nav";
import { event_user_validation } from "components/validations";
// import Helper from "helpers/index";
import { useRouter } from "next/router";
import EventUserForm from "./event_user_form";
import SearchUser from "./search_user";
// import useAPIContext from "hooks/api_context";


export default function EventComponent({ event, children }) {
  const router = useRouter();

  // console.log('Event router info', router)

  return (
    <Layout>
      <div
        className={`bg-event-wallpaper bg-cover w-full lg:h-screen relative after:bg-black after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-opacity-25 flex justify-center items-center flex-col`}
      >
        <EventUserForm event={event} />
        {/* <SearchUser /> */}
      </div>
    </Layout>
  );
}


// const switcher() => {

// }
