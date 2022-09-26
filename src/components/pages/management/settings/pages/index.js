import React from "react";
import * as Icons from "@iconscout/react-unicons";
import ListItems from "components/widgets/list_item";
import { useRouter } from "next/router";
import { nav } from "../widgets";

export default function AgencyBasics() {
  const { replace } = useRouter();
  const goto = (url) => replace(url);

  return <>
    <label className="block font-bold grow text-xl p-5 pt-0">Edit profile</label>
    <ListItems options={nav(goto, navList)} />;
  </> 
}

const navList = [
  {
    title: "Buses",
    label: "Manage agency buses",
    icon: Icons.UilBus,
    url: "/management/settings/buses",
  },
  {
    title: "Bus terminals",
    label: "Manage agency terminals accross the country",
    icon: Icons.UilCodeBranch,
    url: "/management/settings/terminals",
  },
  {
    title: "Schedules",
    label: "Management agency bus routes and schedules",
    icon: Icons.UilSchedule,
    url: "/management/settings/schedules",
  },
  {
    title: "Routes",
    label: "Management agency bus routes and schedules",
    icon: Icons.UilSignAlt,
    url: "/management/settings/routes",
  },
];
