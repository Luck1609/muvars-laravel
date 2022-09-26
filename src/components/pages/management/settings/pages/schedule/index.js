import {MTableToolbar} from '@material-table/core'
import { useSelector } from 'react-redux'
import * as Icon from '@iconscout/react-unicons'
import MTableComponent from "components/widgets/mtable";
import ApiMenu from 'components/widgets/api_menu'
import { Btn } from 'components/widgets/btn'
import { show_modal } from 'hooks/redux/modal_reducer'
import { useDispatch } from 'react-redux'
import { schedule_validation } from 'components/validations';
import ScheduleForm from './form';

export default function ScheduleComponent() {
  const dispatch = useDispatch()
  const { modal  } = useSelector(state => state.ModalReducer)

  console.log('selector state', modal)

  
  const add_schedule = () => {
    dispatch(show_modal({
      method: 'post',
      url: '/schedule',
      content: ScheduleForm,
      title: 'Create schedule',
      validations: schedule_validation,
      mutation: 'schedule',
      values: {
        driver: '',
        bus: '',
        phone: '',
        fare: '',
        origin: '',
        destination: '',
        status: 1,
        departure_time: '8:30am',
      },
      // width: 'w-[600px]'
    }))
  }

  return (
    <div className="w-full mx-auto table-paper">

      <MTableComponent 
        title=""
        options={{ draggable: false }}
        selectable
        columns={[
          {
            field: 'driver',
            title: 'Driver'
          },
          {
            field: 'phone',
            title: 'Phone'
          },
          {
            field: 'seats',
            title: 'No. of Seats'
          },
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
            field: 'departure_time',
            title: 'Departure time'
          },
          {
            field: 'status',
            id: 'status',
            title: 'Status',
            render: ({ status }) => <span className={`p-1 text-sm rounded-md ${ status ? 'bg-green-200 text-green-600' : 'bg-red-200 text-red-600'}`}>{status ? 'Active' : 'Inactive'}</span>
          },
        ]}
        data={schedules}
        
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
                  click={add_schedule}
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


const schedules = [
  {
    driver: 'Nathaniel Obeng',
    phone: '0503894555',
    fare: 105,
    origin: 'Accra',
    destination: 'Sunyani',
    status: 1,
    seats: 60,
    bus_num: 'GA-1609-S',
    departure_time: '8:30am',
  },
  {
    driver: 'Larry Benson',
    phone: '0503894555',
    fare: 105,
    origin: 'Accra',
    destination: 'Tamale',
    status: 1,
    seats: 60,
    bus_num: 'GA-2709-S',
    departure_time: '6:00am',
  },
  {
    driver: 'Jayson McLaurren',
    phone: '0503894555',
    fare: 105,
    origin: 'Accra',
    destination: 'Takoradi',
    status: 1,
    seats: 40,
    bus_num: 'GA-0110-O',
    departure_time: '9:30pm',
  },
]