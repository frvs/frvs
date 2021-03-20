import Head from 'next/head';
import Link from 'next/link';

import styles from './layout.module.scss';
import utilStyles from '../../styles/utils.module.scss';

const title = 'oi 👋 eu sou o frois ';
const name = 'Lucas Frois';

export default function Layout({
  children,
  home,
  siteTitle = "Frois' profile 📝",
  pageTitle,
}) {
  return (
    <div className={styles.container}>
      <Head>
        <title>{siteTitle}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Site pessoal de Lucas Frois feito com Next.js."
        />
      </Head>
      <header className={styles.header}>
        {home && (
          <>
            <h1 className={utilStyles.heading2Xl}>{title}</h1>
            <img
              src="/images/profile.jpg"
              className={`${utilStyles.borderCircle} ${styles.icon}`}
              alt={name}
            ></img>
          </>
        )}
        {!home && (
          <>
            <h2 className={utilStyles.headingLg}>
              <Link href="/">
                <a className={utilStyles.colorInherit}>{title}</a>
              </Link>
            </h2>
            <div className={styles.backToHome}>
              <Link href="/">
                <a>← Início</a>
              </Link>
            </div>
            <h2 className={utilStyles.headingMd}>{pageTitle}</h2>
          </>
        )}
        {!home && <></>}
      </header>
      <main>{children}</main>
    </div>
  );
}
