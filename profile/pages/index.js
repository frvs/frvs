import Layout from '../components/layout';
import Link from 'next/link';

import styles from '../components/pages/index/index.module.scss';
import utilStyles from '../styles/utils.module.scss';

const socialItems = [
  {
    id: 1,
    href: 'https://twitter.com/_frvs',
    faClassName: 'fab fa-twitter',
  },
  {
    id: 2,
    href: 'https://github.com/frvs',
    faClassName: 'fab fa-github',
  },
  {
    id: 3,
    href: 'https://www.linkedin.com/in/frvs/',
    faClassName: 'fab fa-linkedin-in',
  },
  {
    id: 4,
    href: 'https://t.me/lucas_frois',
    faClassName: 'fab fa-telegram-plane',
  },
  {
    id: 5,
    href: 'mailto:frois.dev@gmail.com',
    faClassName: 'fab fa-twitter',
  },
];

const socialMediaContainer = ({ id, href, faClassName }) => {
  return (
    <div>
      <p></p>
    </div>
  );
};

export default function Home() {
  return (
    <Layout home>
      <section className={utilStyles.headingMd} style={{ textAlign: `center` }}>
        <p>
          dev pela{' '}
          <a href="https://www.linkedin.com/company/lambda3" target="_blank">
            @lambda3
          </a>
          , 21 anos e morando em goiânia/go
        </p>
      </section>
      <section
        className={`${utilStyles.headingMd} ${utilStyles.padding1px} ${styles.socialSection}`}
      >
        <ul className={utilStyles.list}>
          <li className={utilStyles.listItem}>
            <a
              href="https://twitter.com/_frvs"
              target="_blank"
              className={styles.socialIconLink}
            >
              <i className={`fab fa-twitter ${styles.svgIcon}`}></i>
            </a>
          </li>
          <li className={utilStyles.listItem}>
            <a
              href="https://github.com/frvs"
              target="_blank"
              className={styles.socialIconLink}
            >
              <i className={`fab fa-github ${styles.svgIcon}`}></i>
            </a>
          </li>
          <li className={utilStyles.listItem}>
            <a
              href="https://www.linkedin.com/in/frvs/"
              target="_blank"
              className={styles.socialIconLink}
            >
              <i className={`fab fa-linkedin-in ${styles.svgIcon}`}></i>
            </a>
          </li>
          <li className={utilStyles.listItem}>
            <a
              href="https://t.me/lucas_frois"
              target="_blank"
              className={styles.socialIconLink}
            >
              <i className={`fab fa-telegram-plane ${styles.svgIcon}`}></i>
            </a>
          </li>
          <li className={utilStyles.listItem}>
            <a
              href="mailto:frois.dev@gmail.com"
              target="_blank"
              className={styles.socialIconLink}
            >
              <i className={`far fa-envelope ${styles.svgIcon}`}></i>
            </a>
          </li>
        </ul>
      </section>
      <section>
        <div>
          <Link href="/work">
            <a className={utilStyles.colorInherit}>
              <h2>Experiência</h2>
              <small>Onde eu trabalhei como desenvolvedor.</small>
            </a>
          </Link>
        </div>
        <div>
          <Link href="/tech">
            <a className={utilStyles.colorInherit}>
              <h2>Stack técnica</h2>
              <small>Tecnologias que uso atualmente ou já usei.</small>
            </a>
          </Link>
        </div>
        <div>
          <Link href="/opensource">
            <a className={utilStyles.colorInherit}>
              <h2>Open Source</h2>
              <small>Projetos de código aberto que contribui.</small>
            </a>
          </Link>
        </div>
      </section>
    </Layout>
  );
}
