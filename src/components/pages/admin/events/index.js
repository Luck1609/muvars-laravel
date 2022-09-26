import { MTableToolbar } from "@material-table/core";
import useSWR from "swr";
// import { useSelector } from "react-redux";
import * as Icon from "@iconscout/react-unicons";
import { Btn } from "components/widgets/btn";
import { show_modal, show_notice, step_modal } from "hooks/redux/modal_reducer";
import { useDispatch } from "react-redux";
import MTableComponent from "components/widgets/mtable";
// import dayjs from "dayjs";
// import useAPIContext from "hooks/api_context";
// import EventForm from "./event_form";
import {
  event_verifier_validation,
} from "components/validations";
import { useState } from "react";
import EventUsersTable from "./event_users_table";
import VerifiersTable from "./verifiers_table";
import VerifierForm from "./verifier_form";

export default function EventsComponent() {
  const { data: event } = useSWR("/event");
  const dispatch = useDispatch();
  const [toggler, setToggler] = useState(false);


  const event_handler = ({
    name,
    price,
    location,
    time,
    flyer,
    cover_photo,
    slug,
  }) => {
    dispatch(
      step_modal({
        method: slug ? "patch" : "post",
        url: slug ? `/event/${slug}` : "/event",
        content: 'event',
        title: slug ? "Edit event info" : "Create New Event",
        mutation: "/event",
        values: {
          name: name ?? "",
          price: price ?? "",
          location: location ?? "",
          time: time ?? "",
          flyer: flyer ?? "",
          cover_photo: cover_photo ?? "",
        }
      })
    );
  };

  const add_verifier = ({ id, name, email, phone, event_id }) => {
    dispatch(
      show_modal({
        method: id ? "patch" : "post",
        url: id ? `/verifier/${id}` : "/verifier",
        content: VerifierForm,
        title: id ? "Edit verifier information" : "Add new verifier",
        validations: event_verifier_validation,
        mutation: "/event",
        values: {
          name: name ?? "",
          email: email ?? "",
          phone: phone ?? "",
          event_id: event_id,
        },
      })
    );
  };

  const toggle_view = () => setToggler(!toggler);

  return (
    <div className="table-paper">
      <MTableComponent
        title=""
        columns={[
          {
            field: "name",
            title: "Event name",
          },
          {
            field: "price",
            title: "Price",
          },
          {
            field: "slug",
            title: "Unique url",
          },
        ]}
        data={event?.data ?? []}
        actions={[
          {
            icon: () => <Icon.UilPen className="text-sky-500" />,
            tooltip: "Edit event"
          }
        ]}
        components={{
          Toolbar: (props) => (
            <>
              <div className="w-full flex mb-3 items-center">
                <h3 className="text-xl font-semibold grow ml-3">
                  Event Management
                </h3>

                <MTableToolbar {...props} />
                <Btn
                  content={
                    <span className="flex items-center justify-center">
                      <Icon.UilPlus size={18} className="mr-1" /> Create event
                    </span>
                  }
                  className="bg-primary h-10"
                  click={event_handler}
                />
              </div>
            </>
          ),
          Action: ({ data }) => (
            <>
              <Btn
                content={<Icon.UilPen className="text-sky-500" />}
                className="btn p-2 rounded-full hover:bg-black hover:bg-opacity-20"
                click={() => event_handler(data)}
              />

              <Btn
                content={
                  data?.status ? (
                    <Icon.UilTimes className="text-sky-500" />
                  ) : (
                    <Icon.UilCheck className="text-green-500" />
                  )
                }
                className="btn p-2 rounded-full hover:bg-black hover:bg-opacity-20"
                click={() => toggle_status(data)}
              />
            </>
          ),
        }}
        detailPanel={[
          {
            tooltip: "",
            render: ({ rowData: { id, users, verifiers } }) => {
              return (
                <div className="w-full bg-blue-100 p-5">
                  <div className="flex items-center mb-5 border-b">
                    <label className="text-lg font-semibold grow">
                      {!toggler
                        ? "Manage event verifiers"
                        : "Manage event users"}
                    </label>

                    <Btn
                      content={`Toggle ${!toggler ? "users" : "verifiers"}`}
                      className={`${
                        !toggler
                          ? "bg-sky-500 hover:bg-sky-600"
                          : "bg-teal-500 hover:bg-teal-600"
                      } mr-3`}
                      click={toggle_view}
                    />

                    {toggler ? null : (
                      <Btn
                        content="Add verifier"
                        className="bg-emerald-500 hover:bg-emerald-600"
                        click={() => add_verifier({ event_id: id })}
                      />
                    )}
                  </div>

                  {toggler ? (
                    <EventUsersTable users={users} event_id={id} />
                  ) : (
                    <VerifiersTable verifiers={verifiers} event_id={id} />
                  )}
                </div>
              );
            },
          },
        ]}
      />
    </div>
  );
}
