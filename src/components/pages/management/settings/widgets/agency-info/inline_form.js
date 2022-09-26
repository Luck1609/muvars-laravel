import { yupResolver } from '@hookform/resolvers/yup';
import { FormProvider, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { useRouter } from 'next/router';
import { Btn, FormBtn } from 'components/widgets/btn';
import * as Icons from '@iconscout/react-unicons';
import useAPIContext from 'hooks/api_context';

export default function InlineForm({ data, closeForm }) {
  const {pathname} = useRouter()
  const { makeRequest } = useAPIContext();
  const method = useForm({
    mode: 'all',
    resolver: data?.title ? yupResolver(validation[data.title.toLowerCase()]) : ''
  })

  const { handleSubmit, reset, formState: {isValid, isDirty} } = method;

  const submit = (payload) => {
    makeRequest({
      method: 'patch',
      url: `${pathname === '/settings/office-profile' ? 'office' : 'staff'}/update-${data.title.toLowerCase()}`,
      mutation: 'office',
      action: closeForm,
      payload
    });
  }
  
  const Component = data?.content;
  return (
    <FormProvider {...method}>
      <form className="w-full flex items-end" onSubmit={handleSubmit(submit)}>
        <div className="pr-3 grow">
          <label className="text-gray-500 font-semibold mb-3 block">Change {data?.title}</label>
          <Component reset={reset} />
        </div>

        <Btn
          content={<span className="flex items-center"><Icons.UilTimes size={18} className="mr-2" /> Close</span>}
          className="bg-red-500 hover:bg-red-400 min-w-0 h-12 mr-4"
          click={closeForm}
        />

        <FormBtn
          disabled={!isValid || !isDirty}
          content={<span className="flex items-center">Submit <Icons.UilLocationArrow size={18} className="ml-2" /></span>}
          className="h-12 bg-green-500 shadow-green-400"
        />
      </form>
    </FormProvider>
  )
}


export const email = yup.object().shape({
  email: yup.string().required().email()
});


export const district = yup.object().shape({
  district: yup.string().required()
});


export const password = yup.object().shape({
  old_password: yup.string().required(),
  password: yup.string().required().notOneOf([yup.ref('old_password'), null], 'Passwords must not match old password'),
  password_confirmation: yup.string().required().oneOf([yup.ref('password'), null], 'Must match new password')
});

export const initials = yup.object().shape({
  initials: yup.string().required().max(10)
});


export const contact = yup.object().shape({
  contact: yup.string().required().test(
    'validate_phone_number',
    'Invalid phone number (eg: 050xxxxxxx)',
    function (value) {
      return /^(\+\d{1,2}\s?)?1?-?\.?\s?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/.test(value)
    }
  )
});


const validation = {email, district, initials, password, contact}