import React from "react";
import Layout from "components/widgets/layouts/users_nav";
import Hero from "./hero";
import HireBusCard from "./hire_bus_card";

export default function HireBusComponent() {
  return (
    <Layout>
      <div className="w-full bg-[#007bff]">
        <Hero />
      </div>

      <div className="contained">

        <h3 className="text-2xl font-semibold mt-12 mb-5">
          Available 40 - 50 Seater Buses
        </h3>
        <div className="grid gap-5">
          <HireBusCard name="VIP" />
          <HireBusCard name="OA Travel and tour" />
          <HireBusCard name="S. O. Frimpong Transport" />
          <HireBusCard name="Intercity STC" />
          <HireBusCard name="VVIP" />
        </div>
      </div>
    </Layout>
  );
}
