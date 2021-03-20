import Link from 'next/link';

import styles from './menu.module.scss';
import utilStyles from '../../styles/utils.module.scss';

const menuItems = [
  {
    id: 1,
    href: '/work',
    title: 'Experiências',
    subtitle: 'Onde eu trabalhei como desenvolvedor 📝',
  },
  {
    id: 2,
    href: '/tech',
    title: 'Stack',
    subtitle: 'Tecnologias que uso atualmente ou já usei 💻',
  },
  {
    id: 3,
    href: '/opensource',
    title: 'Open source',
    subtitle: 'Projetos de código aberto que contribui 📚',
  },
];

const menuItem = ({ id, href, title, subtitle }) => (
  <div key={id} className={styles.menuItemContainer}>
    <Link href={href}>
      <a className={utilStyles.colorInherit}>
        <h2>{title} </h2>
        <small>{subtitle}</small>
      </a>
    </Link>
  </div>
);

const Menu = () => {
  return <section>{menuItems.map(menuItem)}</section>;
};

export default Menu;
