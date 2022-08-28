import { useDispatch } from 'react-redux'
import MaterialTable, {MTableToolbar} from '@material-table/core'
import ApiMenu from 'components/widgets/api_menu'
import { Btn } from 'components/widgets/btn'
import { step_modal, show_modal } from 'hooks/redux/modal_reducer'
// import { show_modal } from 'hooks/redux/types_&_actions'
// import TicketForm from './form/ticket_form'

export default function TicketsComponent() {
  const dispatch = useDispatch()

  const new_ticket = () => {
    dispatch(show_modal({
      method: 'post',
      url: 'ticket/users',
      content: 'ticket_user',
      title: 'Search user details',
      values: {
        phone: ''
      },
      action: book_ticket
    }))
  }

  const book_ticket = () => {
    dispatch(step_modal({
      method: 'post',
      url: 'tickets',
      content: 'ticket',
      title: 'Book New Ticket',
      validations: [
        'basic_info',
        'emergency_contact',
        'preview'
      ],
      mutation: 'tickets',
      values: {
        firstname: '',
        lastname: '',
        phone: '',
        emergency_contact: '',
        origin: '',
        destination: '',
        date: '',
        gender: '',
        seat: '',
      },
      // width: 'w-[600px]'
    }))
  }

    // console.log('Modal data', show_modal)
  return (
    <div className="contained table-paper">

      <MaterialTable 
        title=""
        options={{ draggable: false }}
        columns={[
          {
            field: 'name',
            id: 'name',
            title: 'Name',
            
          },
          {
            field: 'phone',
            id: 'phone',
            title: 'Phone'
          },
          {
            field: 'seat',
            id: 'seat',
            title: 'Seat No.'
          },
          {
            field: 'fare',
            id: 'fare',
            title: 'Fare (GHc)'
          },
          {
            field: 'origin',
            id: 'origin',
            title: 'From'
          },
          {
            field: 'destination',
            id: 'destination',
            title: 'To'
          },
          {
            field: 'gender',
            id: 'gender',
            title: 'Gender'
          },
          {
            field: 'emergency_contact',
            id: 'emergency_contact',
            title: 'Emergency contact'
          },
          {
            field: 'status',
            id: 'status',
            title: 'Status',
            render: ({ status }) => <span className={`p-1 text-sm rounded-md ${ status ? 'bg-green-200 text-green-600' : 'bg-red-200 text-red-600'}`}>{status ? 'Successful' : 'Failed'}</span>
          },
        ]}
        data={tickets}
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
                  content="Book Ticket"
                  className="btn bg-primary"
                  click={new_ticket}
                />
              </div> 
            </>
          )
        }}
      />
    </div>
  )
}


const tickets = [
  {
    name: 'Nathaniel Obeng',
    phone: '0503894555',
    fare: 105,
    origin: 'Accra',
    destination: 'Sunyani',
    gender: 'Male',
    emergency_contact: '0207484898',
    status: 1,
    seat: 11,
  },
  {
    name: 'Collins Adoma Asante',
    phone: '0501350908',
    fare: 105,
    origin: 'Sunyani',
    destination: 'Kumasi',
    gender: 'Male',
    emergency_contact: '0501247899',
    status: 1,
    seat: 31,
  },
  {
    name: 'Princess Asante',
    phone: '0501457874',
    fare: 105,
    origin: 'Sunyani',
    destination: 'Bolgatanga',
    gender: 'Female',
    emergency_contact: '0501247899',
    status: 0,
    seat: 14,
  },

]