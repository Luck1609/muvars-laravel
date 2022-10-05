import Input from 'components/widgets/input'
import React from 'react'

export default function RegionForm() {
  return (
    <div className="grid gap-5">
      <Input 
        name="region"
        label="Region name"
      />

      <Input 
        name="initials"
        label="Region initials"
      />
    </div>
  )
}
