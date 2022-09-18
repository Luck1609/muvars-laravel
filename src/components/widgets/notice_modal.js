import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { Btn } from './btn'
import * as Icons from '@iconscout/react-unicons'
import { show_notice } from 'hooks/redux/modal_reducer';




export default function NoticeModal() {
  const { notice: { state, data: {content, title, btnComponent = false, btn, action} } } = useSelector(state => state.ModalReducer)
  const dispatch = useDispatch()


  if (!state) return <></>
  return (
    <div className="h-screen w-screen fixed top-0 left-0 bg-black bg-opacity-50 flex" style={{ zIndex: '999' }}>
      <div className="bg-rose-500 text-white text-center w-full relative max-w-[500px] p-8 m-auto rounded-md">
        <Btn 
          content={<Icons.UilTimes className="min-w-0" />}
          click={() => dispatch(show_notice('close'))}
          className="btn p-2 shadow-none text-slate-500 hover:shadow-none absolute right-2 top-1 hover:bg-slate-50"
        />
        
        <label className="text-2xl font-semibold flex items-center justify-center text-center mb-3 w-full"><Icons.UilExclamationCircle size={40} className="mr-2" />{ title }</label>

        <div className="text-lg ">{ content }</div>

        <div className="mt-5">
          {
            !btnComponent ? (
              <Btn
                content={ btn }
                className="btn bg-green-500 hover:bg-green-600 h-12"
                click={ () => {
                  action()
                  dispatch(show_notice('close'))
                }}
              />
            ) : btn
          }
        </div>

      </div>
    </div>
  )
};
