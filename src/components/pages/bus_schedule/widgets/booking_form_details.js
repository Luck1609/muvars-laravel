import BusBookingForm from "../form/bus_booking_form";
import DestinationModifier from "../form/destination_modifier";
import { Btn } from "components/widgets/btn";
import { useEffect, useState } from "react";

export default function BookingFormDetails({ bookedSeats }) {
  const [changeDestination, setChangeDestination] = useState([]);

  // useEffect(() => {
  //   bookedSeats
  // }, [bookedSeats]);
  

  const change_destination = (seat) =>
    changeDestination.indexOf(seat) < 0
      ? setChangeDestination([...changeDestination, seat])
      : setChangeDestination(
          changeDestination.filter((current_seat) => current_seat !== seat)
        );

  return (
    <>
      {bookedSeats.map(({ seat, destination }, index) => {
        return (
          <div className="w-full bg-white grid md:grid-cols-2 gap-5 p-8 rounded-sm border relative" key={index.toString()} >
            <label className="md:col-span-2 font-medium absolute left-5 -top-2.5 bg-slate-100 rounded-md px-3">
              Details for seat {seat}
            </label>

            <Btn
              content="Change destination"
              className="absolute right-5 -top-4 bg-primary hover:bg-primary hover:bg-opacity-70"
              click={() => change_destination(seat)}
            />

            {changeDestination.includes(seat) ? <DestinationModifier /> : null}

            <BusBookingForm />
          </div>
        )
      })}
    </>
  );
}
