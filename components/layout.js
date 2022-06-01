import Head from 'next/head'
import styles from './layout.module.css'

export default function Layout() {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href='/favicon.ico' />
      </Head>
    </div>
  )
}

// Study more about Layouts in NextJS