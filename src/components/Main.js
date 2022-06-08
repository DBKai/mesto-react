import React from "react";
import { api } from "../utils/api";
import Card from "./Card";

function Main({onEditAvatar, onEditProfile, onAddPlace, onCardClick}) {
  const [userName, setUserName] = React.useState("");
  const [userDescription, setUserDescription] = React.useState("");
  const [userAvatar, setUserAvatar] = React.useState("");
  const [cards, setCards] = React.useState([]);
  const cardsElements = cards.map((card) => {
    return <Card key={card._id} card={card} onCardClick={onCardClick} />
  });

  React.useEffect(() => {
    // Код выполнится один раз при монтировании компонента
    Promise.all([api.getUserInfo(), api.getCards()])
      .then(([user, cards]) => {
        setUserName(user.name);
        setUserDescription(user.about);
        setUserAvatar(user.avatar);
        setCards(cards);
      })
      .catch(err => {
        console.log(`Ошибка: ${err}`);
      });
  }, []);

  return(
    <main className="content">
      <section className="profile">
        <button className="profile__avatar-edit"
                type="button"
                aria-label="Изменить аватар профиля"
                onClick={onEditAvatar}>
          <img className="profile__avatar" alt="Аватар профиля" src={userAvatar}/>
        </button>
        <div className="profile__info">
          <div className="profile__info-container">
            <h1 className="profile__name">{userName}</h1>
            <button className="profile__edit"
                    type="button"
                    aria-label="Редактировать профиль"
                    onClick={onEditProfile}></button>
          </div>
          <p className="profile__about">{userDescription}</p>
        </div>
        <button className="profile__card-add"
                type="button"
                aria-label="Добавить изображение"
                onClick={onAddPlace}></button>
      </section>
      <section className="cards" aria-label="Блок с изображениями">{cardsElements}</section>
    </main>
  );
}

export default Main;