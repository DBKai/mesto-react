import PopupWithForm from "./PopupWithForm";
import React from "react";
import CurrentUserContext from "../contexts/CurrentUserContext";

function EditAvatarPopup({isOpen, onClose, onUpdateAvatar}) {
  const avatarRef = React.useRef();
  const currentUser = React.useContext(CurrentUserContext);

  function handleSubmit(event) {
    event.preventDefault();

    onUpdateAvatar({
      avatar: avatarRef.current.value
    });
  }

  React.useEffect(() => {
    avatarRef.current.value = currentUser.avatar;
  }, [currentUser]);

  return(
    <PopupWithForm
      name="avatar"
      title="Обновить аватар"
      submitBtnText="Сохранить"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}>
      <input
        ref={avatarRef}
        id="avatar-link"
        name="avatar"
        className="popup__item"
        type="url"
        placeholder="Ссылка на аватар"
        required />
      <span id="avatar-link-error" className="popup__item-error"></span>
    </PopupWithForm>
  );
}

export default EditAvatarPopup;