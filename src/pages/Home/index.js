import React, {useState, useEffect} from "react";
import {useDispatch} from 'react-redux'
import {MdAddShoppingCart} from "react-icons/md"
import api from '../../server/api'
import {useHistory} from 'react-router-dom'

import {ProductList} from "./styles";
import {addToCart} from "../../store/modules/cart/actions";
import {showProductDescription} from "../../store/modules/description/actions";

export default function Home() {
    const [products, setProducts] = useState([]);
    const dispatch = useDispatch();
    const history = useHistory()
    useEffect(() => {
        async function loadPorduct() {
            const response = await api.get('products')
            setProducts(response.data)
        }

        loadPorduct()
    }, [])

    const handleAddProduct = (product) => dispatch(addToCart(product))

    const goDescription = (product) => {
        dispatch(showProductDescription(product))
        history.push('descricao')
    }

    return (
        <ProductList>
            {products.map(product => (
                <li key={product.id}>
                    <img
                        src={product.image}
                        alt={product.title}
                        onClick={() => goDescription(product)}
                    />
                    <strong>{product.title}</strong>
                    <span>R$ {product.price}</span>
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
