import React, {useState} from 'react'
import {UilSchedule, UilTimes} from '@iconscout/react-unicons'
import { useFormContext } from 'react-hook-form'
import { MenuItem } from '@mui/material'
import dayjs from 'dayjs'
import CustomDatePicker from 'components/widgets/custom_date_picker'
import Btn from 'components/widgets/btn'

export default function DateRange({name, className}) {
  const [openState, setCloseState] = useState(false)

  const openRange = () => setCloseState(!openState) 

  const {setValue} = useFormContext()

  const preSelectedDate = async (unit) => {
    const end_date = dayjs().format('YYYY-MM-DD')
    const start_date = unit !== 'day' ? unit !== 'day' ? dayjs().subtract(1, unit).format('YYYY-MM-DD') : 'all' : dayjs().format('YYYY-MM-DD')

    setValue('date_range', [start_date, end_date])
    openRange()
  }

  return (
    <div className={`${className}`}> 
      <Btn
        className="w-full md:w-auto h-12 md:h-9 md:-mt-4 text-left bg-input hover:bg-default rounded-md"
        content={
          () => <div className="w-full flex items-center justify-between text-body-text md:px-3">
            <span className="">Today</span>
            <UilSchedule size={20} className="ml-2" />
          </div>
        }
        click={openRange}
      />
      
      {
        openState && <div className="fixed top-0 left-0 z-30 w-full h-full bg-black bg-opacity-50 flex">
          <div className="relative m-auto">
            <Btn
              className="w-8 h-8 absolute -right-4 -top-8 md:-right-8 z-30 bg-transparent hover:bg-transparent p-0"
              content={
                () => <UilTimes className="text-white" size={30} />
              }
              click={openRange}
            />
           
            <div className="bg-white p-3 md:p-5 py-3 w-[320px] md:w-full md:max-w-[820px] rounded-md m-auto md:h-auto overflow-y-scroll md:overflow-y-hidden md:flex md:flex-row relative">
              <ul className="border-none w-full overflow-hidden whitespace-nowrap h-14 md:h-auto">
                <MenuItem 
                  className="inline-block md:block p-2 m-1 border border-grey-500 md:border-none rounded-md"
                  onClick={() => preSelectedDate('day')}
                >
                  Today
                </MenuItem>

                <MenuItem 
                  className="inline-block md:block p-2 m-1 border-grey-500 md:border-none rounded-md"
                  onClick={() => preSelectedDate('week')}
                >
                  Days
                </MenuItem>

                <MenuItem 
                  className="inline-block md:block p-2 m-1 border-grey-500 md:border-none rounded-md"
                  onClick={() => preSelectedDate('month')}
                >
                  Month
                </MenuItem>
              </ul>

              <div className="md:border-l relative flex flex-col md:flex-row w-full">
                <CustomDatePicker name={name} />
              </div>
            </div>
          </div>
        </div>
      }
    </div>
  )
}