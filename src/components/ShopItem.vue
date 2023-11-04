<template>
  <router-link class="item" :to="/shop/ + product.id">
    <img :src="product.img" :alt="product.title">
    <a class="link"> {{ product.title }} </a>
    <br>
    <a class="subtitle__shop"> {{ product.descr }} </a>
  </router-link>
</template>

<script>
export default {
  props: {
    product: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss">
.item__wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
}
.item {
  width: 470px;
  p {
    font-size: 22px;
  }
}

.subtitle__shop {
  color: #FFF;
  font-family: Montserrat;
  font-size: 22px;
  font-style: normal;
  font-weight: 400;
  line-height: 35px;
}
</style>
