import { useDispatch } from 'react-redux'
import useSWR from 'swr'
// import { signOut, useSession } from 'next-auth/react'
import { Btn } from 'components/widgets/btn'
import MenuItem from '@mui/material/MenuItem'
import Avatar from '@mui/material/Avatar'
// import avatar from 'assets/img/me.png'
import { useRouter } from 'next/router'
import * as Icons from '@iconscout/react-unicons'
import CustomMenu from 'components/widgets/menu_item'
import { show_auth_modal } from 'hooks/redux/modal_reducer'
import useAPIContext from 'hooks/api_context'



export default function UserTab() {
  const {data: session} = useSWR('/user-data');
  const { makeRequest } = useAPIContext();
  // const session = '';
  const { push } = useRouter()
  const dispatch = useDispatch()

  const goto = (route) =>  () => push(route);

  console.log('User session', session)
  const user = session?.user;

  const logout = () => {
    makeRequest({
      method: 'post',
      url: '/logout',
      action: () => push('/')
    })
  }

  return (
    <>
      {
        !user ? (
          <div className="flex">
            <Btn 
              content="Login"
              className="bg-rose-500 hover:bg-rose-600"
              click={goto('/login')}
              // click={() => dispatch(
              //     show_auth_modal({
              //       url: "/login",
              //       title: "Login",
              //       content: 'login',
              //       values: {
              //         email: "",
              //         password: "",
              //       },
              //       width: "w-[400px]",
              //     })
              //   )
              // }
            />
            <Btn 
              content="Register"
              className="bg-green-500 hover:bg-green-600 ml-4"
              click={goto('/register')}
              // click={() => dispatch(
              //     show_auth_modal({
              //       url: "/register",
              //       title: "Register",
              //       content: 'register',
              //       values: {
              //         firstname: "",
              //         lastname: "",
              //         email: "",
              //         phone: "",
              //         gender: "male",
              //         password: "",
              //         password_confirmation: "",
              //       },
              //       width: "w-[550px]",
              //     })
              //   )
              // }
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
                      <span className="ml-2 font-medium">{user.name ?? `${user.firstname} ${user.lastname}`}</span>
                    </div>
                  </div>
                </>}
                className="hover:shadow-none shadow-none hover:bg-slate-200"
              />
            }
            options={[
              {
                name: ({close}) => <Item
                  label="Profile settings"
                  Icon={() => <Icons.UilUser />}
                  click={() => {
                      goto('/settings/profile-settings');
                      close()
                    }
                  }
                />
              },
              {
                name: ({close}) => <Item
                  label={user.is_admin ? 'Admin Dashboard' : 'Dashboard' }
                  Icon={() => <Icons.UilApps/>}
                  click={() => {
                      goto('/management/dashboard');
                      close()
                    }
                  }
                />
              },
              {
                name: ({close}) => <Item
                  label="Logout"
                  Icon={() => <Icons.UilSignout />}
                  click={() => {
                    logout()
                    close()
                  }}
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
