export function addToCart(product) {
    return {
        type: '@cart/ADD_TO_CART',
        payload: product,
    };
}

export function removeFromCart(id) {
    return {
        type: '@cart/REMOVE_FROM_CART',
        payload: id,
    };
}

export function updateAmount(id, quantity) {
    return {
        type: '@car/UPDATE_AMOUNT',
        payload: {
            id, quantity
        }
    }
}
