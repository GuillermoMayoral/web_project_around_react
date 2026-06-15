import { useContext } from 'react';

import imgButtonEdit from '../../images/button-edit.png';
import imgButtonAdd from '../../images/profile-add.svg';
import avatar from '../../images/placeholder-usuario.png';

import Popup from './Popup/Popup.jsx';
import NewCard from './Popup/NewCard/NewCard.jsx';
import EditProfile from './Popup/EditProfile/EditProfile.jsx';
import EditAvatar from './Popup/EditAvatar/EditAvatar.jsx';
import ImagePopup from './Popup/ImagePopup/ImagePopup.jsx';
import Card from './Card/Card.jsx';

//context
import { UserContext } from '../../contexts/CurrentUserContext';


function Main(props) {

    //context
    const { currentUser } = useContext(UserContext);

    //funciones de manejo
    function handleCardClick(clickedCardData) {
        props.onOpenPopup({
            title: null,
            children: <ImagePopup card={clickedCardData} />
        });
    }


    return (
        <main className="content">
            <section className="profile">

                <div className="profile__data">
                    <div className="profile__photo-container" onClick={() => props.onOpenPopup(props.editAvatarPopup)}>
                        <img src={currentUser.avatar || avatar} alt="foto de perfil" className="profile__photo" ></img>
                    </div>
                    <div className="profile__text">
                        <div className="profile__header">
                            <h2 className="profile__name">{currentUser.name || "Usuario"}</h2>
                            <button className="profile__edit-button" type="button" onClick={() => props.onOpenPopup(props.editProfilePopup)}>
                                <img className="profile__edit-image" src={imgButtonEdit} alt="editar nombre y descripcion"></img>
                            </button>
                        </div>
                        <p className="profile__description">{currentUser.about || "descripcion vacia"}</p>
                    </div>
                </div>
                <button className="profile__button" type="button" onClick={() => props.onOpenPopup(props.newCardPopup)}>
                    <img className="profile__button-image" src={imgButtonAdd} alt="signo de mas"></img>
                </button>
            </section>
            <section className="post">
                <ul className="post__cards">
                    {props.cards.map((card) => (
                        <Card key={card._id} card={card} onCardClick={handleCardClick} onCardLike={props.onCardLike} onCardDelete={props.onCardDelete} />
                    ))}
                </ul>
            </section>
            {props.popup && (
                <Popup onClose={props.onClosePopup} title={props.popup.title}>
                    {props.popup.children}
                </Popup>
            )}
        </main>
    );
}

export default Main;