import { MTableToolbar } from "@material-table/core";
import useSWR from "swr";
import { useSelector } from "react-redux";
import * as Icon from "@iconscout/react-unicons";
import { Btn } from "components/widgets/btn";
import { show_modal, show_notice } from "hooks/redux/modal_reducer";
import { useDispatch } from "react-redux";
import CreateusersForm from "./form";
import MTableComponent from "components/widgets/mtable";
import dayjs from "dayjs";
import useAPIContext from "hooks/api_context";

export default function AdminUsersComponent() {
  const { data: users } = useSWR("users");
  const { makeRequest } = useAPIContext();
  const dispatch = useDispatch();
  const { modal } = useSelector((state) => state.ModalReducer);

  const add_schedule = ({
    id,
    firstname,
    lastname,
    email,
    gender,
    phone,
  }) => {
    dispatch(
      show_modal({
        method: id ? "patch" : "post",
        url: id ? `users/${id}` : "users",
        content: CreateusersForm,
        title: id ? "Edit user information" : "Create user",
        // validations: 'user',
        mutation: "users",
        values: {
          firstname: firstname ?? "",
          lastname: lastname ?? "",
          phone: phone ?? "",
          email: email ?? "",
          gender: gender ?? "",
        },
      })
    );
  };

  const toggle_status = ({id, status}) => {
    dispatch(
      show_notice({
        title: !status ? "Activate users" : "Deactivate users",
        content: (
          <p>
            Do you want to
            <span className="font-medium text-yellow-300">
              {status ? " Deactivate " : " Activate "}
            </span>
            this users?
          </p>
        ),
        action: () => makeRequest({
          method: 'patch',
          url: `users/${id}`,
          payload: {status: ''},
          mutation: 'users'
        }),
        btn: "Yes, continue",
      })
    );
  };

  return (
    <div className="contained table-paper">
      <MTableComponent
        title=""
        columns={[
          {
            field: "name",
            title: "Name",
            render: ({ firstname, lastname }) => <>{ firstname } {lastname}</>
          },
          {
            field: "email",
            title: "Email",
          },
          {
            field: "phone",
            title: "Contact",
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
        data={users?.data ?? []}
        actions={[
          {
            icon: () => <Icon.UilPen className="text-sky-500" />,
            tooltip: "Edit users",
            // onClick: (e, data) => add_schedule(data)
          },
          // {
          //   icon: (e, data) => <>{console.log('Icon data', e)} Yo</>,
          //   tooltip: 'Edit users',
          //   // onClick: (e, data) => add_schedule(data)
          // }
        ]}
        components={{
          Toolbar: (props) => (
            <>
              <div className="w-full flex mb-3 items-center">
                <h3 className="text-xl font-semibold grow ml-3">
                  Users Management
                </h3>

                <MTableToolbar {...props} />
                <Btn
                  content={
                    <span className="flex items-center justify-center">
                      <Icon.UilPlus size={18} className="mr-1" /> Create users
                    </span>
                  }
                  className="bg-primary h-10"
                  click={add_schedule}
                />
              </div>
            </>
          ),
          Action: ({ data }) => (
            <>
              <Btn
                content={<Icon.UilPen className="text-sky-500" />}
                className="btn p-2 rounded-full hover:bg-black hover:bg-opacity-20"
                click={() => add_schedule(data)}
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
          DetailsPanel: (data) => (
            <>{console.log("Details panel data", data)}</>
          ),
        }}
      />
    </div>
  );
}

// const schedules = [
//   {
//     firstname: 'Nathaniel',
//     last: 'Obeng',
//     phone: '0503894555',
//     email: 'lucky@gmail.com',
//     role: 'Agent',
//     status: 1,
//   },
//   {
//     firstname: 'Larry',
//     last: 'Benson',
//     phone: '0503894555',
//     email: 'lucky@gmail.com',
//     role: 'Driver',
//     status: 1,
//   },
//   {
//     firstname: 'Jayson',
//     last: 'McLaurren',
//     phone: '0543124147',
//     email: 'lauren@gmail.com',
//     role: 'Supervisor',
//     status: 1,
//   },
// ]
