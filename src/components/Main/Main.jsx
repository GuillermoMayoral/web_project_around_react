import imgButtonEdit from '../../images/button-edit.png';
import imgButtonAdd from '../../images/profile-add.svg';
import avatar from '../../images/placeholder-usuario.png';
import { useState } from 'react';
import Popup from './Popup/Popup.jsx';
import NewCard from './Popup/NewCard/NewCard.jsx';
import EditProfile from './Popup/EditProfile/EditProfile.jsx';
import EditAvatar from './Popup/EditAvatar/EditAvatar.jsx';


function Main() {
    const [popup, setPopup] = useState(null);
    const newCardPopup = { title: "Nuevo Lugar", children: <NewCard /> };
    const editProfilePopup = { title: "Editar Perfil", children: <EditProfile /> };
    const editAvatarPopup = { title: "Editar Avatar", children: <EditAvatar /> };

    function handleOpenPopup(popup) {
        setPopup(popup);
    }

    function handleClosePopup() {
        setPopup(null);
    }

    return (
        <main className="content">
            <section className="profile">

                <div className="profile__data">
                    <div className="profile__photo-container" onClick={() => handleOpenPopup(editAvatarPopup)}>
                        <img src={avatar} alt="foto de perfil" className="profile__photo" ></img>
                    </div>
                    <div className="profile__text">
                        <div className="profile__header">
                            <h2 className="profile__name">Memo Mayoral</h2>
                            <button className="profile__edit-button" type="button" onClick={() => handleOpenPopup(editProfilePopup)}>
                                <img className="profile__edit-image" src={imgButtonEdit} alt="editar nombre y descripcion"></img>
                            </button>
                        </div>
                        <p className="profile__description">Estudiante</p>
                    </div>
                </div>
                <button className="profile__button" type="button" onClick={() => handleOpenPopup(newCardPopup)}>
                    <img className="profile__button-image" src={imgButtonAdd} alt="signo de mas"></img>
                </button>
            </section>
            <section className="post">
                <ul className="post__cards">
                </ul>
            </section>
            {popup && <Popup onClose={handleClosePopup} title={popup.title}>
                {popup.children}
            </Popup>}
        </main>
    );
}

export default Main;