import '../css/Info.css'
import '../css/General.css'
import logo from '../images/logo_micro.png'

function Info (props) {

  //<img src={background} alt="background" width="650" />
  return (
    <div id='info'>
      <h1>About</h1>
      <div className='container'  >
        <div className='fixed'>
          <img src={logo} alt="logo" style={{maxWidth: props.width*0.7}} />
        </div>
        <div className='flex-item'>
          <h2>Frostward Games</h2>
          <p>Frostward Games is Niklas Fasth, a solo indie game developer from Sweden.</p>
        </div>
      </div>
    </div>
  )
}

export default Info 