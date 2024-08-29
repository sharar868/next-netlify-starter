import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Thank You For Your Payment!" />
        <p className="description">
          "we will be in contact with you soon!"
        </p>
      </main>

      <Footer />
    </div>
  )
}
