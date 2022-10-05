import { MTableToolbar } from "@material-table/core";
import { useSelector } from "react-redux";
import * as Icon from "@iconscout/react-unicons";
import MTableComponent from "components/widgets/mtable";
import ApiMenu from "components/widgets/api_menu";
import { Btn } from "components/widgets/btn";
import { show_modal, step_modal } from "hooks/redux/modal_reducer";
import { useDispatch } from "react-redux";
import { schedule_validation } from "components/validations";
import BusForm from "./bus_form";
import useSWR from "swr";

export default function BusComponent() {
  const { data: bus } = useSWR();
  const dispatch = useDispatch();
  const { modal } = useSelector((state) => state.ModalReducer);

  const bus_handler = ({
    id,
    label,
    capacity,
    plate_no,
    color,
    seat_arrangement_style,
  }) => {
    dispatch(
      step_modal({
        method: id ? "patch" : "post",
        url: id ? `/bus/${id}` : "/bus",
        content: 'bus',
        title: id ? "Edit bus information" : "Add new bus",
        mutation: "/bus",
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
        // selectable
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
        data={bus?.data ?? []}
        actions={[
          {
            icon: ''
          }
        ]}
        components={{
          Toolbar: (props) => (
            <>
              <div className="w-full flex mb-3 items-center">
                <label className="text-lg grow font-semibold">Bus Management</label>
                <MTableToolbar {...props} />
                <Btn
                  content={
                    <span className="flex items-center justify-center">
                      <Icon.UilPlus size={18} className="mr-1" /> Add bus
                    </span>
                  }
                  className="bg-primary h-10"
                  click={bus_handler}
                />
              </div>
            </>
          ),
          Action: ({data}) => (
            <>
              <Btn
                content={
                  <span className="flex items-center justify-center">
                    <Icon.UilPen size={18} className="mr-1" /> Add bus
                  </span>
                }
                className="bg-transparent hover:bg-blue-200 text-sky-500 h-10"
                click={() => bus_handler(data)}
              />
            </>
          ),
        }}
      />
    </div>
  );
}


export const submit_bus_handler = (data) => {
  const form_data = new FormData();

  const { pictures, ...payload } = data;

  pictures.forEach((value) => {
    form_data.append('pictures[]', value);
  })


  Object.entries(payload).forEach(([key, value]) => {
    form_data.append(key, value);
  });
  
  return form_data;
}