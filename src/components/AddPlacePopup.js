import PopupWithForm from "./PopupWithForm";
import React from "react";

function AddPlacePopup({isOpen, onClose, onAddPlace}) {
  const [name, setName] = React.useState("");
  const [link, setLink] = React.useState("");

  function handleChangeName(event) {
    setName(event.target.value);
  }

  function handleChangeLink(event) {
    setLink(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();

    onAddPlace({
      name: name,
      link: link
    });
  }

  return(
    <PopupWithForm
      name="card"
      title="Новое место"
      submitBtnText="Создать"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}>
      <input
        id="card-name"
        name="name"
        className="popup__item"
        type="text"
        placeholder="Название"
        minLength="2"
        maxLength="30"
        onChange={handleChangeName}
        required />
      <span id="card-name-error" className="popup__item-error"></span>
      <input
        id="card-link"
        name="link"
        className="popup__item"
        type="url"
        placeholder="Ссылка на картинку"
        onChange={handleChangeLink}
        required />
      <span id="card-link-error" className="popup__item-error"></span>
    </PopupWithForm>
  );
}

export default AddPlacePopup;