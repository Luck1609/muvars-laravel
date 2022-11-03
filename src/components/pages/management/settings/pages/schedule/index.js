import {MTableToolbar} from '@material-table/core'
import { useSelector } from 'react-redux'
import useSWR from "swr";
import * as Icon from '@iconscout/react-unicons'
import MTableComponent from "components/widgets/mtable";
import ApiMenu from 'components/widgets/api_menu'
import { Btn } from 'components/widgets/btn'
import { show_modal } from 'hooks/redux/modal_reducer'
import { useDispatch } from 'react-redux'
import { schedule_validation } from 'components/validations';
import ScheduleForm from './form';
import dayjs from 'dayjs';


import customParseFormat from "dayjs/plugin/customParseFormat";

dayjs.extend(customParseFormat)

export default function ScheduleComponent() {
  const { data } = useSWR('/management/schedules')
  const dispatch = useDispatch()
  const { modal  } = useSelector(state => state.ModalReducer)

  // console.log('selector state', modal)

  
  const schedule_handler = ({id, driver, bus, fare, origin, destination, departureTime, reportingTime, stops}) => {
    dispatch(show_modal({
      method: id ? 'patch' : 'post',
      url: id ? `/management/schedules/${id}` : '/management/schedules',
      content: 'schedule',
      title: id ? 'Edit schedule' : 'Create schedule',
      mutation: '/management/schedules',
      values: {
        // driver: driver ?? '',
        bus: bus ?? '',
        fare: fare ?? '',
        origin: origin ?? '',
        destination: destination ?? '',
        // status: 1,
        departureTime: departureTime ?? '',
        reportingTime: reportingTime ?? '',
      },
      // width: 'w-[600px]'
    }))
  }

  return (
    <div className="w-full mx-auto table-paper">
      {/* { (dayjs().format('HH:mm')).isValid() } */}
      { dayjs('08:55', 'HH:mm', true).isValid() ? 'Yes' : 'No' }
      <MTableComponent 
        title=""
        options={{ draggable: false }}
        selectable
        columns={[
          {
            field: 'fare',
            title: 'Fare (GHc)'
          },
          {
            field: 'bus_num',
            title: 'Bus No.'
          },
          {
            field: 'route',
            title: 'Route',
            render: ({ origin, destination }) => <span className="">{ origin } - { destination }</span>
          },
          {
            title: 'Reporting time',
            render: ({ reportingTime }) => <span className="">{ dayjs(reportingTime).format('HH:mma') }</span>
          },
          {
            title: 'Departure time',
            render: ({ departureTime }) => <span className="">{ dayjs(departureTime).format('HH:mma') }</span>

          },
          {
            field: 'status',
            id: 'status',
            title: 'Status',
            render: ({ status }) => <span className={`p-1 text-sm rounded-md ${ status ? 'bg-green-200 text-green-600' : 'bg-red-200 text-red-600'}`}>{status ? 'Active' : 'Inactive'}</span>
          },
        ]}
        data={data?.schedules ?? []}
        
        components={{
          Toolbar: (props) => (
            <>
              <div className="w-full flex mb-3 items-center">
                <div className="grow">
                  <ApiMenu 
                    options={['Pending', 'Completed']}
                    baseUrl="Pending"
                    apiUrl='tickets'
                  />
                </div>
                
                <MTableToolbar {...props} />
                <Btn 
                  content={<span className="flex items-center justify-center"><Icon.UilPlus size={18} className="mr-1" /> Add schedule</span>}
                  className="bg-primary h-10"
                  click={schedule_handler}
                />
              </div> 
            </>
          ),
          DetailsPanel: (data) => (<>{ console.log('Details panel data', data) }</>)
        }}
      />
    </div>
  )
}