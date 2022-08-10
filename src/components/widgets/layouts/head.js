import Head from 'next/head'

export default function head({ title, description }) {
  return (
    <Head>
      <title>{ title }</title>
      <meta name="description" content={description} />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  )
}
