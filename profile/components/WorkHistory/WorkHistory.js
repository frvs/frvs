import { useState } from 'react';
import Image from 'next/image';
import ClampLines from 'react-clamp-lines';
import clsx from 'classnames';

import styles from './workHistory.module.scss';

const experienceItems = [
  {
    id: 1,
    title: 'Desenvolvedor de Software @ Lambda3',
    duration: '11/2020 — presente',
    description:
      '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."',
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
    image: '/images/lambda.jpg',
  },
  {
    id: 2,
    title: 'Desenvolvedor de Software @ Fast Channel',
    duration: '08/2020 — 11/2020',
    description:
      '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."',
    tags: [
      'c#',
      'dotnet core',
      'aspnet mvc',
      'built-in solutions',
      'vue',
      'sqlserver',
    ],
    image: '/images/fastchannel.jpg',
  },
  {
    id: 3,
    title: 'Desenvolvedor de Software @ Trinus',
    duration: '02/2020 — 08/2020',
    description:
      '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."',
    tags: [
      'c#',
      'dotnet core',
      'webapi',
      'efcore',
      'fluent migrator',
      'react',
      'sqlserver',
    ],
    image: '/images/trinus.jpg',
  },
  {
    id: 4,
    title: 'Desenvolvedor de Software @ LG Lugar de Gente',
    duration: '01/2019 — 02/2020',
    description:
      '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."',
    tags: [
      'c#',
      'aspnet mvc5',
      'nhibernate',
      'fluent validation',
      'jquery',
      'sqlserver',
      'oracle',
    ],
    image: '/images/lg.png',
  },
];

const tag = (title, key) => (
  <div key={key} className={styles.workItemTag}>
    {title.toLowerCase()}
  </div>
);

const workItem = ({ id, title, duration, description, tags, image }) => {
  const [expanded, setExpanded] = useState(false);

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
          {tags.map((t, key) => tag(t, key))}
        </div>
      </div>
    </div>
  );
};

const WorkHistory = () => {
  return <div>{experienceItems.map(workItem)}</div>;
};
export default WorkHistory;
