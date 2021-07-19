import React from "react";
import {Container, ProductTable, Total} from "./styles";
import {MdRemoveCircleOutline, MdAddCircleOutline, MdDelete} from 'react-icons/md'
import {useDispatch, useSelector} from "react-redux";
import {removeFromCart, updateAmount} from "../../store/modules/cart/actions";

export default function Cart() {

    const {product} = useSelector(state => state.cart)

    const cart = useSelector(state => state.cart)

    const dispatch = useDispatch();

    const handleRemoveProduct = (id) => dispatch(removeFromCart(id))

    const increment = (product, quantity) => {
        dispatch(updateAmount(product.id, quantity + 1))
    }
    const decrement = (product, quantity) => {
        dispatch(updateAmount(product.id, quantity - 1))
    }

    if (product.length !== 0) {
        return (
            <Container>
                <ProductTable>
                    <thead>
                    <tr>
                        <th/>
                        <th>PRODUTO</th>
                        <th>QTD</th>
                        <th>SUBTOTAL</th>
                        <th/>
                    </tr>
                    </thead>
                    <tbody>
                    {product.map(product => (
                        <tr key={product.product.id}>
                            <td>
                                <img
                                    src={product.product.image}
                                    alt={product.product.title}

                                />
                            </td>
                            <td>
                                <strong>{product.product.title}</strong>
                                <span>R${product.product.price}</span>
                            </td>
                            <td>
                                <div>
                                    <button type='button' onClick={() => decrement(product.product, product.quantity)}>
                                        <MdRemoveCircleOutline size={20} color='#7159c1'/>
                                    </button>
                                    <input type="number" readOnly value={product.quantity}/>
                                    <button type='button' onClick={() => increment(product.product, product.quantity)}>
                                        <MdAddCircleOutline size={20} color='#7159c1'/>
                                    </button>
                                </div>
                            </td>
                            <td>
                                <span>TOTAL</span>
                                <strong>R$ {(product.subtotal).toFixed(2)}</strong>
                            </td>
                            <td>
                                <button type='button' onClick={() => handleRemoveProduct(product.product.id)}>
                                    <MdDelete size={20} color='#9519c1'/>
                                </button>
                            </td>
                        </tr>
                    ))}
                    </tbody>

                </ProductTable>
                <footer>
                    <button type="button">Finalizar pedido</button>
                    <Total>
                        <span>Total</span>
                        <strong>R$ {(cart.total).toFixed(2)}</strong>
                    </Total>
                </footer>
            </Container>
        )
    } else {
        return (
            <Container>
                <h1>
                    Você não adicionou nada no seu carrinho
                    :(
                </h1>
            </Container>
        )
    }

}
