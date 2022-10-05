import ImageSelection from 'components/widgets/image_selection'
import React from 'react'

export default function BusForm2() {
  return (
    <div className="w-4/5 mx-auto">
      <ImageSelection 
        name="pictures"
        label="Bus pictures"
        multiple={true}
      />
    </div>
  )
}
