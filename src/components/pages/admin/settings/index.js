import React from 'react'
import Sidebar from './widgets/sidebar'

export default function AdminSettingsComponent() {
  return (
    <div className="grid grid-cols-12 gap-5">
      <Sidebar />

      <div className="col-span-9 bg-red-200">Main content</div>
    </div>
  )
}
