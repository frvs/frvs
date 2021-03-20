import Head from 'next/head';
import Image from 'next/image';
import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';

const title = 'oi 👋 eu sou o frois ';
const name = 'Lucas Frois';

export default function Layout({
  children,
  home,
  siteTitle = "Frois' profile 📝",
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
            <Image
              priority
              src="/images/profile.jpg"
              className={utilStyles.borderCircle}
              height={144}
              width={144}
              alt={name}
            />
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
          </>
        )}
      </header>
      <main>{children}</main>
    </div>
  );
}
