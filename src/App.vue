<template>
  <div class="wrapper">

    <header>
      <div class="navbar">
        <div class="container">
          <div class="navbar-content">
            <div class="logo"></div>
            <ul class="navbar-list">
              <li class="navbar-item" v-for="link in links" :key="link.title">
                <router-link class="navbar-link" :title="link.title" :to="link.url">{{ link.title }}</router-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>

    <router-view></router-view>

    <!-- <footer></footer> -->

  </div>
</template>

<script>
export default {
  data () {
    return {
      links: [
        { title: 'Главная', url: '/' },
        { title: 'Макеты', url: '/shop' },
        { title: 'Контакты', url: '/shop' },
      ]
    }
  }
}
</script>

<style lang="scss">

.navbar-content {
  min-width: 1450px;
}

.wrapper {
  background-image: url(../src/assets/img/Фон_страницы.png); 
  background-size: cover;
}


.navbar-link {
  position: relative;
  background-color: rgba(42, 113, 250, 0.30);
  border-radius: 25px;
  width: 140px;
  height: 35px;
  text-align: center;

  &.router-link-exact-active {
    color: #ffffff;
  }
}

.logo {
  background-image: url(../src/assets/img/Лого.png);
  background-repeat: no-repeat;
  margin-top: 40px;
  margin-bottom: 40px;
   /* ставим размеры для логотипа */
  width: 200px;
  height: 50px;
   /* вписываем png картинку в размеры, если получится поставить svg формат можно и убрать :) */
  object-fit: cover; /* Будёт плохо смотреться поставить contain */
}
</style>
