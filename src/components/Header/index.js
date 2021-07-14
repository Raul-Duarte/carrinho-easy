import React from "react";
import {Cart, Container} from "./styles";
import {MdShoppingBasket} from 'react-icons/md'
import logo from "../../assets/images/logo.svg";
import {Link} from "react-router-dom";

export default function Header() {
    return (
        <Container>
            <Link to="/">
                <img src={logo} alt="logo"/>
            </Link>

            <Cart to="/cart">
                <div>
                    <strong>Meu Carrinho</strong>
                    <span>3 itens</span>
                </div>
                <MdShoppingBasket size={36} color="#FFF"/>
            </Cart>
        </Container>
    )
}
