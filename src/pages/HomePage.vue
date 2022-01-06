<template>
    <load-item v-if="isLoading"></load-item>
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
    data() {
        return {
            isLoading: false
        }
    },
    computed: {
        products() {
            return this.$store.getters['home/books'];
        }
    },
    methods: {
        async loadBooks() {
            this.isLoading = true;
            try {
                await this.$store.dispatch('home/loadBooks');
            } catch(error) {
                this.error = error.message || 'Something went wrong!';
            }
            this.isLoading = false;
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