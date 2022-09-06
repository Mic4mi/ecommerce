import './style.css';

export const PostalCodeCalculator = () => {
    return (
        <div className="description-postalcode">
            <h4>Medios de envio</h4>
            <input className="input-postalcode" type="text" placeholder="Tu código Postal" maxLength={5}/>
            <button className="calc-postalcode-btn calc-postalcode-btn-hover">Calcular</button>
        </div>
    )
}
