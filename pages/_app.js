import Head from 'next/head'
import Layout from '../components/views/.layout/Layout'
import '../styles/globals.scss'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>NextJS Template</title>
        <meta name="description" content="It's my NextJS Template Project" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default MyApp
