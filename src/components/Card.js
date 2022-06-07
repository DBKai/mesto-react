function Card(props) {
  function handleClick() {
    props.onCardClick(props.card);
  }

  return(
    <article className="card">
      <button className="card__remove" type="button" aria-label="Удалить изображение"></button>
      <img className="card__image" src={props.card.link} alt={props.card.name} onClick={handleClick}/>
      <div className="card__caption">
        <h2 className="card__title">{props.card.name}</h2>
        <div className="card__like-container">
          <button className="card__like" type="button" aria-label="Отметить изображение как понравившееся"></button>
          <p className="card__like-count">{props.card.likes.length}</p>
        </div>
      </div>
    </article>
  );
}

export default Card;