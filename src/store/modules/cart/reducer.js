import produce from 'immer'
const INITIAL_STATE = {
    product: [],
}
export default function cart(state = INITIAL_STATE, action) {
       switch (action.type){
           case '@cart/ADD_TO_CART':
               const { product } = action.payload
              return produce(state, draft=>{
                  draft.product.push({
                      product,
                  })
              })
           default:
               return state
       }

}
