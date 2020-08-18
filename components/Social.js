const social = [
  {id:1, name: 'LinkedIn', href:'https://linkedin.com/in/frvs'}, 
  {id:2, name: 'Github', href:'https://github.com/frvs'}, 
  {id:3, name: 'Telegram', href:'https://t.me/lucas_frois'}, 
  {id:4, name: 'Currículo', href:''}, 
  {id:5, name: 'Mail', href:'mailto:frois.dev@gmail.com'}, 
]
const styleSocialContainer = {
  display: `flex`, 
  justifyContent: `space-between`
}
const linkStyle = {
  margin: `5px`, 
  padding: `5px`, 
}

export default function Social() {
  return(
    <div className='social-container' style={styleSocialContainer}>
      {
        social.map((item, i) => {
          return (
            <a key={item.id} href={item.href} style={linkStyle}>{item.name}</a>
          )
        })
      }
    </div>
  ) 
}