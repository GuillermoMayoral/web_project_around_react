import { useState, useEffect, useContext } from 'react';

import imgButtonEdit from '../../images/button-edit.png';
import imgButtonAdd from '../../images/profile-add.svg';
import avatar from '../../images/placeholder-usuario.png';

import Popup from './Popup/Popup.jsx';
import NewCard from './Popup/NewCard/NewCard.jsx';
import EditProfile from './Popup/EditProfile/EditProfile.jsx';
import EditAvatar from './Popup/EditAvatar/EditAvatar.jsx';
import ImagePopup from './Popup/BigImagePopup/BigImagePopup.jsx';
import Card from './Card/Card.jsx';

//importando api
import api from '../../utils/api.js';

//context
import { UserContext } from '../../contexts/CurrentUserContext.jsx';


function Main(props) {

    //cards
    const [cards, setCards] = useState([]);
    console.log(cards);

    useEffect(() => {
        api.getInitialCards()
            .then((cardData) => {
                setCards(cardData)
            })
            .catch((err) => {
                console.log(`Error al cargar las tarjetas con .then: ${err}`);
            })
    }, []);

    //context
    const { currentUser } = useContext(UserContext);

    //funciones de manejo
    function handleCardClick(clickedCardData) {
        props.onOpenPopup({
            title: null,
            children: <ImagePopup card={clickedCardData} />
        });
    }

    //control de likes
    async function handleCardLike(card) {
        const isLiked = card.isLiked;

        // Debido a que yo maanejo en mi api dos metodos para dar o quitar like, verifico cual usar en base a si es true o false el like
        const apiRequest = isLiked ? api.disLikeCard(card._id) : api.likeCard(card._id);

        await apiRequest
            .then((newCard) => {
                setCards((state) =>
                    state.map((currentCard) => currentCard._id === card._id ? newCard : currentCard)
                );
            })
            .catch((error) => console.error(`Error al procesar el like: ${error}`));
    }

    //borrado de tarjetas
    function handleCardDelete(card) {
        api.deleteCard(card._id)
            .then(() => {
                setCards((state) => state.filter((currentCard) => currentCard._id !== card._id));
            })
            .catch((error) => console.error(`Error al eliminar tarjeta: ${error}`));
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
                    {cards.map((card) => (
                        <Card key={card._id} card={card} onCardClick={handleCardClick} onCardLike={handleCardLike} onCardDelete={handleCardDelete} />
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