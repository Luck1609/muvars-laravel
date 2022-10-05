import * as Icons from '@iconscout/react-unicons';
import CustomMenu from 'components/widgets/menu_item';
import { Btn } from 'components/widgets/btn';
import { useRouter } from 'next/router';

export default function Menu() {
  const {replace, push, asPath: pathname } = useRouter()
  const goBack = () => push(pathname.replace(`/${pathname.split('/').pop()}`, ''));

  return (
    <div className="flex p-3 items-center mb-8">
      {
        pathname === '/management/settings' ? null : (
          <Btn 
            content={<span className="flex items-center"><Icons.UilArrowLeft className="mr-1" /> Back</span>}
            className="bg-blue-500 hover:bg-blue-600 mr-4"
            click={goBack}
          />
        )
      }
      <label className="block font-bold grow text-xl">Edit profile</label>

      {
        pathname !== '/settings' ? (
          <CustomMenu
            Component={({click}) => <>
                <Btn
                  content={<Icons.UilEllipsisH />}
                  className="shadow-none text-slate-400 bg-slate-200 hover:shadow-none hover:bg-slate-300"
                  click={click}
                />

              </>
            }
            options={[
              {
                name: ({close}) => <div 
                    onClick={() => {
                      replace('/management/settings/profile-settings')
                      close()
                    }} 
                    className="p-1 px-4 flex items-center text-slate-500 cursor-pointer"
                  >
                    <Icons.UilPen size={18} className="mr-4" />
                    <span>Edit profile</span>
                  </div>
              },
              {
                name: ({close}) => <div 
                    onClick={() => {
                      replace('/management/settings/notifications')
                      close()
                    }} 
                    className="p-1 px-4 flex items-center text-slate-500 cursor-pointer"
                  >
                    <Icons.UilBell size={18} className="mr-4" />
                    <span>Notifications</span>
                  </div>
              }
            ]}
          />
        ) : null
      }
    </div>
  )
}
