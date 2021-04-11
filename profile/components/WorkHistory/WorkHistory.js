import Image from 'next/image';
import ClampLines from 'react-clamp-lines';
import Tag from '../Tag/Tag';
import styles from './workHistory.module.scss';

const experienceItems = [
  {
    id: 1,
    title: 'Desenvolvedor de Software @ Lambda3',
    duration: '11/2020 — presente',
    // description:
    //   '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."',
    tags: [
      'react',
      'typescript',
      'styled-components',
      'c#',
      'microservices',
      'dotnet core',
      'webapi',
      'kakfa',
      'rabbitmq',
      'docker',
      'openshift',
    ],
    image: '/images/employers/lambda.jpg',
  },
  {
    id: 2,
    title: 'Desenvolvedor de Software @ Fast Channel',
    duration: '08/2020 — 11/2020',
    // description:
    //   '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."',
    tags: [
      'c#',
      'dotnet core',
      'aspnet mvc',
      'built-in solutions',
      'vue',
      'sqlserver',
    ],
    image: '/images/employers/fastchannel.jpg',
  },
  {
    id: 3,
    title: 'Desenvolvedor de Software @ Trinus',
    duration: '02/2020 — 08/2020',
    // description:
    //   '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."',
    tags: [
      'c#',
      'dotnet core',
      'webapi',
      'efcore',
      'fluent migrator',
      'react',
      'sqlserver',
    ],
    image: '/images/employers/trinus.jpg',
  },
  {
    id: 4,
    title: 'Desenvolvedor de Software @ LG Lugar de Gente',
    duration: '01/2019 — 02/2020',
    // description:
    //   '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."',
    tags: [
      'c#',
      'aspnet mvc5',
      'nhibernate',
      'fluent validation',
      'jquery',
      'sqlserver',
      'oracle',
    ],
    image: '/images/employers/lg.png',
  },
];

const workItem = ({ id, title, duration, description, tags, image }) => {
  return (
    <div key={id} className={styles.workItemContainer}>
      <div className={styles.companyLogoContainer}>
        <Image src={image} width={50} height={50} />
      </div>
      <div className={styles.workItem}>
        <b>
          <code>{title}</code>
        </b>
        <br />
        <small>{duration}</small>
        <div className={styles.workItemDescription}>
          <ClampLines
            text={description}
            id={`clamp-${id}`}
            lines={3}
            ellipsis="..."
            moreText="Ver mais"
            lessText="Ver menos"
            innerElement="p"
          />
        </div>
        <div className={styles.tagsContainer}>
          {tags.map((t, key) => (
            <Tag title={t} key={key} />
          ))}
        </div>
      </div>
    </div>
  );
};

const WorkHistory = () => {
  return <div>{experienceItems.map(workItem)}</div>;
};
export default WorkHistory;
