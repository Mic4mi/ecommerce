import './style.css';
import { Link } from 'react-router-dom';
import lostastronaut from './lostastronaut.png';

export const EmptyCart = () => {
    return (
        <div className='empty-cart-container'>
            <p className='empty-indicator'>No hay nada en el carrito aun...</p>
            <img src={lostastronaut} alt='astronaut' className='empty-cart-img'></img>
            <Link to="/" className='a-filters-nav'>Continuar comprando</Link>
        </div>

    )
}
