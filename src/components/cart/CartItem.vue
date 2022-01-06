<template>
     <li class="product">
        <div class="product__data">
            <div class="product__image">
                <img :src="image" alt="title" />
            </div>
            <div class="product__text">
                <h3>{{ title }}</h3>
                <h5>Author: {{ author }}</h5>
                <h6>Year: {{ year }}</h6>
                <p>Description: <br> 
                {{ description }}
                </p>
            </div>
            <div class="price">{{ price }}</div>
            <div class="qty">{{ quantity }}</div>
        </div>
    </li>
</template>

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

</style>