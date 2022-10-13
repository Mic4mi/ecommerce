import './style.css';

export const PurchaseResume = ({ items, total, onReset }) => {

    return (
        <div className='purchase-list'>
            <h4>Summary:</h4>
            {items.map((item) => (
                <div key={item.id} className='item-to-purchase'>
                    <div>
                        <p>{item.name} x{item.quantity}</p>
                        <p>${item.quantityPrice}</p>
                        <hr></hr>
                    </div>
                </div>
            ))}
            <h4>Total purchase: ${total}</h4>
            <button className='purchase-end-btn purchase-btn' onClick={onReset}>End purchase</button>
        </div>
    )
}

