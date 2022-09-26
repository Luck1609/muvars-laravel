import { MTableToolbar } from "@material-table/core";
import { useSelector } from "react-redux";
import * as Icon from "@iconscout/react-unicons";
import MTableComponent from "components/widgets/mtable";
import { Btn } from "components/widgets/btn";
import { show_modal } from "hooks/redux/modal_reducer";
import { useDispatch } from "react-redux";
import RouteForm from "./route_form";
import { route_validation } from "components/validations";

export default function RoutesComponent() {
  const dispatch = useDispatch();
  const { modal } = useSelector((state) => state.ModalReducer);

  console.log("selector state", modal);

  const add_route = ({
    id,
    region,
    town,
  }) => {
    dispatch(
      show_modal({
        method: id ? "patch" : "post",
        url: id ? `/route/${id}` : "/route",
        content: RouteForm,
        title: id ? "Edit route information" : "Create new route",
        validations: route_validation,
        mutation: "route",
        values: {
          label: region ?? "",
          capacity: town ?? "",
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
            field: "region",
            title: "Region",
          },
          {
            field: "town",
            title: "Town",
          }
        ]}
        data={schedules}
        components={{
          Toolbar: (props) => (
            <>
              <div className="w-full flex mb-3 items-center">
                <label className="text-xl font-semibold grow">Route Management</label>

                <MTableToolbar {...props} />
                <Btn
                  content={
                    <span className="flex items-center justify-center">
                      <Icon.UilPlus size={18} className="mr-1" /> Add route
                    </span>
                  }
                  className="bg-primary h-10"
                  click={add_route}
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
