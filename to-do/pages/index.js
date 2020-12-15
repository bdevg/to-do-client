import Head from 'next/head'
import Home from "@components/layout/Home";
export default function Index() {
  return (
    <div>
      <Head>
        <title>ToDo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Home/>
    </div>
  )
}
