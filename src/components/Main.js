function Main(props) {
  return(
    <main className="content">
      <section className="profile">
        <button className="profile__avatar-edit" type="button" aria-label="Изменить аватар профиля"
                onClick={props.onEditAvatar}>
          <img className="profile__avatar" alt="Аватар профиля"/>
        </button>
        <div className="profile__info">
          <div className="profile__info-container">
            <h1 className="profile__name"></h1>
            <button className="profile__edit" type="button" aria-label="Редактировать профиль"
                    onClick={props.onEditProfile}></button>
          </div>
          <p className="profile__about"></p>
        </div>
        <button className="profile__card-add" type="button" aria-label="Добавить изображение"
                onClick={props.onAddPlace}></button>
      </section>
      <section className="cards" aria-label="Блок с изображениями"></section>
    </main>
  );
}

export default Main;