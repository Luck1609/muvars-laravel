import MaterialTable, {MTableToolbar} from '@material-table/core'
import { useSelector } from 'react-redux'
import * as Icon from '@iconscout/react-unicons'
import { Btn } from 'components/widgets/btn'
import { show_modal } from 'hooks/redux/modal_reducer'
import { useDispatch } from 'react-redux'

export default function UsersComponent() {
  const dispatch = useDispatch()
  const { modal  } = useSelector(state => state.ModalReducer)

  console.log('selector state', modal)

  
  const add_schedule = () => {
    dispatch(show_modal({
      method: 'post',
      url: 'users',
      content: 'add_user',
      title: 'Add new user',
      validations: 'user',
      mutation: 'users',
      values: {
        name: '',
        email: '',
        phone: '',
        role: '',
      },
    }))
  }

  return (
    <div className="contained table-paper">

      <MaterialTable 
        title=""
        options={{ draggable: false }}
        selectable
        columns={[
          {
            field: 'driver',
            title: 'Driver',
            render: ({ firstname, lastname }) => <span className="">{ firstname }  { lastname }</span>
          },
          {
            field: 'phone',
            title: 'Phone'
          },
          {
            field: 'email',
            title: 'Email address'
          },
          {
            field: 'role',
            title: 'Role'
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
                {/* <div className="grow">
                  <ApiMenu 
                    options={['Pending', 'Completed']}
                    baseUrl="Pending"
                    apiUrl='tickets'
                  />
                </div> */}
                <h3 className="text-xl font-semibold grow ml-3">User Management</h3>

                
                <MTableToolbar {...props} />
                <Btn 
                  content={<span className="flex items-center justify-center"><Icon.UilPlus size={18} className="mr-1" /> Add new user</span>}
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
    firstname: 'Nathaniel',
    last: 'Obeng',
    phone: '0503894555',
    email: 'lucky@gmail.com',
    role: 'Agent',
    status: 1,
  },
  {
    firstname: 'Larry',
    last: 'Benson',
    phone: '0503894555',
    email: 'lucky@gmail.com',
    role: 'Driver',
    status: 1,
  },
  {
    firstname: 'Jayson',
    last: 'McLaurren',
    phone: '0543124147',
    email: 'lauren@gmail.com',
    role: 'Supervisor',
    status: 1,
  },
]