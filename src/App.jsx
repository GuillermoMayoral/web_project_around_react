import logo from './images/title.svg';
import imgButtonEdit from './images/button-edit.png';
import imgButtonAdd from './images/profile-add.svg';
import avatar from './images/placeholder-usuario.png';

function App() {

  return (
    <>
      <div className="page">
        <div className="page__size">
          <header className="header">
            <div className="header__content">
              <img className="header__logo" src={logo} alt="Titulo de la pagina"></img>
              <hr className="header__line"></hr>
            </div>
          </header>

          <main className="content">
            <section className="profile">

              <div className="profile__data">
                <div className="profile__photo-container">
                  <img src={avatar} alt="foto de perfil" className="profile__photo"></img>
                </div>
                <div className="profile__text">
                  <div className="profile__header">
                    <h2 className="profile__name">Memo Mayoral</h2>
                    <button className="profile__edit-button" type="button">
                      <img className="profile__edit-image" src={imgButtonEdit} alt="editar nombre y descripcion"></img>
                    </button>
                  </div>
                  <p className="profile__description">Estudiante</p>
                </div>
              </div>
              <button className="profile__button" type="button">
                <img className="profile__button-image" src={imgButtonAdd} alt="signo de mas"></img>
              </button>
            </section>
            <section className="post">
              <ul className="post__cards">
              </ul>
            </section>
          </main>

          <footer className="footer">
            <p className="footer__text">&copy; 2024 Around The U.S.</p>
          </footer>
        </div>
      </div>
    </>
  )
}

export default App
