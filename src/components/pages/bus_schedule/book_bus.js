import { FormProvider, useForm } from "react-hook-form";
import Layout from "components/layouts/users_nav";
import ScheduleCard from "./schedule_card";
import { useState } from "react";
import BookingFormDetails from "./widgets/booking_form_details";
import SeatComponent from "./widgets/seat_component";

export default function BookBusComponent() {
  const [bookedSeats, setBookedSeats] = useState([]);
  const [showBookingForm, setShowBookingForm] = useState(false);
  const methods = useForm();

  const { handleSubmit } = methods;

  const submit = () => {};

  const booking_form = () => setShowBookingForm(!showBookingForm);

  return (
    <Layout>
      <div className="contained">
        <div className="my-10 grid lg:grid-cols-8 gap-5">
          <div className="lg:col-span-2 bg-teal-300 hidden lg:block"></div>

          <div className="lg:col-span-6 grid gap-7">
            <ScheduleCard />

            <FormProvider {...methods}>
              <form
                onSubmit={handleSubmit(submit)}
                className="grid lg:grid-cols-3 gap-5"
              >
                {
                  showBookingForm ? (
                    <div className="w-full col-span-3 grid gap-7">
                      <h3 className="font-semibold text-2xl mt-3">
                        Booking info for 4 passenger(s)
                      </h3>

                      {bookedSeats.length > 0 ? (
                        <BookingFormDetails bookedSeats={bookedSeats} />
                      ) : null}
                    </div>
                  ) : null
                }

                <SeatComponent data={{ bookedSeats, setBookedSeats, booking_form, showBookingForm }} />
              </form>
            </FormProvider>
          </div>
        </div>
      </div>
    </Layout>
  );
}
