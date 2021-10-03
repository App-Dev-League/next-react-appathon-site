import '../styles/globals.css'
import 'normalize.css'
import 'reactjs-popup/dist/index.css';
import Head from 'next/head'
import Router from "next/router";
import Navbar from '../components/navbar'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>EconHacks</title>
      </Head>
      <div>
        <Navbar/>
        <Component {...pageProps} />
      </div>
    </>
  )
}

export default MyApp
