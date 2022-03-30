import './header.css'
import logo from '../../img/logo.svg'
function Header() {
  return (
    <div className="header">
      <a href="#" className="logo">
        <img src={logo}/>
      </a>
    </div>
  )
}

export default Header;