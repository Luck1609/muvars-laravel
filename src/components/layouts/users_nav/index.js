import { Add } from "@mui/icons-material";
import { Btn } from "components/widgets/btn";
import { useRouter } from "next/router";
import Nav from "./nav";


export default function Layout({ children, user }) {
  const { push, pathname } = useRouter();

  const goto = () => push('/post-ad')


  return (
    <>
      <Nav user={user} />

      <main className="w-full">
        { children }


        {
          ['/post-ad'].includes(pathname) ? null : (
            <Btn 
              content={<span className="flex items-center justify-center text-2xl"><Add fontSize="large" className="mr-2" /> Post Ad</span>}
              className="btn fixed bottom-5 right-5 bg-amber-400 hover:bg-amber-500 z-50 w-56 h-20 rounded-full"
              click={goto}
            />
          )
        }
      </main>
    </>
  )
}
