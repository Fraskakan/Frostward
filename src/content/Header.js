import '../css/Header.css'
import '../css/General.css'
import logo from '../images/FrostwardTextWhite_Transparant.png'
import Contact from './Contact'

function Header (props) {

  return (
    <header className='header'>
      <div className='header-left' >
        <img src={logo} alt="Frostward" style={{maxWidth: props.width*0.92, width: '400px'}} />
      </div>
      <div className='header-right' >
        <Contact width='50px' height='50px' />
      </div>
    </header>
  )
}

export default Header