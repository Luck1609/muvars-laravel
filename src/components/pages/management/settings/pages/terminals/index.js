import { MTableToolbar } from "@material-table/core";
// import { useSelector } from "react-redux";
import * as Icon from "@iconscout/react-unicons";
import MTableComponent from "components/widgets/mtable";
// import ApiMenu from "components/widgets/api_menu";
import { Btn } from "components/widgets/btn";
import useSWR from "swr";
import { show_modal } from "hooks/redux/modal_reducer";
import { useDispatch } from "react-redux";
// import { schedule_validation } from "components/validations";
// import TerminalForm from "./terminal_form";

export default function TerminalComponent() {
  const { data } = useSWR('/management/terminals')
  const dispatch = useDispatch();
  // const { modal } = useSelector((state) => state.ModalReducer);

  // console.log("selector state", modal);

  const add_terminal = ({
    id,
    name,
    phone,
    // altPhone,
    region,
    town,
    // lat,
    // lng,
    // manager_id,
  }) => {
    dispatch(
      show_modal({
        method: id ? "patch" : "post",
        url: id ? `/management/terminals/${id}` : "/management/terminals",
        content: 'terminal',
        title: id ? "Edit terminal information" : "Create new terminal",
        validations: "",
        mutation: "/management/terminals",
        values: {
          name: name ?? "",
          phone: phone ?? "",
          // altPhone: altPhone ?? "",
          region: region ?? "",
          town: town ?? "",
          // lat: lat ?? "",
          // lng: lng ?? "",
          // managerId: manager_id ?? "",
        },
        // width: 'w-[600px]'
      })
    );
  };

  return (
    <div className="contained table-paper">
      <MTableComponent
        title=""
        options={{ draggable: false }}
        // selectable
        columns={[
          {
            field: "name",
            title: "Branch name",
          },
          {
            field: "phone",
            title: "Phone",
          },
          {
            field: "location_region",
            title: "Region",
          },
          {
            field: "location_town",
            title: "Town",
          },
          {
            field: "bus_num",
            title: "Bus No.",
          },
          {
            field: "manager",
            title: "Manager_name",
            render: ({ manager }) => (
              <span className="">
                { manager ? `${manager.firstname} ${manager.lastname}` : '' }
              </span>
            ),
          },
          {
            field: "status",
            id: "status",
            title: "Status",
            render: ({ status }) => (
              <span
                className={`p-1 text-sm rounded-md ${
                  status
                    ? "bg-green-200 text-green-600"
                    : "bg-red-200 text-red-600"
                }`}
              >
                {status ? "Active" : "Inactive"}
              </span>
            ),
          },
        ]}
        data={data?.terminal ?? []}
        components={{
          Toolbar: (props) => (
            <>
              <div className="w-full flex mb-3 items-center">
                <label className="text-xl font-semibold grow">Terminal Management</label>
                <MTableToolbar {...props} />
                <Btn
                  content={
                    <span className="flex items-center justify-center">
                      <Icon.UilPlus size={18} className="mr-1" /> Add terminal
                    </span>
                  }
                  className="bg-primary h-10"
                  click={add_terminal}
                />
              </div>
            </>
          ),
          DetailsPanel: (data) => (
            <>{console.log("Details panel data", data)}</>
          ),
        }}
      />
    </div>
  );
}

const schedules = [
  {
    driver: "Nathaniel Obeng",
    phone: "0503894555",
    fare: 105,
    origin: "Accra",
    destination: "Sunyani",
    status: 1,
    seats: 60,
    bus_num: "GA-1609-S",
    departure_time: "8:30am",
  },
  {
    driver: "Larry Benson",
    phone: "0503894555",
    fare: 105,
    origin: "Accra",
    destination: "Tamale",
    status: 1,
    seats: 60,
    bus_num: "GA-2709-S",
    departure_time: "6:00am",
  },
  {
    driver: "Jayson McLaurren",
    phone: "0503894555",
    fare: 105,
    origin: "Accra",
    destination: "Takoradi",
    status: 1,
    seats: 40,
    bus_num: "GA-0110-O",
    departure_time: "9:30pm",
  },
];
