import Head from 'next/head'
import Navbar from '../components/Navbar'
import Main from '../components/Main'
import Main2 from '../components/Main2'


export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Main />
      <Main2 />
    </div>
  )
}
