import React, { useRef } from 'react';
import DatePicker from 'react-datepicker'
import dayjs from 'dayjs'
import * as UIcons from '@iconscout/react-unicons'


export default function CustomDatePicker({label, changeDate, startDate, ...misc}) {
  const input = useRef()

  

  return (
    <div>
      <div className="w-full mb-5 relative">
        <input 
          type="text" 
          ref={input}
          placeholder={label} 
          className="border-b p-3 w-full outline-none" 
          value={dayjs(startDate).format('DD MMM, YYYY')} 
          readOnly
        />
        <UIcons.UilTimes 
          className="absolute top-3.5 right-3.5 text-default" 
          onClick={() => changeDate(new Date())}
        />
      </div>
      <DatePicker
        onChange={(date) => changeDate(date)}
        inline
        {...misc}
      />
    </div>
  );
}
