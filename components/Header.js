import Social from './Social';

const name = 'Lucas Frois';
const description = `Atualmente desenvolvedor pela @FastChannel.`;
const subdescription = 'Antes, dev back-end na @TrinusTech.'
const headerStyle = { 
  margin: `5vh auto 2vh`, 
  textAlign: `center`, 
  maxWidth: `75%`
}

export default function Header() {
  return(
    <div className='header' style={headerStyle}>
      <h1 className='title'>Olá!👋 Eu sou {name}.</h1>
      <h3>{description}</h3>
      <h4>{subdescription}</h4>
      <Social />
    </div>
  ) 
}
