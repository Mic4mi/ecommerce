import './style.css';
import logo from '../../logo.svg'

export const NavBar = (props) => {
    return (
        <div className='navbar-container'>
            <div className="logo-brand">
                <img id="logo" src={logo} alt="logo" />
                <p id="brand">Saturno</p>
            </div>
            <div className="navigation-links">
                <ul id="main-links">
                    <li className="li-separator">/</li>
                    <li className="li-nav-item"><a className="a-main-nav" href="#">Home</a></li>
                    <li className="li-separator">/</li>
                    <li className="li-nav-item"><a className="a-main-nav" href="#">Contact</a></li>
                    <li className="li-separator">/</li>
                    <li className="li-nav-item"><a className="a-main-nav" href="#">About</a></li>
                </ul>
            </div>
            <div className="log-section">
                <button className="log-btn log-btn-hover">Login</button>
                <button className="log-btn log-btn-hover">Sign up</button>
            </div>
        </div>
    )
}