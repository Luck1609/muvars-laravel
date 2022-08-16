import * as yup from 'yup'


export const schedule_validation = yup.object().shape({
  driver: yup.number().required(),
  bus: yup.number().required(),
  fare: yup.number().required(),
  origin: yup.string().required(),
  destination: yup.string().required(),
  time: yup.date().required()
})  