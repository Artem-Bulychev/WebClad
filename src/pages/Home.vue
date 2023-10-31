<template>
  <div class="wrapper-content wrapper-content--fixed">
    <section>
      <div class="container">
        <div class="container__home">
          <h1 class="container__title">Макеты Figma для верстки сайтов</h1>
          <p class="container__subtitle">Предлагаем вам уникальное решение для упрощения процесса верстки - множество качественных макетов и шаблонов различных тематик и сложности.</p>
          <p class="container__text">Добро пожаловать на главную страницу WebClad - вашего источника креативных и функциональных макетов для верстки сайтов!
           <br><br> Наши макеты - это совершенное сочетание эстетики и практичности. Мы стремимся предоставить вам самые актуальные и профессионально разработанные макеты, которые помогут вам ускорить и упростить процесс верстки, без потери визуальности и удобства.</p>
           <div class="container__social">Подписывайтесь в соц. сетях
            <div class="social-icons">
              <a v-for="social in socialMedia" :key="social.name" :href="social.link">
              <img :src="social.icon" :alt="social.name" />
              </a>
            </div>
           </div>
        </div>
      </div>
    </section>
    <section>
      <div class="container">
        <div class="container__shop">
          <h1 class="shop__title">Библиотека макетов</h1>
          <div class="shop__filter"></div>
          <div class="item__wrapper">
            <shopItem
              v-for="product in shopList" :key="product.id"
              :product="product" />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import shopItem from '@/components/ShopItem.vue'
export default {
  components: { shopItem },
  data () {
    return {
      shopList: null,

      socialMedia: [
        { name: 'VK', link: 'https://vk.com', icon: 'VK.svg' },
        { name: 'Twitter', link: 'https://www.twitter.com', icon: 'iconTwitter.svg' },
        { name: 'YouTube', link: 'https://www.YouTube.com', icon: 'YouTube.svg' },
        { name: 'YouTube', link: 'https://www.YouTube.com', icon: 'Telegram.svg' },
      ]
    }

  },
  created () {
    this.shopList = this.$store.getters.getShopList
  }

}
</script>

<style>
.container__home {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  flex-direction: column;
  column-gap: 200px;
  position: relative;
  margin: 0;
  padding: 0;
  margin-top: 160px;
}

.container__title {
  color: #FFF;
  font-size: 64px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  min-width: 700px;
}

.container__subtitle {
  color: #FFF;
  max-width: 518.33px;;
  font-size: 25px;
  font-style: normal;
  font-weight: 400;
  line-height: 35px;
  grid-column-start: 1
}

.container__text {
  color: #FFF;
  font-size: 25px;
  font-style: normal;
  font-weight: 500;
  line-height: 35px; /* 140% */
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: 1;
  grid-row-end: 3;
  min-width: 600px;
}

.link {
  color: #FFF;
  font-family: Montserrat;
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  justify-content: left;
}

.shop__title {
  margin: 0;
  padding: 0;
  padding-bottom: 150px;
  color: #FFF;
  font-family: Montserrat;
  font-size: 54px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}

.container__shop {
  margin-top: 200px;
}

.container__social {
  color: #FFF;
  font-family: Montserrat;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 35px; /* 218.75% */
}

.container__item {
  width: 19.784px;
  height: 12.134px;
  flex-shrink: 0;
}

.social-icons {
  display: flex;
}

.social-icons a {
  margin-right: 50px;
}

.social-icons img {
  width: 20px;
  height: 20px;
}
</style>
