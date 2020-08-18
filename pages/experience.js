import Layout from "../components/Layout";
import ExperienceCard from '../components/ExperienceCard';

const experience = [
  {
    id:1, title: 'desenvolvedor back-end em @trinustech', date: 'fev/20 até ago/20', description:''
  }, 
  {
    id:2, title: 'desenvolvedor full-stack em @lglugardegente', date: 'jan/19 até fev/20', description:''
  }, 
  {
    id:3, title: 'suporte a banco de dados em @decisaosistemas', date: 'mar/18 até dez/18', description:''
  }, 
  {
    id:4, title: 'desenvolvedor front-end em @dandaralab', date: 'fev/18 até jun/18', description:''
  }, 
]

export default function Experience() {
  return (
    <Layout>
      {
        experience.map((item, i) => {
          return (
            <ExperienceCard key={item.id} {...item} />
          )
        })
      }
    </Layout>
  )
}