import './style.css';
import { Link } from 'react-router-dom'

export const Filterbar = () => {
    return (
        <div className='filterbar-container'>
            <ul id="filters">
                <li >
                    <Link to="/product/planet" className='a-filters-nav'>Planets</Link>
                </li>
                <li >
                    <Link to="/product/comet" className='a-filters-nav'>Comets</Link>
                </li>
                <li >
                    <Link to="/product/star" className='a-filters-nav'>Stars</Link>
                </li>
                <li >
                    <Link to="/product/galaxy" className='a-filters-nav'>Galaxies</Link>
                </li>
            </ul>
            <hr className='filterbar-separator' />
        </div>
    )
}
