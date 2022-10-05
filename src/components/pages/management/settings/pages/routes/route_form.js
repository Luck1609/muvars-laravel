import Input from 'components/widgets/input'
import React from 'react'

export default function RouteForm() {
  return (
    <div className="w-4/5 mx-auto grid gap-5">
      <Input 
        name="region"
        label="Select region"
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
        label="Town or city name"
      />
    </div>
  )
}
