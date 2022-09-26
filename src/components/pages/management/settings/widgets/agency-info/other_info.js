import { useState } from 'react'
import * as UIcons from '@iconscout/react-unicons'
import { Btn } from 'components/widgets/btn'
import Input from 'components/widgets/input'
import InlineForm from './inline_form'
import PhoneNumberInput from 'components/widgets/phone_number_input'

export default function OtherInfo({ office }) {
  const [editForm, setEditForm] = useState(null)

  const fields = [
    {
      name: 'agency',
      label: 'Agency name',
      form_label: 'Enter new name',
      value: office?.name,
      icon: UIcons.UilUniversity
    },
    {
      name: 'email',
      label: 'Email address',
      form_label: 'Enter new email address',
      value: office?.email,
      icon: UIcons.UilEnvelope
    },
    {
      name: 'contact',
      label: 'Primary number',
      form_label: 'Enter new number',
      value: office?.contact,
      icon: UIcons.UilPhone
    },
    {
      name: 'website',
      label: 'Website address',
      form_label: 'Enter Address',
      value: office?.initials,
      icon: UIcons.UilGlobe
    },
  ]

  const toggleForm = (name) => setEditForm(name === 'close' ? null : name)

  return (
    <div className="bg-white p-8 rounded-md shadow-custom mt-5">
      {
        fields.map(({name, label, form_label, value, icon: Icon}) => <div className="flex mb-7 items-center" key={name}>
            {
              editForm === name ? (
                <InlineForm
                  data={{
                    title: name,
                    content: () => <>
                      {
                        name === 'Contact' ? (
                          <PhoneNumberInput 
                            name={name.toLowerCase()}
                            className="w-full flex"
                            label="Enter phone number"
                          />
                        ) : (
                          <Input
                            name={name.toLocaleLowerCase()}
                            label={form_label}
                            className="w-3/4"
                          />
                        )
                      }
                    </>
                  }}
                  closeForm={() => toggleForm('close')}
                />
              ) : (
                <>
                  <div className="grow">
                    <label className="font-mediumtext text-sm flex items-center mb-1">
                      <Icon size={20} className="mr-1" />
                      <span>{label}</span>
                    </label>
                    <p className="text-slate-700 text-lg">{ value ?? 'Not available' }</p>
                  </div>

                  <Btn
                    content={<span className="flex items-center"><UIcons.UilPen size={18} className="mr-1" /> Edit</span>}
                    className="bg-sky-500 min-w-0 rounded-full px-5 h-10"
                    click={() => toggleForm(name)}
                  />
                </>
              )
            }
          </div>
        )
      }
    </div>
  )
}
