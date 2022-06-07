function ImagePopup(props) {
  function handleClosePopup(event) {
    if (event.target === event.currentTarget) props.onClose();
  }

  return(
    <div className={`popup popup_type_image-view ${props.card._id && 'popup_opened'}`}
         onMouseDown={handleClosePopup}>
      <div className="popup__image-container">
        <button className="popup__close" type="button" aria-label="Закрыть попап"
                onClick={props.onClose}></button>
        <img className="popup__image" alt={props.card.name} src={props.card.link} />
        <p className="popup__caption">{props.card.name}</p>
      </div>
    </div>
  );
}

export default ImagePopup;