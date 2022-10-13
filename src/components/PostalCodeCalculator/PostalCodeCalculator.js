import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTruck } from '@fortawesome/free-solid-svg-icons'


export const PostalCodeCalculator = () => {
    return (
        <div className="description-postalcode">
            <div className='deliver-text'>
                <FontAwesomeIcon icon={faTruck} id="truck-icon"/>
                <h4>Shipping methods</h4>
            </div>
            <input className="input-postalcode" type="text" placeholder="Postal Code" maxLength={5} />
            <button className="calc-postalcode-btn calc-postalcode-btn-hover">Calculate</button>
        </div>
    )
}
