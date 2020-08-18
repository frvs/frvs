import Header from './Header';
import BackToHome from './BackToHome';

export default function Layout({ children, home, ...otherProps}) {
  return (
    <>
      <Header /> 
      {
        home ? '' : <BackToHome />
      }
      <div className='layout' {...otherProps}>
        {children}
      </div>
    </>
  )
}