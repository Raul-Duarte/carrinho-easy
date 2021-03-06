import produce from 'immer'
import {toast} from 'react-toastify';

const INITIAL_STATE = {
    product: [],
    total: 0,
}
export default function cart(state = INITIAL_STATE, action) {
    switch (action.type) {
        case '@cart/ADD_TO_CART':
            const product = action.payload

            return produce(state, draft => {
                const productIndex = draft.product.findIndex(item => item.product.id === product.id)
                if (productIndex >= 0) {
                    draft.product[productIndex].quantity++;
                    draft.product[productIndex].subtotal = draft.product[productIndex].product.price * draft.product[productIndex].quantity
                    draft.total = Number(draft.total + draft.product[productIndex].product.price)
                    toast.success('Produto adicionado ao carrinho')
                } else {
                    draft.product.push({
                        product,
                        quantity: 1,
                        subtotal: product.price,
                    })
                    draft.total = Number(draft.total + product.price)
                    toast.success('Produto adicionado ao carrinho')
                }

            })

        case '@cart/REMOVE_FROM_CART':
            return produce(state, draft => {

                const productIndex = draft.product.findIndex(item => item.product.id === action.payload)

                if (productIndex >= 0) {
                    draft.total = draft.total - draft.product[productIndex].subtotal
                    draft.product.splice(productIndex, 1)
                    toast.error('Você removeu o produto do carrinho')
                }
            })

        case '@car/UPDATE_AMOUNT': {
            if (action.payload.quantity <= 0) {
                return state
            }
            return produce(state, draft => {
                const productIndex = draft.product.findIndex(item => item.product.id === action.payload.id)
                if (productIndex >= 0) {
                    if (draft.product[productIndex].quantity > action.payload.quantity) {
                        draft.total = draft.total - draft.product[productIndex].product.price
                    } else {
                        draft.total = draft.total + draft.product[productIndex].product.price
                    }
                    draft.product[productIndex].quantity = action.payload.quantity;
                    draft.product[productIndex].subtotal = draft.product[productIndex].product.price * draft.product[productIndex].quantity
                }

            })
        }
        default:
            return state
    }

}
