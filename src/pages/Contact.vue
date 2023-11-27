<template>
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
</template>

<script>
  export default {
    
  }
</script>

<style>
.contacts {
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