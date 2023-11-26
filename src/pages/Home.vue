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
          <div class="shop__filter">
            <button class="shop__item shop__filter_all " @click="filterShop('all')">Показать все</button>
            <button class="shop__item shop__filter_easy" @click="filterShop('easy')">Легкий</button>
            <button class="shop__item shop__filter_medium" @click="filterShop('medium')">Средний</button>
            <button class="shop__item shop__filter_hard" @click="filterShop('hard')">Сложный</button>
          </div>
          <div class="item__wrapper">
            <shopItem
              v-for="product in filteredAndPaginatedShopList" :key="product.id"
              :product="product" />
          </div>
        </div>
      </div>
    </section>
    <section>
      <div>
        <div class="button-list">
          <div class="btn btnPrimary" @click="prevPage"> &#8592;</div>
          <div class="btn btnPrimary" @click="nextPage"> &#8594;</div>
        </div>
      </div> 
    </section>

  <section class="contacts">
    <div class="contacts__container">
      <h2 class="contacts__title">КОНТАКТЫ</h2>
      <div class="contacts__content">
        <div class="contacts__form">
          <h3 class="form__title">Обратная связь</h3>
          <p class="form__subtitle">Любые отзывы и предложения пишите через форму ниже</p>

          <!-- Форма обратной связи -->
          <form action="#">
            <div class="form-row">
              <!-- Email пользователя -->
              <div class="form-group">
                <label for="email" class="control-label">E-mail</label>
                <input id="email" type="email" name="email" required="required" class="form-control" value="">
              </div>
              <!-- Имя пользователя -->
              <div class="form-group">
                <label for="message-theme" class="control-label">Тема сообщения</label>
                <input id="message-theme" type="text" name="message-theme" class="form-control" value="" minlength="2"
                  maxlength="30" required="required">
              </div>

            </div>
            <!-- Сообщение пользователя -->
            <div class="form-group">
              <label for="message" class="control-label">Сообщение</label>
              <textarea id="message" name="message" class="form-control" rows="3" minlength="20" maxlength="500"
                required="required"></textarea>
            </div>

            <div class="form-check">
              <input class="form-check-input" type="checkbox" name="agree" id="agree" required value="true">
              <label class="form-check-label" for="agree">Я даю согласие на обработку <a href="#">персональных
                  данных</a></label>
            </div>

            <button class="form-button">Отправить</button>

          </form>

        </div>
        <div class="contacts__info">
          <div class="info__email">
            <a href="mailto:roman@bodrii.ru">roman@bodrii.ru</a>
          </div>
          <p class="info__write">Напишите нам, если хотите стать <br> верстальщиком WebClad. Перед сдачей <br> проекта
            на проверку
            ознакомьтесь со статьей:</p>
          <div class="info__requirements">
            <a href="#">Требования к верстке</a>
          </div>
          <div class="info__telegram">
            <p class="telegram-link"><a href="t.me/Figmab">t.me/Figmab</a></p>
            <p class="telegram-offer">Вступайте в телеграм-сообщество</p>
          </div>
        </div>
      </div>
    </div>
  </section>

    <footer class="footer">
        <ul class="footer__links">
          <li class="footer__logo"></li>
          <li class="footer__item"><a href="https://yandex.ru/maps" class="footer__link">Политика<br>конфиденциальности</a></li>
          <li class="footer__item"><a class="footer__link">2023 © Все права защищены </a></li>
          <li class="footer__social">
            <div class="social-icons">
              <a v-for="social in socialMedia" :key="social.name" :href="social.link">
              <img :src="social.icon" :alt="social.name" />
              </a>
            </div>
          </li>
        </ul>
    </footer>
  </div>
</template>

<script>
import shopItem from '@/components/ShopItem.vue';
import { shopList } from '@/store/shop.js';

export default {
  components: { shopItem },
  data () {
    return {
      shopList,
      filter: "all",
      socialMedia: [
        { name: 'VK', link: 'https://vk.com', icon: 'VK.svg' },
        { name: 'Twitter', link: 'https://www.twitter.com', icon: 'iconTwitter.svg' },
        { name: 'youTube', link: 'https://www.YouTube.com', icon: 'YouTube.svg' },
        { name: 'Telegram', link: 'https://t.me/Figmab', icon: 'Telegram.svg' },
      ],
      page: {
        current: 1,
        length: 6,
      }
    }

  },
  computed: {
    
    filteredShopList() {
      if (this.filter === "all") {
        return this.shopList;
      } else {
        return this.shopList.filter((product) => product.level === this.filter);
      }
    },

    filteredAndPaginatedShopList() {
    const filteredList = this.filteredShopList;
    console.log(filteredList);
    return filteredList.filter((row, index) => {
      let start = (this.page.current - 1) * this.page.length;
      let end = this.page.current * this.page.length;
      return index >= start && index < end;
    });
  },

  },
  methods: {
    filterShop(filter) {
    this.filter = filter;
    // Apply filtering logic
    // ...

    // Reset current page to 1 or the last available page
    if (this.filteredShopList.length > this.page.length) {
      this.page.current = 1;
    } else {
      this.page.current = Math.ceil(this.filteredShopList.length / this.page.length);
    }
  },

    // Pagination
    prevPage () {
      if (this.page.current > 1) this.page.current-=1
    },
    nextPage () {
  const nextPageStartIndex = this.page.current * this.page.length;
  if (nextPageStartIndex < this.filteredShopList.length) {
    this.page.current += 1;
  }
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
  padding-top: 160px;
  z-index: 2;
  min-height: 100%;
}

.container__home h1,
.container__home p {
  position: relative; /* Нужно для позиционирования элементов над затемнением */
  z-index: 1; /* Чтобы текстовые элементы отображались над затемнением */
}

.container__home::before {
  content: '';
  position: absolute;
  left: -225px;
  top: -220px;
  width: 1920px;
  height: 900px;
  background-image: url(../assets/img/Фоновое_изображение_главной_стр.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  opacity: 0.25;
  z-index: -1;
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
  padding-bottom: 54px;
  color: #FFF;
  font-family: Montserrat;
  font-size: 54px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}

.container__shop {
  margin-top: 200px;
  position: relative;
}

.container__shop::before {
  background: linear-gradient(63deg, rgba(0, 0, 0, 0.20) 54.27%, rgba(56, 90, 177, 0.12) 87.54%), #070714;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  }

.container__social {
  color: #FFF;
  font-family: Montserrat;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 35px; /* 218.75% */
  position: relative; /* Нужно для позиционирования элементов над затемнением */
  z-index: 1; /* Чтобы текстовые элементы отображались над затемнением */
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

.item__wrapper {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-row-gap: 72px;
  grid-column-gap: 40px;

}

.shop__filter {
  display: inline-flex;
  height: 40.035px;
  padding-bottom: 130px;
  align-items: flex-end;
  gap: 40px;
  flex-shrink: 0;
}

.shop__item {
  text-align: center;
  background-color: rgba(26, 154, 214, 0.3);
  border-radius: 25px;
  color: white; 
  width: 160px;
  height: 45px;
  font-family: Montserrat;
  font-size: 20px;
  border:none;
  cursor: pointer;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}

.shop__item:hover {
  background-color: rgba(10, 205, 235, 0.3);
}

.button-list {
  width: 100%;
  text-align: center;
}

.btn {
    border-radius: 60px;
    margin: 0 20px;
  }

.btnPrimary {
    color: #ffffff;
    background-color: rgba(26, 154, 214, 0.3);
  }

.btn.btnPrimary:hover {
  background-color: rgba(84, 226, 248, 0.3);
}

.footer {
  display: flex;
  flex-direction: row;
  font-family: Montserrat;
  justify-content: center; /* изменено значение */
  margin: 130px auto 24px;
}

.footer__links {
    display: flex;
    list-style: none;
    justify-content: flex-start;
    margin-top: 0px;
    margin-bottom: 0px;
    margin-left: 0px;
    margin-right: 0px;
    padding-left: 0px;
  }

.footer__item {
  padding-left: 90px;
}

.footer__item:nth-child(3) {
  padding-left: 250px;
}

.footer__link {
    color: #FFF;
    justify-content: flex-start;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.12;
    text-decoration: none;
 }

.footer__logo {
    background-image: url(../assets/img/Лого.png);
    background-repeat: no-repeat;
    z-index: 4;
    /* ставим размеры для логотипа */
    width: 200px;
    height: 50px;
    /* вписываем png картинку в размеры, если получится поставить svg формат можно и убрать :) */
    object-fit: cover; /* Будёт плохо смотреться поставить contain */
    margin-left: 100px;
}

.footer__social {
  padding-left: 120px;
}

.contacts {
  background: linear-gradient(63deg, rgba(0, 0, 0, 0.20) 54.27%, rgba(56, 90, 177, 0.12) 90.13%), #070714;
  font-family: Montserrat, sans-serif;
}

.contacts__container {
  max-width: 1680px;
  margin: 0px auto;
  height: 829px;
  color: #FFF;
}

.contacts__title {
  font-size: 54px;
  font-weight: 700;
  padding-top: 40px;
  margin-bottom: 50px;
}

.contacts__content {
  display: flex;
  justify-content: space-between;
}

.form__title {
  font-size: 34px;
  font-weight: 600;
  line-height: 35px;
  margin-bottom: 32px;
}

.form__subtitle {
  margin-bottom: 84px;
}

.form__subtitle,
.info__requirements a,
.telegram-offer,
.form-check-label,
.form-check-label a,
.control-label,
.form-control {
  font-size: 25px;
  line-height: 35px;
  font-weight: 500;
}

.control-label,
.form-check-label,
.form-check-label a {
  color: #9C9191;
}

.control-label,
.form-check-label {
  text-align: start;
}

.form-control {
  background: rgba(0, 0, 0, 0.20);
  border: none;
  border-bottom: 3px solid #736C6C;
  color: #cccccc;
}

#email {
  width: 550px;
  margin-right: 80px;
  margin-bottom: 70px;
}

#message-theme {
  width: 345px;
}

#email,
#message-theme {
  padding: 0;
  border-radius: 0;
}

.form-row {
  display: flex;
  justify-content: space-between;
}

.form-group {
  display: flex;
  flex-direction: column;
}

.form-check {
  margin-top: 32px;
  margin-bottom: 58px;
}

#message {
  resize: none;
    padding: 0;
  border-radius: 0;
}

.form-check-input {
  display: none;
}

.form-check-input~label::before {
  content: '\2713';
  text-align: center;
  color: rgb(0, 0, 0);
  line-height: 1em;
  width: 28px;
  height: 28px;
  border: 1px solid #949191;
  margin-right: 15px;
  display: inline-block;
}

.form-check-input:checked~label::before {
  border: 3px solid #949191;
  color: #949191;
}

.form-button {
  color: #FFF;
  font-size: 20px;
  font-weight: 600;
  cursor: pointer;
  width: 183px;
  height: 42px;
  border-radius: 42px;
  background: linear-gradient(175deg, rgba(0, 0, 0, 0.10) 36%, rgba(0, 0, 0, 0.40) 96.69%), #0017E3;
  transition: 0.2s;
}

.form-button:hover {
  background: linear-gradient(175deg, rgba(0, 0, 0, 0.40) 96.69%, rgba(0, 0, 0, 0.10) 36%), #0017E3;
  transition: 0.2s;
}

.info__email a,
.telegram-link a {
  color: #FFF;
  font-size: 38px;
  font-weight: 700;
  line-height: 35px;
  text-decoration-line: none;
}

.info__email {
  margin-bottom: 28px;
}

.info__write {
  font-size: 22px;
  font-weight: 500;
  line-height: 30px;
  margin-bottom: 12px;
}

.info__requirements a {
  color: #FFF;
  font-size: 25px;
  font-weight: 500;
  line-height: 35px;
  text-decoration-line: underline;
}

.telegram-link {
  margin-top: 120px;
  margin-bottom: 14px;
}

.telegram-offer {
  font-weight: 400;
}

</style>