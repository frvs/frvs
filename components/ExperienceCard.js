export default function ExperienceCard({ id, title, description, date }) {
  return(
    <section className='experience experience-card'>
      <small>{date}</small>
      <h3 className='experience-title'>{title}</h3>
      <p>{description}</p>
    </section>
  ) 
}