import { useState } from "react";
import { useDispatch } from "react-redux";
import { Btn } from "components/widgets/btn";
import Svg from "assets/img/svg";
import { show_modal } from "hooks/redux/modal_reducer";
import Login from "components/pages/auth/login";

export default function SeatComponent({
  data: { bookedSeats, setBookedSeats, booking_form, showBookingForm },
}) {
  const dispatch = useDispatch();

  let seats = [];

  for (let i = 1; i <= 44; i++) {
    seats = [...seats, { label: `Seat No: ${i}`, value: i }];
  }

  const book = (seat) => {
    if (seat) setBookedSeats(
      bookedSeats.filter(({ seat: currentSeat }) => currentSeat === seat)
        .length > 0
        ? bookedSeats.filter(({ seat: currentSeat }) => currentSeat !== seat)
        : [...bookedSeats, { seat, destination: "Sunyani" }]
    );
  };

  const clear_selection = () => {
    booking_form();
    setBookedSeats([]);
  };

  return (
    <>
      <div className="lg:col-span-2 grid grid-cols-12 gap-y-3 bg-white shadow-sm p-5 order-2 lg:order-1">
        {seats.map(({ value }, index) => {
          return (
            <div
              className="w-8 h-8 text-white cursor-pointer"
              key={index.toString()}
              onClick={() => book(value)}
            >
              {bookedSeats
                .reduce((booked, current_booking) => {
                  return (booked = [...booked, current_booking.seat]);
                }, [])
                .includes(value) ? (
                <Svg.SelectedSeat className="w-7 h-7" />
              ) : (
                <Svg.EmptySeat className="w-7 h-7" />
              )}
            </div>
          );
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
            content={showBookingForm ? "Clear selection" : "Book now"}
            className={`${
              showBookingForm
                ? "bg-danger hover:bg-danger bg-opacity-70"
                : "bg-blue-500 w-40 hover:bg-blue-600"
            } mt-2`}
            disabled={!bookedSeats.length > 0}
            click={showBookingForm ? clear_selection : bookedSeats.length > 0 ? booking_form : null}
            // click={() => dispatch(
            //     show_modal({
            //       method: "post",
            //       url: "login",
            //       mutation: "user-data",
            //       title: "Login",
            //       content: Login,
            //       values: {
            //         email: "",
            //         password: "",
            //       },
            //       validation: "",
            //       width: "w-[350px]",
            //     })
            //   )
            // }
          />
        </div>
      </div>
    </>
  );
}
