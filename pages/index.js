import Head from 'next/head'
import Copy from '../components/copy'

import css from './index.scss'

import Vercel from '../svgs/vercel.svg'

const { example } = css

export default function Home() {
  return (
    <div>
      <Head>
        <title>myles.im</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className={example}>Hello World!</div>
      </main>

      <Copy />

      <Vercel />

    </div>
  )
}
