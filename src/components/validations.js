import dayjs from "dayjs";
import * as yup from "yup";
import customParseFormat from "dayjs/plugin/customParseFormat";

dayjs.extend(customParseFormat);

export const login_validation = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required(),
});

export const event1_validation = yup.object().shape({
  name: yup.string().required(),
  price: yup.number().required(),
  // time: yup.date().notRequired(),
  // location: yup.string().notRequired(),
});

export const event2_validation = yup.object().shape({
  cover_photo: yup
    .mixed()
    .notRequired()
    .test("image-type", "Image type must be (JPG or PNG)", (img) => {
      return !/jpg|jpeg|png/.test(img[0].type);
    })
    .test("image-size", "Image must not be larger than 2Mb", (img, context) => {
      return img && img[0]?.size <= 2097152;
    }),

  flyer: yup
    .mixed()
    .notRequired()
    .test("image-type", "Image type must be (JPG or PNG)", (img) => {
      return !/jpg|jpeg|png/.test(img[0].type);
    })
    .test("image-size", "Image must not be larger than 2Mb", (img) => {
      return img && img[0]?.size <= 2097152;
    }),
});

export const search_event_user_validation = yup.object().shape({
  token: yup.string().required(),
});

export const event_user_validation = yup.object().shape({
  phone: yup.string().required(),
  email: yup.string().email().required(),
  event_id: yup.number().required(),
  pickup_point_id: yup.number("Pickup location cannot be empty").required(),
});

export const event_pickup_validation = yup.object().shape({
  location: yup.string().required(),
  time: yup.string().required(),
  departure: yup.string().notRequired(),
  event_id: yup.number().required(),
});

export const event_verifier_validation = yup.object().shape({
  name: yup.string().required(),
  phone: yup.string().required(),
  email: yup.string().email().required(),
  event_id: yup.number().required(),
});

export const registration_validation = yup.object().shape({
  email: yup.string().email().required(),
  phone: yup.string().email().required(),
  firstname: yup.string().required(),
  lastname: yup.string().required(),
  password: yup.string().required(),
  password_confirmation: yup.string().required(),
});

export const schedule_validation = yup.object().shape({
  busId: yup.number().required(),
  fare: yup.string().required(),
  originId: yup.number().required(),
  destinationId: yup.number().required(),
  reportingTime: yup
    .string()
    .required()
    .test("reporting-time", "Invalid time format", (value) => {
      if (value) return dayjs(value, "HH:mm", true).isValid();
    }),
  departureTime: yup
    .string()
    .required()
    .test("departure-time", "Invalid time format", (value) => {
      if (value) return dayjs(value, "HH:mm", true).isValid();
    })
    .test("departure-time", "Departure time must be after reporting time", (value, {parent}) => {
      // console.log('Departure context', context)
      if (value) return dayjs(`2022-09-16T${value}`).isAfter(`2022-09-16T${parent.reportingTime}`);
    }),
});

export const bus_validation = yup.object().shape({
  label: yup.string().required(),
  capacity: yup.number().required(),
  plate_no: yup.string().required(),
  color: yup.string().required(),
  seat_arrangement_style: yup.number().required(),
});

export const bus_validation_2 = yup.object().shape({
  pictures: yup
    .mixed()
    .required()
    .test("img_size", "Image must not be larger than 2Mb", (img) => {
      if (img) return img[0].size <= 2048;
    })
    .test("img_type", "Image must be jpg or png", (img) => {
      if (img) return /png/.test(img[0].type);
    }),
});

export const route_validation = yup.object().shape({});

export const terminal_validation = yup.object().shape({});

export const agency_validation = yup.object().shape({
  name: yup.string().required(),
  // location: yup.string().required(),
  phone: yup.string().required(),
  starting_hours: yup.string().required(),
  closing_time: yup.string().required(),
});

export const basic_info_validation = yup.object().shape({
  firstname: yup.string().required(),
  lastname: yup.string().required(),
  seat: yup.number().required(),
  origin: yup.string().required(),
  destination: yup.string().required(),
  date: yup.date().required(),
});

export const emergency_contact_validation = yup.object().shape({
  contact: yup.number().required(),
  emergency_contact: yup.number().required(),
  gender: yup.number().required(),
  origin: yup.string().required(),
  destination: yup.string().required(),
  time: yup.date().required(),
});

export const booking_validation = yup.object().shape({
  name: yup.string().required(),
  phone: yup.string().required(),
  emergency_contact_phone: yup.string().required(),
  gender: yup.string().required().oneOf(['male', 'female']),
  origin: yup.string().required(),
  destination: yup.string().required(),
  fare: yup.number().required(),
  scheduleId: yup.number().required(),
  date: yup.date().required()
    .test('valid-date', 'Travel date must not be in the past', (date) => {
      if (date) return dayjs(date).isAfter(dayjs()) && dayjs(date).isSame(dayjs());
    }),
});
