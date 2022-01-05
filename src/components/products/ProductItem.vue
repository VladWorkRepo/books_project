<template>
    <li class="product">
        <div class="product__data">
            <div class="product__image">
                <img :src="image" alt="title" />
            </div>
            <div class="product__text">
                <h3>{{ title }}</h3>
                <h4>{{ author }}</h4>
            </div>
        </div>
        <div class="product__actions">
            <base-button @click="addToCart">ADD TO CART</base-button>
        </div>
    </li>
</template>

<script>
export default {
    props:['isbn13', 'image', 'title', 'author'],
    methods: {
        addToCart() {

        }
    }
}

</script>
<style scoped>
li {
  margin: 1.5rem auto;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  border-radius: 10px;
}

.product__data {
  display: flex;
}

.product__image {
  margin-right: 1rem;
}

.product__image img {
  height: 11rem;
  width: 11rem;
  object-fit: cover;
}
.product__text {
    margin-top: 10px;
    margin-left: 10px;
}
.product__text h3 {
  margin: 0 0 0.5rem 0;
}

.product__text h4 {
  margin: 0;
}

.product__actions {
  text-align: right;
}


</style>