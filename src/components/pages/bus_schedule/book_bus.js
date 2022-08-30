import { FormProvider, useForm } from "react-hook-form"
import { useDispatch } from "react-redux"
import Layout from "components/widgets/layouts/users_nav"
import Svg from "assets/img/svg"
import ScheduleCard from "./schedule_card"
import { Btn } from "components/widgets/btn"
import { show_modal } from "hooks/redux/modal_reducer"
import Login from "../auth/login"


export default function BookBusComponent() {
  const dispatch = useDispatch()
  const methods = useForm()

  const { handleSubmit } = methods

  const submit = () => {}

  let seats = [];

  for (let i = 1; i <= 44; i++) {
    seats = [...seats, { label: `Seat No: ${i}`, value: i }]
  }

  return (
    <Layout>
      <div className="contained">
        <div className="my-10 grid lg:grid-cols-8 gap-5">

          <div className="lg:col-span-2 bg-teal-300 hidden lg:block"></div>


          <div className="lg:col-span-6 grid gap-7">
            <ScheduleCard />
          </div>

          
          <FormProvider {...methods}>
            <form
              onSubmit={handleSubmit(submit)}
              className="grid lg:grid-cols-3 gap-5"
            >
              <div className="lg:col-span-2 grid grid-cols-12 gap-y-3 bg-white shadow-sm p-5 order-2 lg:order-1">
                {seats.map(({ value }, index) => {
                  return (
                    <div className="w-8 h-8 text-white" key={index.toString()}>
                      <Svg.EmptySeat className="w-7 h-7" />
                    </div>
                  )
                })}
              </div>

              <div className="bg-white flex flex-col justify-centerp p-4 rounded-sm shadow-sm order-1 lg:order-2">
                <div className="flex gap-5 justify-center">
                  <p className="flex flex-col">
                    <Svg.EmptySeatV className="h-14 mb-2" />
                    <label className="">Available</label>
                  </p>
                  <p className="flex flex-col">
                    <Svg.OccupiedSeatV className="h-14 mb-2" />
                    <label className="">Booked</label>
                  </p>
                  <p className="flex flex-col">
                    <Svg.SelectedSeatV className="h-14 mb-2" />
                    <label className="">Selected</label>
                  </p>
                </div>

                <div className="text-center mt-3">
                  <Btn
                    content="Book now"
                    className="bg-blue-500 w-40 hover:bg-blue-600 mt-2"
                    // click={() => push('/bus-schedules/vip-bus')}
                    click={() =>
                      dispatch(
                        show_modal({
                          method: 'post',
                          url: 'login',
                          mutation: 'user-data',
                          title: 'Login',
                          content: Login,
                          values: {
                            email: '',
                            password: '',
                          },
                          validation: '',
                          width: 'w-[350px]'
                        })
                      )
                    }
                  />
                </div>
              </div>
            </form>
          </FormProvider>
        </div>
      </div>
    </Layout>
  )
}



