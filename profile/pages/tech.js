import Image from 'next/image';
import Tag from '../components/Tag/Tag';
import Layout from '../components/Layout/Layout';

// seções: tecnologias que eu trabalho, tecnologias que eu estudo, tecnologias que estou de olho
const styles = {};

const interestingTechnologies = [
  {
    title: 'go',
    imageSrc: '/images/technologies/golang.png',
  },
  {
    title: 'nodejs',
    imageSrc: '/images/technologies/nodejs.png',
  },
  {
    title: 'f#',
    imageSrc: '/images/technologies/fsharp.png',
  },
  {
    title: 'haskell',
    imageSrc: '/images/technologies/haskell.svg',
  },
  {
    title: 'kubernetes',
    imageSrc: '/images/technologies/kubernetes.png',
  },
  {
    title: 'terraform',
    imageSrc: '/images/technologies/terraform.png',
  },
];

const workTechnologies = [
  {
    title: 'csharp',
    tag: 'work',
    imageSrc: '/images/technologies/csharp.png',
  },
  {
    title: 'dotnet core',
    tag: 'work',
    imageSrc: '/images/technologies/dotnetcore.svg',
  },
  {
    title: 'nunit',
    tag: 'work',
    imageSrc: '/images/technologies/nunit.png',
  },
  {
    title: 'react',
    tag: 'work',
    imageSrc: '/images/technologies/react.png',
  },
  {
    title: 'typescript',
    tag: 'work',
    imageSrc: '/images/technologies/typescript.png',
  },
  {
    title: 'styled-components',
    tag: 'work',
    imageSrc: '/images/technologies/styledcomponents.png',
  },
  {
    title: 'react-testing-library',
    tag: 'work',
    imageSrc: '/images/technologies/rtl.png',
  },
  {
    title: 'docker',
    tag: 'work',
    imageSrc: '/images/technologies/docker.png',
  },
  {
    title: 'openshift',
    tag: 'work',
    imageSrc: '/images/technologies/openshift.png',
  },
];

const TechnologiesGrid = ({ technologies }) => (
  <div
    className={styles.technologies}
    style={{
      display: `grid`,
      gridTemplateColumns: `auto auto auto`,
      gap: `25px 25px`,
    }}
  >
    {technologies.map((technology, index) => {
      return (
        <div
          key={index}
          className={styles.technology}
          style={{
            display: `flex`,
            flexDirection: `column`,
            alignItems: `center`,
            minWidth: `180px`,
          }}
        >
          <Image
            src={technology.imageSrc}
            alt={technology.title}
            width={75}
            height={75}
          />
          <div style={{ marginTop: `10px` }}>
            <Tag title={technology.title} theme="white" />
          </div>
        </div>
      );
    })}
  </div>
);
const Tech = () => {
  return (
    <Layout pageTitle="minha stack de tecnologia">
      <div className={styles.techsContainer}>
        <div className={styles.workTech}>
          <h1>tecnologias que trabalho/estudo</h1>
          <TechnologiesGrid technologies={workTechnologies} />
        </div>
      </div>
      <div className={styles.techContainer}>
        <div className={styles.lookingForTech}>
          <h1>tecnologias que estou de olho 👀</h1>
          <TechnologiesGrid technologies={interestingTechnologies} />
        </div>
      </div>
    </Layout>
  );
};

export default Tech;
