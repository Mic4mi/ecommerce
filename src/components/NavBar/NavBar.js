import './style.css';
import planet from '../../planet.png'
import CartWidget from '../CartWidget/CartWidget';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons'


function NavBar() {
    return (
        <div className='navbar-container'>
            <div className="logo-brand">
                <img id="logo" src={planet} alt="logo" />
                <p id="brand">Saturno</p>
            </div>
            <div className="navigation-links">
                <ul id="main-links">
                    <li className="li-nav-item"><a className="a-main-nav" href="/#">
                        Home
                    </a></li>
                    <li className="li-separator">
                        <FontAwesomeIcon icon={faCircle} />
                    </li>
                    <li className="li-nav-item"><a className="a-main-nav" href="/#">
                        Contact
                    </a></li>
                    <li className="li-separator">
                        <FontAwesomeIcon icon={faCircle} />
                    </li>
                    <li className="li-nav-item"><a className="a-main-nav" href="/#">
                        About
                    </a></li>
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