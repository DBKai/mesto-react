import PopupWithForm from "./PopupWithForm";
import {useEffect, useRef, useState} from "react";

function EditAvatarPopup({isOpen, onClose, onUpdateAvatar}) {
  const avatarRef = useRef();
  const [isValid, setIsValid] = useState(false);
  const [isValidAvatar, setIsValidAvatar] = useState(true);
  const [avatarError, setAvatarError] = useState("");
  const avatarErrorClassName = (`popup__item-error ${!isValidAvatar && "popup__item_type_error"}`);

  function handleSubmit(event) {
    event.preventDefault();

    onUpdateAvatar({
      avatar: avatarRef.current.value
    });
  }

  function handleChange(event) {
    const input = event.target;
    const form = input.closest('.popup__form');
    setIsValidAvatar(input.validity.valid);
    setAvatarError(input.validationMessage);
    setIsValid(form.checkValidity());
  }

  useEffect(() => {
    avatarRef.current.value = "";
    setIsValidAvatar(true);
    setIsValid(false);
  }, [isOpen]);

  return(
    <PopupWithForm
      name="avatar"
      title="Обновить аватар"
      submitBtnText="Сохранить"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      isValid={isValid}>
      <input
        ref={avatarRef}
        id="avatar-link"
        name="avatar"
        className="popup__item"
        type="url"
        placeholder="Ссылка на аватар"
        required
        onChange={handleChange}/>
      <span id="avatar-link-error" className={avatarErrorClassName}>{avatarError}</span>
    </PopupWithForm>
  );
}

export default EditAvatarPopup;