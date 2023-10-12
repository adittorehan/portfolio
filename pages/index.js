import Head from "next/head";

import Heading from "../components/Heading";
import Contents from "../components/Contents";

export default function Home() {
  return (
    <>
      <Head>
        <title>Aditto Rehan</title>
      </Head>
      <main style={{ width: 1300 }}>
        <Heading />
        <Contents />
      </main>
    </>
  )
}