<template>
    <ul>
        <product-item
        v-for="product in products" :key="product.isbn13"
        :image="product.image"
        :title="product.title"
        :author="product.author"
        ></product-item>
    </ul>
</template>

<script>
import ProductItem from '../components/products/ProductItem.vue';

export default {
    components: {
        ProductItem
    },
    computed: {
        products() {
            return this.$store.getters['home/books'];
        }
    },
    methods: {
        async loadBooks() {
            try {
                await this.$store.dispatch('home/loadBooks');
            } catch(error) {
                this.error = error.message || 'Something went wrong!';
            }
        }
    },
    created() {
        this.loadBooks();
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
</style>