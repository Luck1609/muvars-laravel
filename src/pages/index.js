import HomepageComponent from "components/pages/landing";
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
  }, [])
  

  return <HomepageComponent />;
}
