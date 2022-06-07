function ImagePopup(props) {
  return(
    <div className="popup popup_type_image-view">
      <div className="popup__image-container">
        <button className="popup__close" type="button" aria-label="Закрыть попап"></button>
        <img className="popup__image" alt="" />
        <p className="popup__caption"></p>
      </div>
    </div>
  );
}

export default ImagePopup;