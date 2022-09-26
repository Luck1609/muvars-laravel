import Nav from "./nav";


export default function Layout({ children, user }) {
  return (
    <>
      <Nav user={user} />

      <main className="w-full">
        { children }
      </main>
    </>
  )
}
