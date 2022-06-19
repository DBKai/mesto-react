import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";
import React from "react";
import { api } from "../utils/api";
import CurrentUserContext from "../contexts/CurrentUserContext";
import EditProfilePopup from "./EditProfilePopup";

function App() {
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({});
  const [currentUser, setCurrentUser] = React.useState({});

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

  function handleUpdateUser() {
    api.setUserInfo({
      name: currentUser.name,
      about: currentUser.about
    })
      .then(res => {
        currentUser.name = res.name;
        currentUser.about = res.about;
        closeAllPopups();
      });
  }

  React.useEffect( () => {
    // Код выполнится один раз при монтировании компонента
    function handleEscClose(event) {
      if (event.key === "Escape") {
        closeAllPopups();
      }
    }

    api.getUserInfo()
      .then(user => {
        setCurrentUser({
          _id: user._id,
          name: user.name,
          about: user.about,
          avatar: user.avatar
        });
      })
      .catch(err => {
        console.log(`Ошибка: ${ err }`);
      });

    document.addEventListener('keyup', handleEscClose);

    return () => {
      document.removeEventListener('keyup', handleEscClose);
    };
  }, []);

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <Header />
      <Main
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}
        onCardClick={handleCardClick} />
      <Footer />
      <PopupWithForm
        name="avatar"
        title="Обновить аватар"
        submitBtnText="Сохранить"
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}>
        <input
          id="avatar-link"
          name="avatar"
          className="popup__item"
          type="url"
          placeholder="Ссылка на аватар"
          required />
        <span id="avatar-link-error" className="popup__item-error"></span>
      </PopupWithForm>
      <EditProfilePopup
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
        onUpdateUser={handleUpdateUser}/>
      <PopupWithForm
        name="card"
        title="Новое место"
        submitBtnText="Создать"
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}>
        <input
          id="card-name"
          name="name"
          className="popup__item"
          type="text"
          placeholder="Название"
          minLength="2"
          maxLength="30"
          required />
        <span id="card-name-error" className="popup__item-error"></span>
        <input
          id="card-link"
          name="link"
          className="popup__item"
          type="url"
          placeholder="Ссылка на картинку"
          required />
        <span id="card-link-error" className="popup__item-error"></span>
      </PopupWithForm>
      <ImagePopup card={selectedCard} onClose={closeAllPopups}/>
    </CurrentUserContext.Provider>
  );
}

export default App;
