import React from 'react';
import PageCard from '../components/PageCard';

const pages = [
  {
    id: 1, title: 'Experience 🖥️', description: 'Where I worked as developer.', href: '/experience'
  }, 
  {
    id: 2, title: 'Open source projects 📚', description: 'Code I wrote for community.', href: '/opensource'
  }, 
  {
    id: 3, title: 'Blog 📝', description: "Sometimes I write down something I've find cool or interesting.", href: '/blog'
  }, 
]

export default function Home() {
  
  return (
    <>
      
      {pages.map((item, id) => {
        return <PageCard key={id} {...item} />
      })}
    </>
  )
}
