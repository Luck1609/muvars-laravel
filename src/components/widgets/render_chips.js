import React, { Fragment, useEffect } from 'react';
import { Chip, Switch } from '@mui/material';
import { useFormContext } from 'react-hook-form';
import { Btn } from './btn';
import { Close } from '@mui/icons-material';

export default function RenderChips({name, className, emptyClassName, setChip = true, emptyLabel}) {
  const { setValue, getValues } = useFormContext();
  
  const values = getValues(name);

// console.log('Render chip values', values, 'is array', !Array.isArray(values))
  
  useEffect(() => {
    if (!Array.isArray(values) && values) setValue(name, JSON.parse(values))
  })


  const deleteChip = (chip_name) => {
    setValue(name, values.filter(chip => chip !== chip_name))
  }

  return (
    <>
      {
        values && Array.isArray(values) ? (
          <div className={className}>
            {
              values?.length >= 1 ? values.map(
                (chip, index) => <Fragment key={index.toString()}>
                  {
                    setChip ? (
                      <Chip label={chip} variant="outlined" className="m-1 bg-slate-200 shadow-md"  size="medium" onDelete={() => deleteChip(chip)} />
                    ) : (
                      <div className="flex justify-between items-center mb-1.5 bg-white px-2 py-1 rounded-md text-sm">
                        {/* {console.log('Chip info', chip)} */}
                        
                        <div className="grow w-full
                         bg-red-300 flex justify-between items-center">
                          {
                            typeof(chip) === 'object' ? (
                              <>
                                {chip.label ?? chip}

                                <Switch defaultChecked={chip.value ?? false} disabled size="medium" />
                              </>
                            ) : (
                              <>{chip}</>
                            )
                          }

                        </div>

                        <Btn 
                          content={<Close fontSize="small" className="text-slate-500" /> }
                          className="btn bg-transparent hover:bg-transparent shadow-none hover:shadow-none p-0"
                          click={() => deleteChip(chip)}
                        />
                      </div>
                    )
                  }
                </Fragment>
              ) : <div className={`w-full p-5 flex ${emptyClassName}`}><span className="text-sm m-auto block">{ emptyLabel }</span></div>
            }
          </div>
        ) : null
      }
    </>
  )
}
