import React from "react";
import {useSelector} from 'react-redux'
import {Cart, Container} from "./styles";
import {MdShoppingBasket} from 'react-icons/md'
import logo from "../../assets/images/logo.svg";
import {Link} from "react-router-dom";

export default function Header() {

    const {product} = useSelector(state => state.cart)

    return (
        <Container>
            <Link to="/">
                <img src={logo} alt="logo"/>
            </Link>

            <Cart to="/carrinho">
                <div>
                    <strong>Meu Carrinho</strong>
                    <span>{product.length} itens</span>
                </div>
                <MdShoppingBasket size={36} color="#FFF"/>
            </Cart>
        </Container>
    )
}
