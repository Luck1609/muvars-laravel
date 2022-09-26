import { MTableToolbar } from "@material-table/core";
import { useSelector } from "react-redux";
import * as Icon from "@iconscout/react-unicons";
import MTableComponent from "components/widgets/mtable";
import ApiMenu from "components/widgets/api_menu";
import { Btn } from "components/widgets/btn";
import { show_modal } from "hooks/redux/modal_reducer";
import { useDispatch } from "react-redux";
import { schedule_validation } from "components/validations";
import BusForm from "./bus_form";

export default function BusComponent() {
  const dispatch = useDispatch();
  const { modal } = useSelector((state) => state.ModalReducer);

  console.log("selector state", modal);

  const add_bus = ({
    id,
    label,
    capacity,
    plate_no,
    color,
    seat_arrangement_style,
  }) => {
    dispatch(
      show_modal({
        method: id ? "patch" : "post",
        url: id ? `/bus/${id}` : "/bus",
        content: BusForm,
        title: id ? "Edit bus information" : "Add new bus",
        validations: "",
        mutation: "bus",
        values: {
          label: label ?? "",
          capacity: capacity ?? "",
          plate_no: plate_no ?? "",
          color: color ?? "",
          seat_arrangement_style: seat_arrangement_style ?? "",
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
        selectable
        columns={[
          {
            field: "label",
            title: "Bus label",
          },
          {
            field: "capacity",
            title: "Capacity",
          },
          {
            field: "plate_no",
            title: "Number plate",
          },
          {
            field: "color",
            title: "Color",
          },
          // {
          //   field: "status",
          //   id: "status",
          //   title: "Status",
          //   render: ({ status }) => (
          //     <span
          //       className={`p-1 text-sm rounded-md ${
          //         status
          //           ? "bg-green-200 text-green-600"
          //           : "bg-red-200 text-red-600"
          //       }`}
          //     >
          //       {status ? "Active" : "Inactive"}
          //     </span>
          //   ),
          // },
        ]}
        data={schedules}
        actions={[
          {
            icon: ''
          }
        ]}
        components={{
          Toolbar: (props) => (
            <>
              <div className="w-full flex mb-3 items-center">
                {/* <div className="grow">
                  <ApiMenu
                    options={["Pending", "Completed"]}
                    baseUrl="Pending"
                    apiUrl="tickets"
                  />
                </div> */}
                <label className="text-lg grow font-semibold">Bus Management</label>
                <MTableToolbar {...props} />
                <Btn
                  content={
                    <span className="flex items-center justify-center">
                      <Icon.UilPlus size={18} className="mr-1" /> Add bus
                    </span>
                  }
                  className="bg-primary h-10"
                  click={add_bus}
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
