import './style.css';

export const PurchaseResume = ({ items, total, onReset }) => {

    return (
        <div className='purchase-list'>
            <h4>Resumen:</h4>
            {items.map((item) => (
                <div key={item.id} className='item-to-purchase'>
                    <div>
                        <p>{item.name} x{item.quantity}</p>
                        <p>${item.quantityPrice}</p>
                        <hr></hr>
                    </div>
                </div>
            ))}
            <h4>Total compra: ${total}</h4>
            {/* Nota: este botón en realidad podría llevar a una pantalla para cargar los datos de compra, etc */}
            <button className='purchase-end-btn purchase-btn' onClick={onReset}>Finalizar compra</button>
        </div>
    )
}

