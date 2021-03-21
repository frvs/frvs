import styles from './repositories.module.scss';

const repositoryList = [
  {
    id: 1,
    title: 'frvs/frvs',
    description: 'Meu site pessoal feito com Next.js e publicado na Vercel.',
  },
  {
    id: 2,
    title: 'frvs/til',
    description:
      'Today I Learned: um site pessoal feito com Next.js para anotar o que eu aprendo diariamente.',
  },
  {
    id: 3,
    title: 'frvs/dotfiles',
    description:
      'Dotfiles de configuração e setup padrão para máquinas Ubuntu-based.',
  },
  {
    id: 4,
    title: 'frvs/guidelines',
    description:
      'Um guia aos conceitos básicos da programação e desenvolvimento. `must-read` para iniciantes na área de tecnologia.',
  },
  {
    id: 5,
    title: 'frvs/MinimalDDD_DotNetCore',
    description:
      'Um simples boilerplate de uma API em C# utilizando conceitos do Domain Driven Design.',
  },
];

const repositoryContainer = ({ id, title, description }) => (
  <div className={styles.repositoryContainer} key={id}>
    <a
      className={styles.repositoryLink}
      href={`https://github.com/${title}`}
      target="_blank"
    >
      {title} 🡕
    </a>
    <p className={styles.repositoryDescription}>{description}</p>
  </div>
);

const Repositories = () => <div>{repositoryList.map(repositoryContainer)}</div>;

export default Repositories;
