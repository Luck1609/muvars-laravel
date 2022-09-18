import Nav from "./admin/navbar";


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
