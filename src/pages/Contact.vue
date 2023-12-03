<template>
	<section class="contacts" id="contact">
		<div class="container">
			<h2 class="contacts__title">Контакты</h2>
			<div class="contacts__content">
				<div class="contacts__form">
					<h3 class="form__title">Обратная связь</h3>
					<p class="form__subtitle">Любые отзывы и предложения пишите через форму ниже</p>

					<!-- Форма обратной связи -->
					<form action="#">
						<div class="form__row">
							<!-- Email пользователя -->
							<div class="form__group">
								<label for="email" class="form__label form__label_contacts">E-mail</label>
								<input id="email" type="email" name="email" required="required" class="form__control" value="" />
							</div>
							<!-- Имя пользователя -->
							<div class="form__group">
								<label for="message-theme" class="form__label form__label_contacts">Тема сообщения</label>
								<input id="message-theme" type="text" name="message-theme" class="form__control" value="" minlength="2" maxlength="30" required="required" />
							</div>
						</div>
						<!-- Сообщение пользователя -->
						<div class="form__group form__group_message">
							<label for="message" class="form__label form__label_contacts">Сообщение</label>
							<textarea id="message" name="message" class="form__control" rows="3" minlength="20" maxlength="500" required="required"></textarea>
						</div>

						<div class="form__check">
							<input class="form__check_input" type="checkbox" name="agree" id="agree" required value="true" />
							<label class="form__check_label" for="agree">Я даю согласие на обработку <a href="#">персональных данных</a></label>
						</div>

						<button class="btn btnPrimary form__btn">Отправить</button>
					</form>
				</div>
				<div class="contacts__info">
					<div class="info__email">
						<a href="mailto:roman@bodrii.ru">roman@bodrii.ru</a>
					</div>
					<p class="info__write">Напишите нам, если хотите стать верстальщиком WebClad. <span>Перед сдачей проекта на проверку ознакомьтесь со статьей:</span></p>
					<div class="info__requirements">
						<a href="#">Требования к верстке</a>
					</div>
					<div class="info__telegram">
						<p class="info__telegram-link"><a href="t.me/Figmab">t.me/Figmab</a></p>
						<p class="info__telegram-offer">Вступайте в <span>телеграм-сообщество</span></p>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
export default {};
</script>
