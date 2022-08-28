import React from 'react'
import OverviewCards from './overview_cards'
import RevenueStats from './revenue_stats'
import RevenueStatsDoughnut from './revenue_stats_pie'
import TicketStats from './ticket_stats'

export default function DashboardComponent() {
  return (
    <div className="mb-10">
      <OverviewCards />

      <div className="grid grid-cols-2 gap-8">
        <TicketStats />

        <RevenueStats />

        <RevenueStatsDoughnut />
      </div>
    </div>
  )
}
