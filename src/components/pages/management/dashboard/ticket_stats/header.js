import React, {useEffect} from 'react'
import DateRange from './date_range'
import BtnSelection from './btn_selection'
import { FormProvider, useForm } from 'react-hook-form'
import dayjs from 'dayjs'
import useSWR from 'swr'


export default function Header({ dataView }) {
  const {data: branches} = useSWR('merchants/branches')
  const {data: pos} = useSWR('pos?page=1&page-size=100')
  const method = useForm({mode: 'all',})

  const {watch} = method

  let range = watch('date_range'), branch_id = watch('branch_id'), pos_id = watch('pos_id')
  
  useEffect(() => {
    switch (dataView) {
      case 'general':
        // if (range && range[0] && range[1]) {
        //   revalidate({
        //     mode: dataView, 
        //     options: {
        //       start_date: dayjs(range[0]).format('YYYY-MM-DD'),
        //       end_date: dayjs(range[1]).format('YYYY-MM-DD')
        //     }
        //   }) 
        // }
      break;

      case 'branch':
        // if (range && branch_id) {
        //   revalidate({
        //     mode: 'branch',
        //     options: {
        //       start_date: dayjs(range[0]).format('YYYY-MM-DD'),
        //       end_date: dayjs(range[1]).format('YYYY-MM-DD'),
        //       branch_id
        //     }
        //   })
        // }
      break;

      case 'pos':
        // if (range && branch_id && pos_id) {
        //   revalidate({
        //     mode: 'branch',
        //     options: {
        //       start_date: dayjs(range[0]).format('YYYY-MM-DD'),
        //       end_date: dayjs(range[1]).format('YYYY-MM-DD'),
        //       branch_id, pos_id
        //     }
        //   })
        // }
      break;
    
      default:
        break;
    }
  }, [range, branch_id, pos_id, dataView]);

  
  // const revalidate = async (payload) => {
  //   try {
  //     await apiRequest({
  //       method: 'post',
  //       url: 'dashboard/get-graph-data',
  //       payload
  //     })
  //   } catch (error) {
      
  //   }
  // }

  return (
    <FormProvider {...method}>
      <div className="w-full p-2 md:p-5 md:flex md:justify-between md:flex-row items-center">
        <div className="grow mb-4">
          <h5 className="font-medium text-placeholder mb-3">Total revenue</h5>
          <h3 className="text-2xl font-semibold">NGN 345,535.00</h3>
        </div>

        <div className="md:flex md:items-center grid grid-cols-4 gap-3">
          {
            dataView === 'pos' || dataView === 'branch' ? (
              <div className={`w-full col-span-4 ${dataView === 'branch' ? 'mr-4' : ''}`}>
                <BtnSelection name="branch_id" options={branches?.data.data} label="Select branch" />
              </div>
            ) : null
          }
          
          {
            dataView === 'pos' ? (
              <div className="w-full md:mx-4 col-span-2">
                <BtnSelection className="" name="pos_id" options={pos?.data.data} label="Select POS" />
              </div>
            ) : null
          }

          
          <DateRange name="date_range" className={`${ dataView === 'pos' ? 'col-span-2' : 'col-span-4'}`} />
        </div>
      </div>
    </FormProvider>
  )
}
