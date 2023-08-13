import instagram from '../images/instagram.svg'
import facebook from '../images/facebook.svg'
import twitter from '../images/twitter.svg'
import youtube from '../images/youtube.svg'

function Contact (props) {
  var width = props.width ? props.width : '60px'
  var height = props.height ? props.height : '60px'

  return (
    <div id='contact'>
      <a href="https://www.instagram.com/frostwardgames/">
        <img width={width} height={height} src={instagram} alt="instagram" />
      </a>
      <a href="https://www.facebook.com/Frostwardgames/">
        <img width={width} height={height} src={facebook} alt="facebook" />
      </a>
      <a href="https://twitter.com/frostwardgames">
        <img width={width} height={height} src={twitter} alt="twitter" />
      </a>
      <a href="https://www.youtube.com/channel/UCXon70zyv3b496RjfgoSPkA">
        <img width={width} height={height} src={youtube} alt="youtube" />
      </a>
    </div>
  )
}

export default Contact