import React, {useState, useEffect} from "react";
import {MdAddShoppingCart} from "react-icons/md"
import api from '../../server/api'

import {ProductList} from "./styles";

export default function Home() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        async function loadPorduct() {
            const response = await api.get('products')
            setProducts(response.data)
        }

        loadPorduct()
    }, [])
    console.log(products)
    return (
        <ProductList>
            {products.map(product => (
                <li key={product.id}>
                    <img
                        src={product.image}
                        alt={product.title}
                    />
                    <strong>{product.title}l</strong>
                    <span>{product.price}</span>
                    <button type="button">
                        <div>
                            <MdAddShoppingCart size={16} color="#FFF"/>
                        </div>
                        <span>ADICIONAR AO CARRINHHO</span>
                    </button>
                </li>
            ))}
        </ProductList>
    )
}
