import './style.css';
import { useState, useEffect } from "react"
import mockdata from '../../mockdata/mockdata';
import { ItemDetail } from '../ItemDetail/ItemDetail';

export const IntemDetailContainer = () => {
    // TO-DO añadir handling de errores
    const [product, setProduct] = useState('');
    const getProduct = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(mockdata[0]);
            }, 2000);
        })
    };

    // TO-DO añadir handling de errores
    useEffect(() => {
        getProduct()
            .then((result) => {
                setProduct(result);
            })
    }, []);

    return (
        <div>
            {/* {
                product
                    ? (<ItemDetail product={product} />)
                    : (<div>Cargando...</div>)
            } */}
            <ItemDetail 
            name={product.name} 
            description={product.description} 
            price={product.price} 
            stock={product.stock} 
            img={product.img}/>

        </div>
    )
}
