import React from 'react';
import BackHome from '../components/BackHome';
import ExperienceCard from '../components/ExperienceCard';

const trinusDescription = `
<p><b>Business: </b> We builded a Bank-As-A-Service (BaaS) API and mobile app from scratch.</p>
                <p><b>Tech stack: </b> C#, .NET Core 3.1, WebApi, DDD architecture and RESTful designed API.</p>
                <p><b>Libraries: </b> EF Core, Dapper, Flunt, SwaggerUI, JUnit.</p>
                <br />
                <p><b>Personal experience: </b> One word: learning. 
                  Working in a big company makes me care about perfomance, tests, clean code,
                  maintainability, reliability andso many others -ities that comes from good practices. 
                  Also, a big company is also a place for legacy systems and old code: 
                  that's was perfect to me bc I love refactoring and make code less complex.</p>
`;

const lgDescription = `
<p><b>Business: </b> LG is the biggest HR/HCM software company in Brazil. I've worked on 'Jobs & Wages' team of 'LG Suite' application.</p>
                <p><b>Tech stack: </b> C#, .NET 4.5, MVC 5, Razor pages, Services & Repositories architecture.</p>
                <p><b>Libraries: </b> NHibernate, FluentValidation, NUnit.</p>
                <br />
                <p><b>Personal experience: </b> One word: learning. 
                    Working in a big company makes me care about perfomance, tests, clean code,
                    maintainability, reliability andso many others -ities that comes from good practices. 
                    Also, a big company is also a place for legacy systems and old code: 
                    that's was perfect to me bc I love refactoring and make code less complex.</p>
`;

const experiences = [
  {
    id: 1, title: 'back-end developer at @trinustech', description: trinusDescription, date: 'fev/20 to ago/20'
  }, 
  {
    id: 2, title: 'full-stack developer at @lglugardegente', description: lgDescription, date: 'fev/20 to ago/20'
  }, 
  {
    id: 3, title: 'database support at @decisaosistemas', description: '', date: 'fev/20 to ago/20'
  }, 
  {
    id: 4, title: 'front-end developer at @dandaralab', description: '', date: 'fev/20 to ago/20'
  }, 
]

export default function Experience() {  
  return (
    <>
      <BackHome />
      {experiences.map((item, i) => {
        return (
          <div key={i}>
            <ExperienceCard {...item}/>
          </div>
        )
      })}
    </>
  )
}