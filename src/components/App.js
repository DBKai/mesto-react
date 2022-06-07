import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";
import React from "react";

function App() {
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false);
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false);

  function handleEditAvatarClick() {
    setEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setAddPlacePopupOpen(true);
  }

  function closeAllPopups() {
    setEditAvatarPopupOpen(false);
    setEditProfilePopupOpen(false);
    setAddPlacePopupOpen(false);
  }

  React.useEffect( () => {
    function handleEscClose(event) {
      if (event.key === "Escape") {
        closeAllPopups();
      }
    }

    document.addEventListener('keyup', handleEscClose);
  });

  return (
    <div className="page">
      <Header />
      <Main onEditProfile={handleEditProfileClick}
            onAddPlace={handleAddPlaceClick}
            onEditAvatar={handleEditAvatarClick} />
      <Footer />
      <PopupWithForm name="avatar" title="Обновить аватар"
                     isOpen={isEditAvatarPopupOpen}
                     onClose={closeAllPopups} />
      <PopupWithForm name="profile" title="Редактировать профиль"
                     isOpen={isEditProfilePopupOpen}
                     onClose={closeAllPopups} />
      <PopupWithForm name="card" title="Новое место"
                     isOpen={isAddPlacePopupOpen}
                     onClose={closeAllPopups} />
      <ImagePopup />

      <template id="card-template">
        <article className="card">
          <button className="card__remove" type="button" aria-label="Удалить изображение"></button>
          <img className="card__image" />
            <div className="card__caption">
              <h2 className="card__title"></h2>
              <div className="card__like-container">
                <button className="card__like" type="button" aria-label="Отметить изображение как понравившееся"></button>
                <p className="card__like-count">0</p>
              </div>
            </div>
        </article>
      </template>
  </div>
);
}

export default App;
