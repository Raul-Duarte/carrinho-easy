import produce from 'immer'

const INITIAL_STATE = {
    product: [],
}
export default function cart(state = INITIAL_STATE, action) {
    switch (action.type) {
        case '@cart/ADD_TO_CART':
            const product = action.payload
            return produce(state, draft => {
                const productIndex = draft.product.findIndex(item => item.product.id === product.id)
                if (productIndex >= 0) {
                    draft.product[productIndex].quantity++;
                } else {
                    draft.product.push({
                        product,
                        quantity: 1,
                    })
                }

            })

        case '@cart/REMOVE_FROM_CART':
            return produce(state, draft => {
                console.log(action.payload)
                const productIndex = draft.product.findIndex(item => item.product.id === action.payload)
                console.log(productIndex)
                if (productIndex >= 0) {
                    draft.product.splice(productIndex, 1)
                }
            })

        case '@car/UPDATE_AMOUNT': {
            if (action.payload.quantity <= 0) {
                return state
            }
            return produce(state, draft => {
                const productIndex = draft.product.findIndex(item => item.product.id === action.payload.id)
                if (productIndex >= 0) {
                    draft.product[productIndex].quantity = action.payload.quantity;
                }
            })
        }
        default:
            return state
    }

}
