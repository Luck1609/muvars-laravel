import { useState } from "react";
import NavBar from "./navbar";
import Sidebar from "./navbar/sidebar";

export default function ProtectedAdminLayout({ children }) {
  const [open, setOpen] = useState(false)
 
  const toggle = () => setOpen(!open)

  return (
    <>
      <div className="h-20 relative z-20">
        <NavBar toggle={toggle} />
      </div>

      <main className="w-full flex py-5 overflow-y-scroll">
        <Sidebar open={open} />
        <div className="w-full">
          { children }
        </div>
      </main>
    </>
  );
}
