import Nav from "./nav";


export default function Layout({ children }) {
  return (
    <>
      <Nav />

      <main className="w-full">
        { children }
      </main>
    </>
  )
}
