import Header from './Header';
import Main from './Main';
import Footer from './Footer';

function App() {
  return (
    <div class="page">
      <Header />
      <Main />
      <Footer />
      <div class="popup popup_type_profile">
        <div class="popup__container">
          <button class="popup__close" type="button" aria-label="Закрыть окно редактирования профиля"></button>
          <h2 class="popup__heading">Редактировать профиль</h2>
          <form name="profile-form" class="popup__form" novalidate>
            <fieldset class="popup__item-container">
              <input type="text" id="profile-name" name="name" class="popup__item"
                     placeholder="Имя" minlength="2" maxlength="40" required />
                <span id="profile-name-error" class="popup__item-error"></span>
                <input type="text" id="profile-about" name="about" class="popup__item"
                       placeholder="О себе" minlength="2" maxlength="200" required />
                  <span id="profile-about-error" class="popup__item-error"></span>
            </fieldset>
            <button class="popup__button">Сохранить</button>
          </form>
        </div>
      </div>
      <div class="popup popup_type_card">
        <div class="popup__container">
          <button class="popup__close" type="button" aria-label="Закрыть окно добавления карточки"></button>
          <h2 class="popup__heading">Новое место</h2>
          <form name="card-form" class="popup__form" novalidate>
            <fieldset class="popup__item-container">
              <input type="text" id="card-name" name="name" class="popup__item"
                     placeholder="Название" minlength="2" maxlength="30" required />
                <span id="card-name-error" class="popup__item-error"></span>
                <input type="url" id="card-link" name="link" class="popup__item"
                       placeholder="Ссылка на картинку" required />
                  <span id="card-link-error" class="popup__item-error"></span>
            </fieldset>
            <button class="popup__button popup__button_inactive" disabled>Создать</button>
          </form>
        </div>
      </div>
      <div class="popup popup_type_image-view">
        <div class="popup__image-container">
          <button class="popup__close" type="button" aria-label="Закрыть окно просмотра карточки"></button>
          <img class="popup__image" />
            <p class="popup__caption"></p>
        </div>
      </div>
      <div class="popup popup_type_confirm">
        <div class="popup__container">
          <button class="popup__close" type="button" aria-label="Закрыть окно подтверждения"></button>
          <h2 class="popup__heading">Вы уверены?</h2>
          <form name="card-form" class="popup__form" novalidate>
            <button class="popup__button">Да</button>
          </form>
        </div>
      </div>
      <div class="popup popup_type_avatar">
        <div class="popup__container">
          <button class="popup__close" type="button" aria-label="Закрыть окно изменения аватара"></button>
          <h2 class="popup__heading">Обновить аватар</h2>
          <form name="avatar-form" class="popup__form" novalidate>
            <fieldset class="popup__item-container">
              <input type="url" id="avatar-link" name="avatar" class="popup__item"
                     placeholder="Ссылка на аватар" required />
                <span id="avatar-link-error" class="popup__item-error"></span>
            </fieldset>
            <button class="popup__button popup__button_inactive" disabled>Сохранить</button>
          </form>
        </div>
      </div>
      <template id="card-template">
        <article class="card">
          <button class="card__remove" type="button" aria-label="Удалить изображение"></button>
          <img class="card__image" />
            <div class="card__caption">
              <h2 class="card__title"></h2>
              <div class="card__like-container">
                <button class="card__like" type="button" aria-label="Отметить изображение как понравившееся"></button>
                <p class="card__like-count">0</p>
              </div>
            </div>
        </article>
      </template>
  </div>
);
  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );
}

export default App;
