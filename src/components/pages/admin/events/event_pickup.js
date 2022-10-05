import * as Icon from '@iconscout/react-unicons'
import { Btn } from 'components/widgets/btn'
import dayjs from 'dayjs'

export default function PickupPointsTable({points}) {
  return (
    <>
      { console.log('Event pickups', points) }
      {
        points.length <= 0 ? (
          <div className="w-full flex justify-center items-center">
            <p className="">No pickup points available</p>
          </div>
        ) : (
          <table className="table-auto w-full">
            <thead>
              <tr className="p-3">
                <th>Location</th>
                <th>Time</th>
                <th>Departure</th>
                <th className="text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {
                points.map(({location, time, id, departure}, index) => {
                  return (
                    <tr key={index.toString()}>
                      <td>{ location }</td>
                      <td>{ dayjs(time).format('HH:mma') }</td>
                      <td>{ dayjs(departure).format('HH:mma') }</td>
                      <td className="text-center">
                        <div className="p-2">
                          <Btn 
                            content={<Icon.UilPen size={18} />}
                            variant="outlined"
                            className="border-sky-500 btn p-2"
                          />

                          <Btn 
                            content={<Icon.UilEye size={18} />}
                            variant="outlined"
                            className="bg-slate-500 text-white hover:bg-white border-slate-500 hover:border-slate-600 hover:text-slate-600 btn p-2 mx-3"
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
