import { Btn } from 'components/widgets/btn'
import Input from 'components/widgets/input'
import PasswordInput from 'components/widgets/password_input'
import { show_modal } from 'hooks/redux/modal_reducer'
import { useDispatch } from 'react-redux'
import Register from './register'

export default function Login() {
  const dispatch = useDispatch()

  return (
    <div className="w-4/5 mx-auto grid gap-5">
      <Input 
        name="email"
        label="Email address"
        className="w-full"
      />
      
      <PasswordInput 
        name="password"
        label="Password"
      />

      <p className="text-sm flex items-center">Dont&apos;t have an account? 
        <Btn 
          content="Register here" 
          className="text-primary hover:bg-transparent ml-1 p-0.5 px-3" 
          click={
            () => dispatch(
              show_modal({
                method: 'post',
                url: 'register',
                mutation: 'user-data',
                title: 'Register',
                content: Register,
                values: {
                  firstname: '',
                  lastname: '',
                  phone: '',
                  email: '',
                  password: '',
                },
                validation: '',
                width: 'w-[500px]'
              })
            )
          }
        />
      </p>
    </div>
  )
}
