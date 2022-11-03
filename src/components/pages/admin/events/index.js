import { MTableToolbar } from "@material-table/core";
import useSWR from "swr";
import * as Icon from "@iconscout/react-unicons";
import { Btn } from "components/widgets/btn";
import { show_modal, show_notice, step_modal } from "hooks/redux/modal_reducer";
import { useDispatch } from "react-redux";
import MTableComponent from "components/widgets/mtable";
import { event_verifier_validation } from "components/validations";
import { useState } from "react";
import EventUsersTable from "./event_users_table";
import VerifiersTable from "./verifiers_table";
import VerifierForm from "./verifier_form";
import CustomMenu from "components/widgets/menu_item";
import PickupPointsTable from "./event_pickup";



  export const event_form_handler = (data) => {
    const { flyer, ...payload } = data;
    const form_data = new FormData;

    console.log('Form data', flyer)
// 
    for (const [key, value] of Object.entries(payload)) {
      form_data.append(key, value)
    }
    form_data.append('flyer', flyer[0]);

    return form_data
  }



export default function EventsComponent() {
  const { data } = useSWR("/management/events");
  const dispatch = useDispatch();
  const [toggler, setToggler] = useState("Users");
  const [sort, setSort] = useState(null);

  const event_handler = ({
    name,
    price,
    location,
    time,
    flyer,
    // cover_photo,
    slug,
  }) => {
    dispatch(
      step_modal({
        method: slug ? "patch" : "post",
        url: slug ? `/management/events/${slug}` : "/management/events",
        content: "event",
        title: slug ? "Edit event info" : "Create New Event",
        mutation: "/management/events",
        values: {
          name: name ?? "",
          price: price ?? "",
          location: location ?? "",
          time: time ?? "",
          flyer: flyer ?? "",
          // cover_photo: cover_photo ?? "",
        },
      })
    );
  };

  const pickup_handler = ({
    location,
    time,
    event_id,
    id,
    departure
  }) => {
    dispatch(
      show_modal({
        method: id ? "patch" : "post",
        url: id ? `/pickup/${id}` : "/pickup",
        content: "pickup",
        title: id ? "Edit pickup points" : "Create New pickup point",
        mutation: "/event",
        values: {
          event_id: event_id ?? "",
          location: location ?? "",
          time: time ?? "",
          departure: departure ?? "",
        },
      })
    );
  };

  const verifier_handler = ({ id, name, email, phone, event_id }) => {
    dispatch(
      show_modal({
        method: id ? "patch" : "post",
        url: id ? `/verifier/${id}` : "/verifier",
        content: 'verifier',
        title: id ? "Edit verifier information" : "Add new verifier",
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


  console.log('Events organised', data?.events)

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
          {
            title: "Users",
            render: ({ users }) => <>{users.length}</>,
          },
          {
            title: "Verifiers",
            render: ({ verifiers }) => <>{verifiers.length}</>,
          },
          {
            title: "Pickup points",
            render: ({ points }) => <>{points.length}</>,
          },
        ]}
        data={data?.events ?? []}
        actions={[
          {
            icon: () => <Icon.UilPen className="text-sky-500" />,
            tooltip: "Edit event",
          },
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
            render: ({ rowData: { id, users, verifiers, points } }) => {
              return (
                <div className="w-full bg-blue-100 p-5">
                  <div className="flex items-center mb-5 border-b">
                    
                    <CustomMenu
                      Component={({ click }) => (
                        <Btn
                          content={
                            toggler === "Pickup" ? "Pickup points" : toggler
                          }
                          className="bg-sky-500 hover:bg-sky-600 mr-3 capitalize"
                          click={click}
                        />
                      )}
                      options={[
                        {
                          name: ({ close }) => (
                            <div
                              className="p-1.5 px-3 cursor-pointer"
                              onClick={() => {
                                setToggler("Users");
                                close();
                              }}
                            >
                              Users
                            </div>
                          ),
                        },
                        {
                          name: ({ close }) => (
                            <div
                              className="p-1.5 px-3 cursor-pointer"
                              onClick={() => {
                                setToggler("Verifiers");
                                close();
                              }}
                            >
                              Verifiers
                            </div>
                          ),
                        },
                        {
                          name: ({ close }) => (
                            <div
                              className="p-1.5 px-3 cursor-pointer"
                              onClick={() => {
                                setToggler("Pickup");
                                close();
                              }}
                            >
                              Pickup points
                            </div>
                          ),
                        },
                      ]}
                    />
                    <label className="text-lg font-semibold grow">
                      {toggler === "Verifiers"
                        ? "Manage event verifiers"
                        : null}
                      {toggler === "Users" ? "Manage event user" : null}
                      {toggler === "Pickup"
                        ? "Manage event pickup points"
                        : null}
                    </label>

                    <CustomMenu
                      Component={({ click }) => (
                        <Btn
                          content={
                            toggler === "Pickup" ? "Pickup points" : toggler
                          }
                          className="bg-sky-500 hover:bg-sky-600 mr-3 capitalize"
                          click={click}
                        />
                      )}
                      options={[
                        {
                          name: ({ close }) => (
                            <div
                              className="p-1.5 px-3 cursor-pointer"
                              onClick={() => {
                                setToggler("Users");
                                close();
                              }}
                            >
                              Users
                            </div>
                          ),
                        },
                        {
                          name: ({ close }) => (
                            <div
                              className="p-1.5 px-3 cursor-pointer"
                              onClick={() => {
                                setToggler("Verifiers");
                                close();
                              }}
                            >
                              Verifiers
                            </div>
                          ),
                        },
                        {
                          name: ({ close }) => (
                            <div
                              className="p-1.5 px-3 cursor-pointer"
                              onClick={() => {
                                setToggler("Pickup");
                                close();
                              }}
                            >
                              Pickup points
                            </div>
                          ),
                        },
                      ]}
                    />

                    {toggler !== "Users" ? (
                      <Btn
                        content={toggler === "Verifiers" ? "Add verifier" : "Add pickup point"}
                        className="bg-emerald-500 hover:bg-emerald-600"
                        click={() => toggler === "Verifiers" ? verifier_handler({ event_id: id }) : pickup_handler({ event_id: id })}
                      />
                    ) : null}
                  </div>

                  {toggler === "Users" && (
                    <EventUsersTable users={users} event_id={id} />
                  )}

                  {toggler === "Verifiers" && (
                    <VerifiersTable verifiers={verifiers} event_id={id} />
                  )}

                  {toggler === "Pickup" && (
                    <PickupPointsTable points={points} event_id={id} />
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
