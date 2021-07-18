import produce from 'immer';

const INITIAL_STATE = {
    product: {},
}


export default function description (state = INITIAL_STATE, action) {
    switch (action.type) {
        case '@description/SHOW_PRODUCT_DESCRIPTION':
            const product = action.payload
            return produce(state, draft => {
                draft.product={
                    product
                }
            })

        default:
            return state
    }
}
