import React, {useState, useEffect} from "react";
import {useDispatch} from 'react-redux'
import {MdAddShoppingCart} from "react-icons/md"
import api from '../../server/api'

import {ProductList} from "./styles";
import {addToCart} from "../../store/modules/cart/actions";

export default function Home() {
    const [products, setProducts] = useState([]);
    const dispatch = useDispatch();

    useEffect(() => {
        async function loadPorduct() {
            const response = await api.get('products')
            setProducts(response.data)
        }
        loadPorduct()
    }, [])

    const handleAddProduct = (product) => dispatch(addToCart(product))

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
                    <button type="button" onClick={() => handleAddProduct(product)}>
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
