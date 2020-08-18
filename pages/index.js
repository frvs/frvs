import React from 'react';
import LinkCard from '../components/LinkCard';
import Layout from '../components/Layout';

const links = [
  {
    id:1, title:'Experiência 🖥️', description: 'Onde eu trabalhei como desenvolvedor.', href:'/experience'
  }, 
  {
    id:2, title:'Projetos open-source 📚', description: 'Projetos pessoais e contribuições.', href:'/opensource'
  }, 
  {
    id:3, title:'Blog 📝', description: 'As vezes eu escrevo algo interessante sobre tecnologia.', href:'/blog'
  }, 
  
]

export default function Home() {
  return (
    <Layout home>
      {
        links.map((item, i) => 
        {
          return (
          <div key={i}>
            <LinkCard {...item} />
          </div>);
        })
      }
    </Layout>
  )
}
