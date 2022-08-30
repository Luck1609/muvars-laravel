import { Btn } from 'components/widgets/btn'
import Input from 'components/widgets/input'
import PasswordInput from 'components/widgets/password_input'
import PhoneNumberInput from 'components/widgets/phone_number_input'
import { show_modal } from 'hooks/redux/modal_reducer'
import { useDispatch } from 'react-redux'
import Login from './login'

export default function Register() {
  const dispatch = useDispatch()

  return (
    <div className="w-4/5 mx-auto grid grid-cols-2 gap-5">
      <Input 
        name="firstname"
        label="Firstname"
        className="w-full"
      />
      <Input 
        name="lastname"
        label="Lastname"
        className="w-full"
      />
      <Input 
        name="email"
        label="Email address"
        className="w-full"
      />

      <PhoneNumberInput 
        name="phone"
        className="h-14 rounded-[5px]"
      />
      
      <PasswordInput 
        name="password"
        label="Password"
      />
      
      <PasswordInput 
        name="password_confirmation"
        label="Re-type password"
      />

      <p className="text-sm flex items-center col-span-2">Already have an account? 
        <Btn 
          content="Login here" 
          className="text-primary hover:bg-transparent ml-1 p-0.5 px-3" 
          click={
            () => dispatch(
              show_modal({
                method: 'post',
                url: 'login',
                mutation: 'user-data',
                title: 'Login',
                content: Login,
                values: {
                  firstname: '',
                  lastname: '',
                  phone: '',
                  email: '',
                  password: '',
                },
                validation: '',
                width: 'w-[350px]'
              })
            )
          }
        />
      </p>
    </div>
  )
}
