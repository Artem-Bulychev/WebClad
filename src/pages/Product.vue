<template>
  <div class="wrapper-content wrapper-content--fixed ">
    <section class="product-modal">
      <div class="container">
        <p class="modal__title">Оставить заявку</p>
        <div class="product">
          <!-- Form -->
          <form class="form">
            <div>
              <label class="form__lable">Ваше ФИО<input class="form__input" type="text"  /></label>
              <label class="form__lable">Ваш номер телефона<input class="form__input" type="tel"  /></label>
              <label class="form__lable">Исполнитель<input class="form__input" type="text"  /></label>
            </div>
            <div>
              <label class="form__lable">Ваш E-MAIL адрес<input class="form__input" type="email"  /></label>
              <label class="form__lable">Ваш комментарий<input class="form__input" type="text"  /></label>
              <button class="btn btnPrimary form__btn" type="submit">
                Отправить заявку
              </button> 
            </div>
          </form>

          <div class="product__box"> 
            <h1 class="product__title">{{ product.title }}</h1>
            <!-- slider -->
            <div class="product-slider">
              <carousel
                :perPage="1"
                :paginationEnable="true"
                paginationColor="#b3b3b3"
                paginationActiveColor="#494ce8">
                <slide v-for="(slide, index) in product.gallery" :key="index">
                  <img class="product-slider__img" :src="slide.img" :alt="slide.name">
                </slide>
              </carousel>
            </div>

            <!-- content -->
            <div class="product-content">
              <p class="product-content__descr">{{ product.descr }}</p>
              <a class="product-content__link link"><img class="product-content__icon" src="../assets/img/figma-icon.svg" alt="figma icon">Ссылка на макет</a>
              <p class="product-content__info-title">Сложность:<span class="product-content__info">{{ product.level }}</span></p>
              <p class="product-content__info-title">Язык:<span class="product-content__info">RUS</span></p>
              <p class="product-content__info-title">Исполнитель:<span class="product-content__info">Имя и Фамилия</span></p>
              <p class="product-content__info-title">Стоимость:<span class="product-content__info">6000₽</span></p>

            </div>
          </div>
        </div> 
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      product: null
    }
  },
  created () {
    // console.log({route: this.$route, id: this.$route.params.id})
    let id = this.$route.params.id
    this.product = this.$store.getters.getProduct(id)
  }
}
</script>

<style lang="scss">
.wrapper-content,
.product-modal{
  background-color: #0F0F26;
}
.modal__title{
  font-size: 64px;
  font-weight: 700;
  line-height: 64px;
  color: #FFF;
  padding-top: 156px;
  margin-bottom: 75px;
}
.product{
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  &__title{
    font-family: Montserrat;
    font-size: 50px;
    font-weight: 700;
    line-height: normal;
    color: #FFF;
    margin-top: -125px;
    margin-bottom: 25px;
  }
}
  .product-slider{
  &__img{
    width: 100%;
    max-width: 600px;
    border-radius: 25px;
  }
}
.product-content {
  color: #FFF;
  font-weight: 500;
  line-height: normal;
		&__descr {
      font-size: 30px;
      margin-bottom: 50px;
		}
		&__link {
      font-size: 25px;
      font-weight: 500;
      text-decoration-line: underline;
    }
    &__icon{
      margin-right: 10px;
    }
    &__info{
      font-size: 20px;
      text-decoration-line: underline;
      margin-left: 10px;
		}
		&__info-title {
      font-size: 25px;
      font-weight: 600;
      margin: 20px 0;
		}
}
// .product-slider,
// .product-content {
//   width: 48%;
//   max-width: 48%;
//   text-align: center;
// }
.form{
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  div{
    margin-right:25px;
  }
  &__lable{
    max-width: 320px;
    display: block;
    font-size: 17px;
    line-height: 26px;
    color: rgba(255, 255, 255, 0.70);
    margin-bottom: 4px; 
  }
  &__input{
    border: 1.5px solid rgba(255, 255, 255, 0.20);
    border-radius: 41px;
    background: rgba(255, 255, 255, 0.10);
    box-shadow: 0px 0px 38px 0px rgba(255, 255, 255, 0.05);
    font-size: 17px;
    color: #fff;
    padding: 15px 20px;
    margin-bottom: 19px;
  }
  &__btn{
    display: inline-block;
    width: 100%;
    max-width: 320px;
    font-size: 17px;
    font-weight: 400;
    line-height: 26px;
    margin: 32px 0 0 0;
  }
}
</style>
