import { useSession, signOut } from 'next-auth/react'
import { useDispatch } from 'react-redux'
import { Btn } from 'components/widgets/btn'
import MenuItem from '@mui/material/MenuItem'
import { useAuth } from 'hooks/auth'
import Avatar from '@mui/material/Avatar'
import avatar from 'assets/img/me.png'
import { useRouter } from 'next/router'
import * as Icons from '@iconscout/react-unicons'
import CustomMenu from 'components/widgets/menu_item'
import { show_auth_modal } from 'hooks/redux/modal_reducer'
import Login from 'components/pages/auth/login'
import Register from 'components/pages/auth/register'


export default function UserTab() {
  const { data: session } = useSession()
  // const {  } = useAuth({ middleware: 'neutral' })
  const { push } = useRouter()
  const dispatch = useDispatch()

  const goto = (route) => push(route);

  // console.log('Authenticated session', session)

  return (
    <>
    
        {
          !session?.user ? (
            <div className="flex">
              <Btn 
                content="Login"
                className="bg-rose-500 hover:bg-rose-600"
                click={() => dispatch(
                    show_auth_modal({
                      url: "login",
                      title: "Login",
                      content: Login,
                      values: {
                        email: "",
                        password: "",
                      },
                      validation: "",
                      width: "w-[350px]",
                    })
                  )
                }
              />
              <Btn 
                content="Register"
                className="bg-green-500 hover:bg-green-600 ml-4"
                click={() => dispatch(
                    show_auth_modal({
                      url: "register",
                      title: "Register",
                      content: Register,
                      values: {
                        firstname: "",
                        lastname: "",
                        email: "",
                        phone: "",
                        gender: "male",
                        password: "",
                        password_confirmation: "",
                      },
                      validation: "",
                      width: "w-[550px]",
                    })
                  )
                }
              />
            </div>
          ) : (
            <CustomMenu
              Component={({click}) => <Btn
                  click={click}
                  content={<>
                    <div className="flex items-center text-slate-500">
                      <Avatar src="" alt="NO" />
                      <div className="">
                        <span className="ml-2 font-medium">{session.user.name ?? `${session.user.firstname} ${session.user.lastname}`}</span>
                        {/* <span className="ml-2 text-sm font-medium block">{user.role}</span> */}
                      </div>
                    </div>
                  </>}
                  className="hover:shadow-none shadow-none hover:bg-slate-200"
                />
              }
              options={[
                {
                  name: ({close}) => <Item
                    label="Proile settings"
                    Icon={() => <Icons.UilUser />}
                    click={() => {
                        goto('/settings/profile-settings');
                        // close()
                      }
                    }
                  />
                },
                {
                  name: ({close}) => <Item
                    label="Logout"
                    Icon={() => <Icons.UilSignout />}
                    click={signOut}
                  />
                }
              ]}
            />
          )
        }
    </>
  )
}


export const Item = ({ label, Icon, click }) => <MenuItem className="border-b border w-[230px] px-3" onClick={click}>
    <Icon size={20} />
    <label className="ml-3">{label}</label>
</MenuItem>
