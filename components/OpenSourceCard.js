const divStyle = {
  margin: `10px`, 
  padding: `10px`
}

const h3Style = {
  margin: `5px`,
}
export default function OpenSourceCard({ id, title, description, url }) {
  return(
    <div style={divStyle}>
      <h3 style={h3Style}><a href={url} target="_blank" noreferrer noopener>{title} 🡕</a></h3>
      <p>{description}</p>
    </div>
  ) 
}