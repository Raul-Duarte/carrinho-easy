import React from "react";
import {Container, ProductTable, Total} from "./styles";
import {MdRemoveCircleOutline, MdAddCircleOutline, MdDelete} from 'react-icons/md'
import {useDispatch, useSelector} from "react-redux";
import {removeFromCart} from "../../store/modules/cart/actions";

export default function Cart() {

    const {product} = useSelector(state => state.cart)
    const dispatch = useDispatch();
    const handleRemoveProduct = (id) => dispatch(removeFromCart(id))
    console.log(product)
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
                                <button type='button'>
                                    <MdRemoveCircleOutline size={20} color='#7159c1'/>
                                </button>
                                <input type="number" readOnly value={product.quantity}/>
                                <button type='button'>
                                    <MdAddCircleOutline size={20} color='#7159c1'/>
                                </button>
                            </div>
                        </td>
                        <td>
                            <span>TOTAL</span>
                            <strong>R$258,80</strong>
                        </td>
                        <td>
                            <button type='button' onClick={()=> handleRemoveProduct(product.product.id)}>
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
                    <strong>R$ 1920,28</strong>
                </Total>
            </footer>
        </Container>
    )
}
