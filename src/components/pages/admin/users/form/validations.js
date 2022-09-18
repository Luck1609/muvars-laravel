import * as yup from 'yup'


export const schedule_validation = yup.object().shape({
  name: yup.string().required(),
  location: yup.string().required(),
  phone: yup.string().required(),
  starting_hours: yup.string().required(),
  closing_time: yup.string().required()
})  