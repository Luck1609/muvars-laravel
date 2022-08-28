import Image from "next/image"
import React from "react"
import LinkItem from "components/widgets/link";
import { buses } from "assets/img/bus";

export default function HireBusCard({ name }) {
  return (
    <div className="w-full">
      <ul>
        <li>
          <LinkItem url="/" className="flex bg-white w-full items-center p-5 rounded-[3px] shadow-sm">
            <div className="w-24 mr-5">
              <Image src={buses.coach} alt="" className="w-10 h-8" layout="responsive" />
            </div>
            <p className="font-semibold grow">{ name }</p>

            <label className="bg-default-gold block px-3 py-1 mr-5 rounded-full text-sm">GH¢ 105 - GH¢ 250</label>
            <label className="text-sm px-3 py-1 bg-slate-100 rounded-full">Hire now!</label>
          </LinkItem>
        </li>
      </ul>
    </div>
  );
}
