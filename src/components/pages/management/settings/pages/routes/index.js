import { MTableToolbar } from "@material-table/core";
import { useSelector } from "react-redux";
import * as Icon from "@iconscout/react-unicons";
import MTableComponent from "components/widgets/mtable";
import { Btn } from "components/widgets/btn";
import { show_modal } from "hooks/redux/modal_reducer";
import { useDispatch } from "react-redux";
import RouteForm from "./route_form";
import { route_validation } from "components/validations";
import useSWR from "swr";

export default function RoutesComponent() {
  const { data } = useSWR('/management/route');
  const dispatch = useDispatch();
  // const { modal } = useSelector((state) => state.ModalReducer);

  const route_handler = ({
    id,
    region,
    town,
  }) => {
    dispatch(
      show_modal({
        method: id ? "patch" : "post",
        url: id ? `/management/route/${id}` : "/management/route",
        content: 'route',
        title: id ? "Edit route information" : "Create new route",
        mutation: "/management/route",
        values: {
          region: region ?? "",
          town: town ?? "",
        },
        width: 'w-[400px]'
      })
    );
  };

  return (
    <div className="contained table-paper">
      <MTableComponent
        title=""
        options={{ draggable: false }}
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
        data={data?.routes ?? []}
        actions={[
          {
            icon: '',
            tooltip: ''
          }
        ]}
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
                  click={route_handler}
                />
              </div>
            </>
          ),

          Action: ({data}) => (
            <>
              <Btn 
                content={<Icon.UilPen />}
                className="bg-transprent hover:bg-blue-200 text-sky-500 btn p-2.5 mr-3"
                click={() => route_handler(data)}
              />
              
              <Btn 
                content={<Icon.UilTrash />}
                className="bg-transprent hover:bg-rose-200 text-red-500 btn p-2.5 mr-3"
                click={() => route_handler(data)}
              />
            </>
          ),
        }}
      />
    </div>
  );
}
