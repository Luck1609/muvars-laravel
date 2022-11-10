import HomepageComponent from "components/pages/landing";
// import HttpReq from "helpers/axios";
import { show_auth_modal } from "hooks/redux/modal_reducer";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

export default function Home() {
  const { asPath, push, replace } = useRouter()
  const dispatch = useDispatch()


  useEffect(() => {
    const url = asPath.split('?')
    
    if (url[1] === 'unauthenticated') {
      dispatch(
        show_auth_modal({
          title: "Login",
          content: 'login',
          values: {
            email: "",
            password: "",
          },
          width: "w-[350px]",
        })
      )
    }
  }, [asPath, dispatch])
  
  return <HomepageComponent />;
}

// const http = new HttpReq();

// export async function getServerSideProps() {
//   const session = await http.get('/user-data')

//   console.log('Server-side session', session)
//   return {
//     props: {
//       // session
      
//     }
//   }
// }
