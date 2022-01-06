<template>
    <h2>Your products</h2>
    <base-card>
        <ul>
            <cart-item></cart-item>
        </ul>
    </base-card>
    <h3>{{ total }}</h3>
    <base-button>NEXT</base-button>
</template>

<script>
import CartItem from '../components/cart/CartItem.vue';
export default {

    components: {
        CartItem
    },
    computed: {

    }
}
</script>

<style scoped>
ul {
    list-style: none;
    margin: 2rem auto;
    margin-top: 3rem;
    padding: 0;
    max-width: 40rem;
}
h2 {
    text-align: center;
}

</style>