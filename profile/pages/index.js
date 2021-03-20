import Layout from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';

export default function Home() {
  return (
    <Layout home>
      <section className={utilStyles.headingMd} style={{ textAlign: `center` }}>
        <p>
          atualmente dev pela{' '}
          <a href="https://www.linkedin.com/company/lambda3">@lambda3</a> e
          morando em goiânia/go :)
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <ul className={utilStyles.list}></ul>
      </section>
    </Layout>
  );
}
