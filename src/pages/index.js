import HomepageComponent from "components/pages/landing";

export default function Home(props) {
  // console.log('Server-side props', props)

  return <HomepageComponent />;
}

// export async function getServerSideProps(context) {
//   const user = await http.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/user-data`);

//   console.log('User data', user)

//   return {
//     props: {
//       user: user?.data ?? null
//     }
//   }
// }
