export default {
    addToCart(state, payload) {
        const productData = payload;
        const productIndex = state.items.find(i => i.prodISBN === productData.isbn13);
        console.log(productIndex);
    }
};