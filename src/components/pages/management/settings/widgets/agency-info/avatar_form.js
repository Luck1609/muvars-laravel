import { FormProvider, useForm } from 'react-hook-form';
import * as UIcons from '@iconscout/react-unicons';
import Image from 'next/image';
import { useState } from 'react';
import ImageSelection from 'components/widgets/image_selection';
import useAPIContext from 'hooks/api_context';
import {Btn, FormBtn} from 'components/widgets/btn';
import { buses } from 'assets/img/bus';
// import { yupResolver } from '@hookform/resolvers/yup';
// import { avatar_validation } from 'helper/yupValidations';

export default function LogoUploadForm({ office }) {
  const [showAvatarForm, setShowAvatarForm] = useState(false);
  const {makeRequest} = useAPIContext();
  const method = useForm({
    mode: 'all',
    // resolver: yupResolver(avatar_validation),
    defautlValues: {
      avatar: null
    }
  });

  const {handleSubmit, reset, formState: {isValid, isDirty}} = method;

  const submitForm = ({logo}) => {
  // console.log('Uploaded logo', logo)
    let payload = new FormData();
    payload.append('logo', logo[0]);
    
    makeRequest({
      method: 'post',
      url: `office/update-logo`,
      payload,
      mutation: 'office',
      action: toggleAvatarForm,
    })
  }

  const toggleAvatarForm = () => {
    if (showAvatarForm) reset({logo: null});
    else {
      reset({logo: office.logo ?? buses.white_bus_2})
    }
    setShowAvatarForm(!showAvatarForm)
  }


  return (
    <FormProvider {...method}>
      <form className="px-8" onSubmit={handleSubmit(submitForm)}>
        {
          showAvatarForm ? (
            <div className="flex items-center">

              <div className="flex items-center space-x-6 grow">
                <ImageSelection 
                  name="logo" 
                  label="Update agency logo"
                />
              </div>


              <div className="flex items-center">
                <Btn
                  content={<UIcons.UilTimes size={24} />}
                  className="bg-red-500 hover:bg-red-400 rounded-full btn p-3 mr-2"
                  click={toggleAvatarForm}
                />
                <FormBtn
                  disabled={!isValid || !isDirty}
                  content={<span className="flex items-center">Save</span>}
                  className="rounded-full m-auto px-10 h-12 bg-green-500 hover:bg-green-400"
                />
              </div>
            </div>
          ) : (
            <div className="flex items-center">
              <div className="grow flex items-center">
                <div className="relative">
                  <Image src={office?.logo ? `http://localhost:8000/${office.logo}` : buses.white_bus_2} alt="Office logo" width={100} height={100} className="rounded-full h-10 w-10 inline-block" />

                  <Btn
                    content={<UIcons.UilPen size={16} />}
                    className="bg-blue-500 min-w-0 p-1.5 absolute -right-2 bottom-0 rounded-full"
                    click={toggleAvatarForm}
                  />
                </div>

                <div className="">
                  <label className="font-medium block ml-3 text-xl">{office?.name}</label>

                  <label className="font-medium ml-3 text-sm flex items-center mb-1">
                    <UIcons.UilEnvelope size={20} className="mr-1" />
                    <span>{ office?.email ?? 'Office email not set' }</span>
                  </label>

                  <label className="font-medium ml-3 text-sm flex items-center">
                    <UIcons.UilPhone size={20} className="mr-1" />
                    <span>{ office?.phone ?? 'Office contacts not set' }</span>
                  </label>
                </div>
              </div>

            </div>
          )
        }
      </form>
    </FormProvider>
  )
}


// const EmptyAvatar = () => {
//   return (
//     <div className="h-[80px] w-[80px] flex rounded-full bg-slate-200 text-slate-400 border border-slate-300">
//       <UIcons.UilImage size={40} className="m-auto" />
//     </div>
//   )
// }
