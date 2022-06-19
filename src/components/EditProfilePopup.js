import PopupWithForm from "./PopupWithForm";
import React from "react";
import CurrentUserContext from "../contexts/CurrentUserContext";

function EditProfilePopup({isOpen, onClose, onUpdateUser}) {
  const [name, setName] = React.useState("");
  const [description, setDescription] = React.useState("");
  const currentUser = React.useContext(CurrentUserContext);

  function handleChangeName(event) {
    setName(event.target.value);
  }

  function handleChangeDescription(event) {
    setDescription(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();

    onUpdateUser({
      name: name,
      about: description
    });
  }

  React.useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser]);

  return (
    <PopupWithForm
      name="profile"
      title="Редактировать профиль"
      submitBtnText="Сохранить"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}>
      <input
        id="profile-name"
        name="name"
        className="popup__item"
        type="text"
        placeholder="Имя"
        minLength="2"
        maxLength="40"
        value={name}
        onChange={handleChangeName}
        required />
      <span id="profile-name-error" className="popup__item-error"></span>
      <input
        id="profile-about"
        name="about"
        className="popup__item"
        type="text"
        placeholder="О себе"
        minLength="2"
        maxLength="200"
        value={description}
        onChange={handleChangeDescription}
        required />
      <span id="profile-about-error" className="popup__item-error"></span>
    </PopupWithForm>
  )
}

export default EditProfilePopup;