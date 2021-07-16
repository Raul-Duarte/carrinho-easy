export function addToCart(product) {
    return {
        type: '@cart/ADD_TO_CART',
        payload: product,
    };
}
