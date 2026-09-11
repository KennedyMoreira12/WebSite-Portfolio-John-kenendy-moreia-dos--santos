import '../../styles/globals.css'
import Head from 'next/head'
import Header from '../../components/Header'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>John Kennedy | FullStack Developer</title>
        <meta name="description" content="Portfólio pessoal de John Kennedy Moreira dos Santos - FullStack Developer" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Header />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp