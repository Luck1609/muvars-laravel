import { Btn } from 'components/widgets/btn'
import MenuItem from '@mui/material/MenuItem'
import { useAuth } from 'hooks/auth'
import Avatar from '@mui/material/Avatar'
import avatar from 'assets/img/me.png'
import { useRouter } from 'next/router'
import * as Icons from '@iconscout/react-unicons'
import CustomMenu from 'components/widgets/menu_item'

export default function UserTab() {
  const { logout, user } = useAuth({ middleware: 'guest' })
  const { push } = useRouter()

  const goto = (route) => push(route);

  return (
    <>
      <CustomMenu
        Component={({click}) => <Btn
            click={click}
            content={<>
              <div className="flex items-center">
                <Avatar src="" alt="NO" />
                <div className="">
                  <span className="ml-2 font-medium">{user?.data ? `${user.data.firstname} ${user.data.lastname}` : 'Nathaniel Obeng'}</span>
                  <span className="ml-2 text-sm font-medium block">{user?.data.role}</span>
                </div>
              </div>
            </>}
            className="hover:shadow-none shadow-none hover:bg-slate-200 text-slate-500"
          />
        }
        options={[
          {
            name: ({close}) => <Item
              label="Proile settings"
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
              label="Logout"
              Icon={() => <Icons.UilSignout />}
              click={() => {
                  logout();
                  close();
                }
              }
            />
          }
        ]}
      />
    </>
  )
}


export const Item = ({ label, Icon, click }) => <MenuItem className="border-b border w-[230px] px-3" onClick={click}>
    <Icon size={20} />
    <label className="ml-3">{label}</label>
</MenuItem>
