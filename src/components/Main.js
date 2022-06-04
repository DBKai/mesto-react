function Main(props) {
  return(
    <main className="content">
      <section className="profile">
        <button className="profile__avatar-edit" type="button" aria-label="Изменить аватар профиля">
          <img className="profile__avatar" alt="Аватар профиля"/>
        </button>
        <div className="profile__info">
          <div className="profile__info-container">
            <h1 className="profile__name"></h1>
            <button className="profile__edit" type="button" aria-label="Редактировать профиль"></button>
          </div>
          <p className="profile__about"></p>
        </div>
        <button className="profile__card-add" type="button" aria-label="Добавить изображение"></button>
      </section>
      <section className="cards" aria-label="Блок с изображениями"></section>
    </main>
  );
}

export default Main;