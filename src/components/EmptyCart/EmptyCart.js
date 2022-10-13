import './style.css';
import { Link } from 'react-router-dom';
import lostastronaut from './lostastronaut.png';

export const EmptyCart = () => {
    return (
        <div className='empty-cart-container'>
            <p className='empty-indicator'>There is nothing in the cart yet...</p>
            <img src={lostastronaut} alt='astronaut' className='empty-cart-img'></img>
            <Link to="/" className='a-filters-nav'>Continue shopping</Link>
        </div>

    )
}
