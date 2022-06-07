import React from "react";
import { api } from "../utils/Api";

function Main(props) {
  const [userName, setUserName] = React.useState("");
  const [userDescription, setUserDescription] = React.useState("");
  const [userAvatar, setUserAvatar] = React.useState("");

  React.useEffect(() => {
    // Код выполнится при монтировании компонента
    Promise.all([api.getUserInfo(), api.getCards()])
      .then(([user, cards]) => {
        setUserName(user.name);
        setUserDescription(user.about);
        setUserAvatar(user.avatar);
      })
      .catch(err => {
        console.log(`Ошибка: ${ err }`);
      });
  });

  return(
    <main className="content">
      <section className="profile">
        <button className="profile__avatar-edit" type="button" aria-label="Изменить аватар профиля"
                onClick={props.onEditAvatar}>
          <img className="profile__avatar" alt="Аватар профиля" src={userAvatar}/>
        </button>
        <div className="profile__info">
          <div className="profile__info-container">
            <h1 className="profile__name">{userName}</h1>
            <button className="profile__edit" type="button" aria-label="Редактировать профиль"
                    onClick={props.onEditProfile}></button>
          </div>
          <p className="profile__about">{userDescription}</p>
        </div>
        <button className="profile__card-add" type="button" aria-label="Добавить изображение"
                onClick={props.onAddPlace}></button>
      </section>
      <section className="cards" aria-label="Блок с изображениями"></section>
    </main>
  );
}

export default Main;