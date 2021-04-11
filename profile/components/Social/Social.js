import utilStyles from '../../styles/utils.module.scss';
import styles from './social.module.scss';

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
    faClassName: 'fas fa-envelope',
  },
];

const socialItem = ({ id, href, faClassName }) => {
  return (
    <li key={id} className={utilStyles.listItem}>
      <a href={href} target="_blank" className={styles.socialIconLink}>
        <i className={`${faClassName} ${styles.svgIcon}`}></i>
      </a>
    </li>
  );
};

const Social = () => {
  return (
    <section
      className={`${utilStyles.headingMd} ${utilStyles.padding1px} ${styles.socialSection}`}
    >
      <ul className={utilStyles.list}>{socialItems.map(socialItem)}</ul>
    </section>
  );
};

export default Social;
