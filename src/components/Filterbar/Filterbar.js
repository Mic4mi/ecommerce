import './style.css';
import { Link } from 'react-router-dom'

export const Filterbar = () => {
    return (
        <div className='filterbar-container'>
            <ul id="filters">
                <li >
                    <a className='a-filters-nav' href="/product/planet">
                        Planets
                    </a>
                    <Link to="/product/planet" />
                </li>
                <li >
                    <a className='a-filters-nav' href="/product/comet">
                        Comets
                    </a>
                    <Link to="/product/comet" />
                </li>
                <li >
                    <a className='a-filters-nav' href="/product/star">
                        Stars
                    </a>
                    <Link to="/product/star" />
                </li>
                <li >
                    <a className='a-filters-nav' href="/product/galaxy">
                        Galaxies
                    </a>
                    <Link to="/product/galaxy" />
                </li>
            </ul>
            <hr className='filterbar-separator'/>
        </div>
    )
}
