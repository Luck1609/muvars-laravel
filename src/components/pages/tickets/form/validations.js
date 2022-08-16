import * as yup from 'yup'


export const basic_info_validation = yup.object().shape({
  firstname: yup.string().required(),
  lastname: yup.string().required(),
  seat: yup.number().required(),
  origin: yup.string().required(),
  destination: yup.string().required(),
  date: yup.date().required()
})  


export const emergency_contact_validation = yup.object().shape({
  contact: yup.number().required(),
  emergency_contact: yup.number().required(),
  gender: yup.number().required(),
  origin: yup.string().required(),
  destination: yup.string().required(),
  time: yup.date().required()
})  