import './style.css';

export const ItemDetail = ({ name, description, price, stock, img }) => {
    return (
        <>
            <p>{name}</p>
            <p>{description}</p>
            <p>{price}</p>
            <p>{stock}</p>
            <p>{img}</p>
        </>
    )
}
