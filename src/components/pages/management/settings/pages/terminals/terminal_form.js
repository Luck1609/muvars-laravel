import Input from 'components/widgets/input'
import PhoneNumberInput from 'components/widgets/phone_number_input'
import React from 'react'

export default function TerminalForm() {
  return (
    <div className="grid grid-cols-2 gap-5 w-11/12 mx-auto">
      <Input 
        name="name"
        label="Terminal/ station name"
      />

      <Input 
        name="region"
        label="Region"
        options={[
          { label: 'Ahafo Region' },
          { label: 'Ashanti Region' },
          { label: 'Bono Region' },
          { label: 'Bono East Region' },
          { label: 'Central Region' },
          { label: 'Eastern Region' },
          { label: 'Greater Accra Region' },
          { label: 'North East Region' },
          { label: 'Oti Region' },
          { label: 'Northern Region' },
          { label: 'Savannah Region' },
          { label: 'Upper East Region' },
          { label: 'Upper West Region' },
          { label: 'Volta Region' },
          { label: 'Western North Region' },
          { label: 'Western Region' }
        ]}
      />

      <Input 
        name="town"
        label="Town"
      />

      <PhoneNumberInput 
        name="phone"
        label="Primary phone number"
        className="w-full h-14"
      />

      {/* <PhoneNumberInput 
        name="altPhone"
        label="Primary phone number"
        className="w-full h-14"
      /> */}

      {/* <>Add manager_id</>
      <>Add Location map here</> */}
    </div>
  )
}
