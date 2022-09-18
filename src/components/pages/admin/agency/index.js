import { MTableToolbar } from "@material-table/core";
import { useState } from "react";
import dayjs from "dayjs";
import { useDispatch } from "react-redux";
import { FormProvider, useForm } from "react-hook-form";
import useSWR from "swr";
import * as Icon from "@iconscout/react-unicons";
import { useSelector } from "react-redux";
import { Btn, FormBtn } from "components/widgets/btn";
import { show_modal, show_notice } from "hooks/redux/modal_reducer";
import CreateAgencyForm from "./form";
import MTableComponent from "components/widgets/mtable";
import useAPIContext from "hooks/api_context";
import { useEffect } from "react";

export default function AgencyComponent() {
  const [assignUserForm, setAssignUserForm] = useState(false)
  const { data: agencies } = useSWR("agencies");
  const { makeRequest } = useAPIContext();
  const dispatch = useDispatch();
  const { modal } = useSelector((state) => state.ModalReducer);

  const add_schedule = ({
    id,
    name,
    location,
    phone,
    starting_hours,
    closing_time,
  }) => {
    dispatch(
      show_modal({
        method: id ? "patch" : "post",
        url: id ? `agencies/${id}` : "agencies",
        content: CreateAgencyForm,
        title: id ? "Edit agency information" : "Create agency",
        // validations: 'user',
        mutation: "agencies",
        values: {
          name: name ?? "",
          location: location ?? "",
          phone: phone ?? "",
          starting_hours: starting_hours ? dayjs(starting_hours).format("HH:mm:ss") : "",
          closing_time: closing_time ? dayjs(closing_time).format("HH:mm:ss") : "",
        },
      })
    );
  };

  const toggle_assign_user = () => setAssignUserForm(!assignUserForm);

  const toggle_status = ({id, status}) => {
    dispatch(
      show_notice({
        title: !status ? "Activate agency" : "Deactivate agency",
        content: (
          <p>
            Do you want to
            <span className="font-medium text-yellow-300">
              {status ? " Deactivate " : " Activate "}
            </span>
            this agency?
          </p>
        ),
        action: () => makeRequest({
          method: 'patch',
          url: `agencies/${id}`,
          payload: {status: !status},
          mutation: 'agencies'
        }),
        btn: "Yes, continue",
      })
    );
  };

  return (
    <>
      <div className="contained table-paper">
        <MTableComponent
          title=""
          columns={[
            {
              field: "name",
              title: "Name",
            },
            {
              field: "email",
              title: "Email",
            },
            {
              field: "phone",
              title: "Contact",
            },
            {
              // field: '',
              title: "Working hours",
              render: ({ starting_hours, closing_time }) => (
                <>
                  {dayjs(starting_hours).format("HH:mma")} -
                  {dayjs(closing_time).format("HH:mma")}
                </>
              ),
            },
            {
              field: "status",
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
          data={agencies?.data ?? []}
          actions={[
            {
              icon: () => <Icon.UilPen className="text-sky-500" />,
              tooltip: "Edit agency",
            }
          ]}
          components={{
            Toolbar: (props) => (
              <>
                <div className="w-full flex mb-3 items-center">
                  <h3 className="text-xl font-semibold grow ml-3">
                    Agency Management
                  </h3>

                  <MTableToolbar {...props} />
                  <Btn
                    content={
                      <span className="flex items-center justify-center">
                        <Icon.UilPlus size={18} className="mr-1" /> Create agency
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
                      <Icon.UilBan className="text-red-500" />
                    ) : (
                      <Icon.UilCheck className="text-green-500" />
                    )
                  }
                  className="btn p-2 rounded-full hover:bg-black hover:bg-opacity-20"
                  click={() => toggle_status(data)}
                />

                <Btn
                  content={<Icon.UilUser className="text-slate-500" />}
                  className="btn p-2 rounded-full hover:bg-black hover:bg-opacity-20"
                  click={toggle_assign_user}
                />
              </>
            ),
          }}
          detailPanel={[
            {
              // icon: 
              render: rowData => (
                <div className="w-full bg-blue-100 h-96">

                </div>
              )
            }
          ]}
        />
      </div>

      <AssignUser state={assignUserForm} toggler={toggle_assign_user} />
    </>
  );
}



const AssignUser = ({state, toggler}) => {
  const [user, setUser] = useState(null)
  const { makeRequest } = useAPIContext();
  const method = useForm();

  const { reset, watch, register } = method

  const submit = async (payload) => {
    const result = await makeRequest({
      method: '',
      url: '',
      payload
    });
  }

  const user_email = watch('search_user');

  useEffect(() => {
    first
  
    // return () => {
    //   second
    // }
  }, [user_email])
  

  return (
    <FormProvider {...method}>
        <div className={`fixed w-screen h-screen bg-black bg-opacity-50 flex top-0 left-0 z-50 ${state ? 'flex' : 'hidden'}`}>

          <div className={`m-auto w-full max-w-[600px]`}>

            <form className="w-full m-auto bg-white rounded-md" onSubmit={submit}>
              <header className="p-4 relative border-b px-10 mb-5">
                <h1 className="text-gray-600 text-center text-lg capitalize font-medium">Assign user</h1>
                
                <Btn 
                  content={<Icon.UilTimes className="m-0" />}
                  className="btn text-slate-500 hover:bg-slate-50 absolute right-2 top-1 shadow-none hover:shadow-none p-2"
                  click={toggler}
                />
              </header>


              <div className='h-full'>
                <input type="text" name="search_user" {...register({name: 'search_user'})} />
              </div>


              <footer className="mt-5 mb-3 border-t py-3">
                <div className="text-center">
                  <FormBtn
                    content="submit"
                    // disabled={!isDirty || !isValid}
                    className="btn bg-green-500 hover:bg-green-600 h-12 w-56"
                  />
                </div>
              </footer>
            </form>
          </div>
        </div>

      </FormProvider>
  )
}
