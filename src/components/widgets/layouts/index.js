import Nav from "./navbar";
import SideNav from "./navbar/sidenav";


export default function Layouts({ children }) {
  return (
    <div className="relative bg-zinc-100">
      <Nav />

      <main className="pt-10">
        { children }
      </main>

      <footer className="">
      </footer>
    </div>
  )
}
