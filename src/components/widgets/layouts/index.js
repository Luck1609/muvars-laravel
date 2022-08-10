import Nav from "./navbar";
import SideNav from "./navbar/sidenav";


export default function Layouts() {
  return (
    <div className="relative">
      <Nav />

      <main className="">
        <h1 className="text-rose-500 text-3xl font-bold">
          Welcome to <a href="https://nextjs.org">Smart Ticket</a>
        </h1>
      </main>

      <footer className="">
      </footer>
    </div>
  )
}
