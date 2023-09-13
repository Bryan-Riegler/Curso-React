export const getCartTotal = (cart) => {
    return cart.reduce((acc, item) => acc + item.quantity * item.id.price, 0).toLocaleString('en-US')
}

export const formatPrice = (price) => {
    return price.toLocaleString('en-US');
}

export const mapCartToOrder = (cart) => {
    return cart.map((item) => ({
        id: item.id.id,
        quantity: item.quantity,
        price: item.id.price,
        name: item.id.name
    }));
};