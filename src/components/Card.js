function Card({card, onCardClick}) {
  function handleClick() {
    onCardClick(card);
  }

  return(
    <article className="card">
      <button className="card__remove"
              type="button"
              aria-label="Удалить изображение"></button>
      <img className="card__image"
           src={card.link}
           alt={card.name}
           onClick={handleClick}/>
      <div className="card__caption">
        <h2 className="card__title">{card.name}</h2>
        <div className="card__like-container">
          <button
            className="card__like"
            type="button"
            aria-label="Отметить изображение как понравившееся"></button>
          <p className="card__like-count">{card.likes.length}</p>
        </div>
      </div>
    </article>
  );
}

export default Card;