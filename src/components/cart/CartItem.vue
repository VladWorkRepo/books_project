<template>
     <li class="product">
        <div class="product__data">
            <div class="product__image">
                <img :src="image" alt="title" />
            </div>
            <div class="product__text">
                <h3>{{ title }}</h3>
                <h5>Author: {{ author }}</h5>
            </div>
            <div class="summary">
                <div class="price">${{ totalPrice }}</div>
                <div class="qty">Quantity: {{ quantity }}</div>
            </div>
        </div>
    </li>
</template>

<script>
export default {
    props: ['id', 'image', 'title', 'author', 'price', 'quantity'],
    computed: {
        totalPrice() {
            return (this.price * this.quantity).toFixed(2);
        }
    }
}
</script>

<style scoped>
li {
  margin: 1.5rem auto;
  border: 1.5px solid #003a37;
  padding: 1rem;
}

p {
  font-size: 13px;
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

.product__text h5, h6 {
  margin: 0;
}

.summary {
    display: flex;
    width: 30%;
    padding: 10px 15px 10px 15px;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-end;
}

.price {
    font-size: 22px;
    font-weight: 700;
}


</style>