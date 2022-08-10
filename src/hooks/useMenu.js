import { Btn } from 'components/widgets/btn'
import { useState, useEffect } from 'react'
import * as Icons from '@iconscout/react-unicons'
// import { useDispatch } from 'react-redux'
import useAPIContext from './api_context'
// import { showNotice } from 'redux/types'


const Item = ({ close, notification }) => {
  // const dispatch = useDispatch();
  const {makeRequest} = useAPIContext();

  const model = notification.type.split('\\')[2];

  const action = ({id, payload}) => {
    makeRequest({
      method: 'patch',
      url: `staff/unlock/${id}`,
      mutation: 'staff',
      payload
    })
  }


  // const notice = () =>  {
  //   dispatch(
  //     showNotice({
  //       title: 'Staff Password Reset',
  //       content: <div className="leading-9">You want to reset password for  { notification.data.title } {notification.data.lastname}. 
  //       </div>,
  //       btn: <span className="flex items-center">Reset password <Icons.Plane size={18} className="ml-1" /></span>,
  //       action: () => action({
  //         id: notification.data.id, 
  //         payload: {
  //           notification_id: notification.id
  //         }
  //       })
  //     })
  //   )
  // }

  return (
    <li className="p-2 flex items-center">
      <div className="w-[70px]">
        { 
          model === 'StaffPasswordResetNotification' 
            ? (
              <div className="w-[50px] h-[50px] bg-rose-400 rounded-full flex">
                <Icons.Unlock className="m-auto text-white" />
              </div>
          ) : null
        }
        { 
          model === 'NewMeetingNotification' 
            ? (
              <div className="w-[50px] h-[50px] bg-rose-400 rounded-full flex">
                <Icons.Schedule className="m-auto text-white" />
              </div>
          ) : null
        }
      </div>

      <div className="w-full text-sm ml-3">
        { 
          model === 'StaffPasswordResetNotification' ? `${notification.data.title} ${notification.data.lastname} has requested for a password reset` : null
        }
        { 
          model === 'NewMeetingNotification' ? `A ${notification.data.panel} meeting has been scheduled on ${notification.data.date} at ${notification.data.venue}` : null
        }
      </div>

      <Btn
        content={
          <span className="flex items-center text-white m-auto">
            { 
              model === 'StaffPasswordResetNotification' ? <Icons.Unlock size={18} className="m-auto text-white" /> : null
            }
            { 
              model === 'NewMeetingNotification' ? <Icons.Schedule size={18} className="m-auto text-white" /> : null
            }
          </span>
        }
        className="bg-slate-400 hover:bg-slate-500 btn p-0 flex h-8 rounded-md w-10"
        click={() => {
          close()
          // if (model === 'StaffPasswordResetNotification') notice()
        }}
      />
    </li>
  )
}


export default function useMenu(notifications) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    if (notifications?.length > 0) {
      const notification_list = (function() {
        let processed = [];

        notifications?.forEach(notification => {
          processed = [
            ...processed, 
            {
              name: ({close}) => <Item close={close} notification={notification} />
            }
          ]
        });

        return processed
      })()

      setItems(notification_list);
    }
    
  }, [notifications]);
  

  return {items};
}


