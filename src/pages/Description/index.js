import React from 'react';
import {useSelector} from "react-redux";
import {Container, DivDois, DivUm} from "./styles";
import {MdAddShoppingCart} from "react-icons/md";

export default function Description() {

    const {product} = useSelector(state => state.description)

    return (
        <Container>
            <div key={product.product.id}>
                <DivUm>
                    <img src={product.product.image} alt=""/>
                    <h3>{product.product.description}</h3>
                </DivUm>
                <DivDois>
                    <h1>{product.product.title}</h1>
                    <span>R$ {product.product.price}</span>
                    <label>Calcular frete: </label>
                    <input type="text" placeholder="CEP"/>
                    <button type="button" onClick={() => console.log(product)}>
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
