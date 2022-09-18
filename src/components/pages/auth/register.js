import { Btn } from 'components/widgets/btn'
import Input from 'components/widgets/input'
import PasswordInput from 'components/widgets/password_input'
import PhoneNumberInput from 'components/widgets/phone_number_input'
import RadioOptions from 'components/widgets/radio'
import { show_auth_modal } from 'hooks/redux/modal_reducer'
import { useDispatch } from 'react-redux'
import Login from './login'

export default function Register() {
  const dispatch = useDispatch()

  

  return (
    <div className="w-10/12 mx-auto grid grid-cols-2 gap-3">
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
        className="w-full h-14 rounded-[5px]"
      />

      <div className="w-full col-span-2">
        <RadioOptions
          name="gender"
          options={[
            {label: 'Male', value: 'male'},
            {label: 'Female', value: 'female'},
          ]}
        />
      </div>
      
      <PasswordInput 
        name="password"
        label="Password"
      />
      
      <PasswordInput 
        name="password_confirmation"
        label="Re-type password"
      />

      <p className="text-sm flex items-center col-span-2 mb-4">Already have an account? 
        <Btn 
          content="Login here" 
          className="text-primary hover:bg-transparent ml-1 p-0.5 px-3" 
          click={
            () => dispatch(
              show_auth_modal({
                url: 'login',
                title: 'Login',
                content: Login,
                values: {
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
