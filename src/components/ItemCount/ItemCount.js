import './style.css';

function ItemCount() {
    return (
        <div className='item-count-container'>
            <div className='counter-box'>
                <button className='item-count-btn item-count-btn-hover'>
                    <i class="fa-solid fa-plus"></i>
                </button>
                <p id='item-quantity'>1</p>
                <button className='item-count-btn item-count-btn-hover'>
                    <i class="fa-solid fa-minus"></i>
                </button>
            </div>
            <p className='stock-indicator'>No hay stock</p>
            <button className='item-count-addToCart-btn'>
                Añadir al carrito
            </button>
        </div>
    )
}

export default ItemCount