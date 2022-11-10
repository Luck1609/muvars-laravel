import React, { useRef } from 'react';
import { useFormContext } from 'react-hook-form';
// import * as UIcons from '@iconscout/react-unicons';
import { Btn } from './btn';
import Image from 'next/image';
import { Avatar } from '@mui/material';
import { Add, Close, Photo } from '@mui/icons-material';

export default function SingleImageSelection({name, label, multiple = null, ...props}) {
  const {register, watch, setValue} = useFormContext();
  const btnRef = useRef();


  const media = watch(name);

  const removeImage = (img) => setValue(name, Object.values(media).filter(image => image.name !== img.name))

  const addImg = ({target:{files: img}}) => setValue(name, [...Object.values(media), img[0]])

  // console.log('Post update media', media)
                      { console.log('To be uploaded img', media) }

  return (
    <>
      {
        multiple ? (
          <>
            {
              (media && (media?.length > 0 || Object.values(media).length > 0)) 
                && <RenderImage
                  images={ media }
                  remove={removeImage}
                />
            }
          </>
        ) : (
          <></>
        )
      }

      <div className={`flex items-center ${props.flexDirection}`}>
        {
          media && multiple && (media?.length > 0 || Object.values(media).length > 0)
            ? (
                <>
                  <input
                    type="file"
                    name="add_img"
                    hidden
                    ref={btnRef}
                    onChange={addImg}
                  />

                  <Btn
                    content={<span className="flex items-center"><Add size={18} className="mr-1" /> Add image</span>}
                    className="btn rounded-full bg-blue-500 hover:bg-blue-500 h-10 mt-3"
                    click={() => btnRef.current.click()}
                  />
                </>
              ) : (
                <>
                  {
                    media ? (
                      <div className="relative w-44 h-20">
                        {
                          !media[0]?.size ? (
                            <Avatar size={80} className="m-auto h-16 w-16" />
                          ) : (
                            <>
                              {/* Uploaded image */}
                              <Image src={URL.createObjectURL(media[0])} alt={props.alt_text} layout="fill" className="rounded inline-block mr-2" />
                            </>
                          )
                        }
                      </div>
                    ) : (
                      <Photo size={90} className="mr-3" />
                    )
                  }

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
              )
        }
      </div>
    </>
  )
}


const RenderImage = ({images, remove}) => {
  return (
    <div className="grid grid-cols-4 gap-8 col-span-2">
      {
        Object.entries(images).map(([key, img], index) => {
          return (
            <div className="relative" key={key}>
              <Close
                className="absolute p-1 bg-red-400 text-white rounded-full z-10 -right-1 -top-2 cursor-pointer"
                onClick={() => remove(img)}
              />
              {console.log('Current image', img)}

              <div className="w-60 relative">
                {
                  !img?.size && !img?.type ?(
                    <Image src={`localhost:8000/${img}`} alt="" height={70} width={100} />
                  ) : (
                    <Image src={URL.createObjectURL(img)} alt="" height={70} width={100} />
                  )
                }
              </div>
            </div>
          )
        })
      }
    </div>
  )
}