import { useState, useEffect } from 'react';

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

/*const cards = [
    {
        isLiked: false,
        _id: '5d1f0611d321eb4bdcd707dd',
        name: 'Yosemite Valley',
        link: 'https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_yosemite.jpg',
        owner: '5d1f0611d321eb4bdcd707dd',
        createdAt: '2019-07-05T08:10:57.741Z',
    },
    {
        isLiked: false,
        _id: '5d1f064ed321eb4bdcd707de',
        name: 'Lake Louise',
        link: 'https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lake-louise.jpg',
        owner: '5d1f0611d321eb4bdcd707dd',
        createdAt: '2019-07-05T08:11:58.324Z',
    },
];
*/

function Main() {
    const [popup, setPopup] = useState(null);
    const newCardPopup = { title: "Nuevo lugar", children: <NewCard /> };
    const editProfilePopup = { title: "Editar Perfil", children: <EditProfile /> };
    const editAvatarPopup = { title: "Editar Avatar", children: <EditAvatar /> };

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


    function handleOpenPopup(popup) {
        setPopup(popup);
    }

    function handleClosePopup() {
        setPopup(null);
    }

    function handleCardClick(clickedCardData) {
        setPopup({
            title: null, // Sin título para activar el modo imagen en Popup.jsx
            children: <ImagePopup card={clickedCardData} /> // Pasamos LA CARTA ESPECÍFICA
        });
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
                    {cards.map((card) => (
                        <Card key={card._id} card={card} onCardClick={handleCardClick} />
                    ))}
                </ul>
            </section>
            {popup && <Popup onClose={handleClosePopup} title={popup.title}>
                {popup.children}
            </Popup>}
        </main>
    );
}

export default Main;