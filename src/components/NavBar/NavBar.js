import './style.css';
import planet from '../../planet.png'
import CartWidget from '../CartWidget/CartWidget';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'



function NavBar() {
    return (
        <div className='navbar-container'>
            <Link to="/" id="navHome">
                <div className="logo-brand" title='Home'>
                    <img id="logo" src={planet} alt="logo" />
                    <p id="brand">Saturno</p>
                </div>
            </Link>
            <div className="navigation-links">
                <ul id="main-links">
                    <li className="li-nav-item">
                        <a className="a-main-nav" href="/Contact">
                            Contact
                        </a>
                        <Link to="/Contact" />
                    </li>
                    <li className="li-separator">
                        <FontAwesomeIcon icon={faCircle} />
                    </li>
                    <li className="li-nav-item">
                        <a className="a-main-nav" href="/About">
                            About
                        </a>
                        <Link to="/About" />
                    </li>
                </ul>
            </div>
            <div className="log-section">
                <button className="log-btn log-btn-hover">Login</button>
                <button className="log-btn log-btn-hover">Sign up</button>
                <CartWidget />
            </div>
        </div>
    )
}

export default NavBar;