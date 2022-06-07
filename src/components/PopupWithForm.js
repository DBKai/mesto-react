function PopupWithForm(props) {
  function handleClosePopup(event) {
    if (event.target === event.currentTarget) props.onClose();
  }

  return(
    <div className={`popup popup_type_${props.name} ${props.isOpen && 'popup_opened'}`}
         onMouseDown={handleClosePopup}>
      <div className="popup__container">
        <button className="popup__close" type="button" aria-label="Закрыть попап"
                onClick={props.onClose}></button>
        <h2 className="popup__heading">{props.title}</h2>
        <form name={props.name} className="popup__form" noValidate>
          {props.children}
          <button className="popup__button popup__button_inactive" disabled>Сохранить</button>
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;