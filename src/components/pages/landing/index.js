import Nav from 'components/widgets/layouts/users_nav'
import BusCard from './bus_card'
import JoinUs from './join_us'
import Search from './search'

export default function HomepageComponent() {
  return (
    <>
      <Nav />
      <Search />
      <BusCard />
      <JoinUs />
    </>
  )
}
