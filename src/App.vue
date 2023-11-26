<template>
  <div class="wrapper">

    <header>
      <div class="navbar">
        <div class="container">
          <div class="navbar-content">
            <div class="logo__box"><a class="logo" href="index.html"><img src="../src/assets/img/minlogo.svg" alt="WebClad">WebClad</a></div>
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
        { title: 'Контакты', url: '/contact' },
      ]
    }
  }
}
</script>

<style lang="scss">
@import "/assets/utils/vars.scss";
.navbar-item {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 140px;
  height: 40px;
  text-align: center;
  background-color: rgba(42, 113, 250, 0.30);
  border-radius: $border-radius;
  z-index: 4;
}

.navbar-item:hover {
  background-color: rgba(10, 205, 235, 0.3);
}

.wrapper {
  background-image: url(../src/assets/img/Фон_страницы.png); 
  background-size: cover;
}


.navbar-link {
  position: relative;
  font-family: $mainFont;
  font-size: 18px;
  font-weight: 700;


  &.router-link-exact-active {
    color: $mainFontColor;
  }
}

.logo {
  display: flex;
  align-items: center;
  font-family: $mainFont;
  font-size: 24px;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: 1px;
  color: $mainFontColor;
  margin-top: 20px;
  margin-bottom: 20px;
  position: relative;
  z-index: 4;
  img{
    display: inline-block;
    margin-right: 4px;
    z-index: 4;
  }
  &__box{
    margin: 20px 0;
  }
}
@media (max-width: 700px) {
  .logo__box{
    margin:  0;
    z-index: 5;
  }
  .navbar-list{
    margin-bottom: 20px;
  }
}

</style>
