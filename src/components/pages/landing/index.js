import Layout from 'components/layouts/users_nav'
import BusCard from './bus_card'
import JoinUs from './join_us'
import Search from './search'

export default function HomepageComponent() {
  return (
    <>
      <Layout>
        <Search />
        <BusCard />
        <JoinUs />
      </Layout>
    </>
  )
}
