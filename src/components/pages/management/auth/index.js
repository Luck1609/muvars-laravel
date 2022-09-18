import { useEffect } from 'react';
import { useFormContext } from 'react-hook-form'
import Input from 'components/widgets/input'
import PasswordInput from 'components/widgets/password_input'
import LinkItem from 'components/widgets/link'

const defaultFormValues = {email: '', password: ''}


export default function LoginComponent() {
  const { reset } = useFormContext()


  useEffect(() => {
    reset(defaultFormValues)
  }, [reset]);

  return (
    <div className="grid gap-7">
      <label className="text-3xl font-bold py-5">Login</label>

      <div className="">
        <Input
          name="email"
          label="Enter your email address"
          className="w-full text-slate-400"
        />
      </div>

      <PasswordInput name="password" label="Enter password" className="w-full" />

      <div className="w-full mb-5 flex justify-between flex-col md:flex-row">
        <p className="mb-2 font-medium flex items-center">
          <input type="checkbox" name="" className="mr-2" /> Keep me logged in
        </p>

        <LinkItem 
          url="/forgot-password"
          className="text-blue-400 font-semibold mb-2 block ml-5"
        >Forgot password</LinkItem>
      </div>
    </div>
  )
}


