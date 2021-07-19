import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Container, DivDois, DivUm} from "./styles";
import {MdAddShoppingCart} from "react-icons/md";
import {addToCart} from "../../store/modules/cart/actions";
import {useHistory} from 'react-router-dom'

export default function Description() {

    const {product} = useSelector(state => state.description)

    const dispatch = useDispatch();
    const history = useHistory()

    const handleAddProduct = (product) => {
        dispatch(addToCart(product))
        history.push('/')
    }

    return (
        <Container>
            <div key={product.product.id}>
                <DivUm>
                    <img src={product.product.image} alt={product.product.title}/>
                </DivUm>
                <DivDois>
                    <h1>{product.product.title}</h1>
                    <h4>Informações do produto</h4>
                    <p>{product.product.description}</p>
                        <h4>Por: </h4>
                        <h3>R$ {product.product.price}</h3>

                    <div>
                        <label>Calcular frete: </label>
                        <input type="text" placeholder="CEP"/>
                    </div>
                    <button type="button" onClick={() => handleAddProduct(product.product)}>
                        <div>
                            <MdAddShoppingCart size={16} color="#FFF"/>
                        </div>
                        <span>ADICIONAR AO CARRINHHO</span>
                    </button>
                </DivDois>
            </div>
        </Container>
    )
}
