import React from 'react';

export default function ExperienceCard({ title, description, date }) {
  return (
    <div class="experience-card">
      <small>{date}</small>
      <h2 class="experience-title">{title}</h2>
      <br />
      {
        description == '' ? '' :  
        <p dangerouslySetInnerHTML={{__html: description}}></p>
      }
    </div>
  )
}