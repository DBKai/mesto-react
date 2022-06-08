import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";
import React from "react";

function App() {
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({});

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard({});
  }

  function handleCardClick(clickedCard) {
    setSelectedCard(clickedCard)
  }

  React.useEffect( () => {
    function handleEscClose(event) {
      if (event.key === "Escape") {
        closeAllPopups();
      }
    }

    document.addEventListener('keyup', handleEscClose);

    return () => {
      document.removeEventListener('keyup', handleEscClose);
    };
  }, []);

  return (
    <>
      <Header />
      <Main onEditProfile={handleEditProfileClick}
            onAddPlace={handleAddPlaceClick}
            onEditAvatar={handleEditAvatarClick}
            onCardClick={handleCardClick} />
      <Footer />
      <PopupWithForm name="avatar"
                     title="Обновить аватар"
                     submitBtnText="Сохранить"
                     isOpen={isEditAvatarPopupOpen}
                     onClose={closeAllPopups}>
        <input id="avatar-link"
               name="avatar"
               className="popup__item"
               type="url"
               placeholder="Ссылка на аватар"
               required />
        <span id="avatar-link-error" className="popup__item-error"></span>
      </PopupWithForm>
      <PopupWithForm name="profile"
                     title="Редактировать профиль"
                     submitBtnText="Сохранить"
                     isOpen={isEditProfilePopupOpen}
                     onClose={closeAllPopups}>
        <input id="profile-name"
               name="name"
               className="popup__item"
               type="text"
               placeholder="Имя"
               minLength="2"
               maxLength="40"
               required />
        <span id="profile-name-error" className="popup__item-error"></span>
        <input id="profile-about"
               name="about"
               className="popup__item"
               type="text"
               placeholder="О себе"
               minLength="2"
               maxLength="200"
               required />
        <span id="profile-about-error" className="popup__item-error"></span>
      </PopupWithForm>
      <PopupWithForm name="card"
                     title="Новое место"
                     submitBtnText="Создать"
                     isOpen={isAddPlacePopupOpen}
                     onClose={closeAllPopups}>
        <input id="card-name"
               name="name"
               className="popup__item"
               type="text"
               placeholder="Название"
               minLength="2"
               maxLength="30"
               required />
        <span id="card-name-error" className="popup__item-error"></span>
        <input id="card-link"
               name="link"
               className="popup__item"
               type="url"
               placeholder="Ссылка на картинку"
               required />
        <span id="card-link-error" className="popup__item-error"></span>
      </PopupWithForm>
      <ImagePopup card={selectedCard} onClose={closeAllPopups}/>
    </>
  );
}

export default App;
