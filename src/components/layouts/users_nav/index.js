import Nav from "./nav";


export default function Layout({ children, user }) {
  return (
    <>
      <Nav user={user} />

      <main className="w-full max-w-7xl m-auto">
        { children }
      </main>
    </>
  )
}
