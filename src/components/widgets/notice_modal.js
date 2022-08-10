import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Btn } from './btn';
import { showNotice } from 'redux/types';
import Icons from 'pages/inc/icons';




export default function NoticeModal() {
  let dispatch = useDispatch()
  const {notice: { state, data:{title, content, btn, btnComponent = false, action} }} = useSelector(state => state.MiscReducer)


  if (!state) return <></>
  return (
    <div className="h-screen w-screen fixed top-0 left-0 bg-dark bg-opacity-50 flex" style={{ zIndex: '999' }}>
      <div className="bg-white text-slate-500 text-center w-full relative max-w-500 p-8 m-auto rounded-md">
        <Btn 
          content={<Icons.Clear className="min-w-0" />}
          click={() => dispatch(showNotice('close'))}
          className="btn p-2 shadow-none text-slate-500 hover:shadow-none absolute right-2 top-1 hover:bg-slate-50"
        />
        
        <label className="text-2xl font-semibold flex items-center justify-center text-center mb-3 w-full"><Icons.ExclamationCircle size={40} className="mr-2" />{ title }</label>

        <div className="text-lg ">{ content }</div>

        <div className="mt-5">
          {
            !btnComponent ? (
              <Btn
                content={ btn }
                className="btn bg-green-500 hover:bg-green-600 h-12"
                click={ () => {
                  action()
                  dispatch(showNotice('close'))
                }}
              />
            ) : btn
          }
        </div>

      </div>
    </div>
  )
};
