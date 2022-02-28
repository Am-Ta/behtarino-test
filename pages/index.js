import Head from 'next/head'
import Link from 'next/link'
import { Fragment } from 'react'
import styles from "styles/Home.module.scss"


export default function Home() {
  return (
    <Fragment>
      <Head>
        <title>behtarino</title>
        <meta name="description" content="the interview test" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={`${styles.wrapper} d-flex justify-content-center align-items-center`}>
        <strong>
          <Link href="/products">
            List of Products
          </Link>
        </strong>
      </div>
    </Fragment >
  )
}
