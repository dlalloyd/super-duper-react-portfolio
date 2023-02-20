import { faEnvelope, faHouse, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link, NavLink } from 'react-router-dom'
import './index.scss'

const Sidebar = () => (
  <div className="nav-bar">
    <nav>
      <NavLink exact="true" activeclassname="active" to="/">
        <FontAwesomeIcon icon={faHouse} color="#4d4d4e" />
      </NavLink>
      <NavLink exact="true" activeclassname="about-link" to="/about">
        <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
      </NavLink>{' '}
      <NavLink exact="true" activeclassname="contact-link" to="/contact">
        <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
      </NavLink>
    </nav>

    <ul>
      {/* <li>
        <a target="_blank" rel="noreferrer" href="">
          <FontAwesomeIcon icon={faLinkedIn} color="#4dd4d4e"></FontAwesomeIcon>
        </a>
      </li>
      <li>
        <a target="_blank" rel="noreferrer" href="">
          <FontAwesomeIcon icon={faGithub} color="#4dd4d4e"></FontAwesomeIcon>
        </a>
      </li>
      <li>
        <a target="_blank" rel="noreferrer" href="">
          <FontAwesomeIcon icon={faFacebook} color="#4dd4d4e"></FontAwesomeIcon>
        </a>
      </li> */}
    </ul>
  </div>
)

export default Sidebar
