import utilStyles from '../../styles/utils.module.scss';

const Intro = () => (
  <section className={utilStyles.textCenter}>
    <p className={utilStyles.headingMd}>
      dev pela{' '}
      <a href="https://www.linkedin.com/company/lambda3" target="_blank">
        @lambda3;
      </a>{' '}
      21 anos; goiânia/go;
    </p>
    <p className={utilStyles.headingSm}>
      atualmente estou aberto somente pra vagas fora do brasil
    </p>
  </section>
);

export default Intro;
