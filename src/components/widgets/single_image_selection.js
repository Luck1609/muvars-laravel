import React, { useRef } from 'react';
import { useFormContext } from 'react-hook-form';
// import * as UIcons from '@iconscout/react-unicons';
import { Btn } from './btn';
import Image from 'next/image';
import { Avatar } from '@mui/material';
import { Add, Close, Photo } from '@mui/icons-material';

export default function SingleImageSelection({name, label, ...props}) {
  const {register, watch} = useFormContext();


  const media = watch(name);

  console.log('currentv media', media)

  return (
    <>
      <div className={`flex items-center ${props.flexdirection}`}>
        <>
            <div className="relative w-44 h-20">
              {
                !media ? (
                  <Avatar size={80} className="m-auto h-16 w-16" />
                ) : (
                  <Image src={ media.length === 1 ? URL.createObjectURL(media[0]) : media } alt={props.alt_text} layout="fill" className="rounded inline-block mr-2" />
                )
              }
            </div>

          <span className="text-sm block mb-3">{label}</span>
          <label className="block w-[120px]">
            <span className="sr-only">{label}</span>
            <input
              type="file"
              {...props}
              name={name}
              className="block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-500 file:text-white hover:file:bg-blue-400"
              {...register(name)}
            />
          </label>
        </>
      </div>
    </>
  )
}
