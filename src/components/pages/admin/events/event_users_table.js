import * as Icon from '@iconscout/react-unicons'
import { Btn } from 'components/widgets/btn'

export default function EventUsersTable({users}) {
  return (
    <>
      
      {
        users.length <= 0 ? (
          <div className="w-full flex justify-center items-center">
            <p className="">No users patronage</p>
          </div>
        ) : (
          <table className="table-auto w-full">
            <thead>
              <tr className="p-3">
                <th>Email</th>
                <th>Phone number</th>
                <th>Status</th>
                <th className="text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {
                users.map(({email, phone, id, status}, index) => {
                  return (
                    <tr key={index.toString()}>
                      <td>{ email }</td>
                      <td>{ phone }</td>
                      <td>
                        <span className={`p-1 px-3 ${status ? 'bg-green-200 text-green-500' : 'bg-red-100 text-red-500'}`}>{ status ? 'Paid' : 'Pending payment' }</span>
                      </td>
                      <td className="text-center">
                        <div className="p-2">
                          <Btn 
                            content={<Icon.UilPen size={18} />}
                            variant="outlined"
                            className="border-sky-500 btn p-2"
                          />

                          <Btn 
                            content={<Icon.UilBan size={18} />}
                            // variant="outlined"
                            className="bg-rose-500 text-white hover:bg-white hover:text-rose-500 btn p-2 mx-3"
                          />

                          <Btn 
                            content={<Icon.UilTrash size={18} />}
                            variant="outlined"
                            className="border-red-500 btn text-red-500 hover:border-red-600 hover:text-red-600 p-2"
                          />
                        </div>
                      </td>
                    </tr>
                  )
                })
              }
            </tbody>
          </table>
        )
      }
    </>
  )
}
