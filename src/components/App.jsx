import Header from "./Header/Header.jsx"
import Main from "./Main/Main.jsx"
import Footer from "./Footer/Footer.jsx"
import { useState, useEffect } from 'react';
//popups
import NewCard from './Main/Popup/NewCard/NewCard.jsx';
import EditProfile from './Main/Popup/EditProfile/EditProfile.jsx';
import EditAvatar from './Main/Popup/EditAvatar/EditAvatar.jsx';
//api
import api from '../utils/api.js';
//contexto
import { UserContext } from "../contexts/CurrentUserContext.js";

function App() {
  const [currentUser, setCurrentUser] = useState({});

  // Levantado de estado de popup y card
  const [popup, setPopup] = useState(null);
  const [cards, setCards] = useState([]);

  const newCardPopup = { title: "Nuevo lugar", children: <NewCard /> };
  const editProfilePopup = { title: "Editar Perfil", children: <EditProfile /> };
  const editAvatarPopup = { title: "Editar Avatar", children: <EditAvatar /> };

  // Levantado de funciones de popups y card
  function handleOpenPopup(popupConfig) {
    setPopup(popupConfig);
  }

  function handleClosePopup() {
    setPopup(null);
  }

  useEffect(() => {
    api.getUserInfo()
      .then((userInfo) => {
        setCurrentUser(userInfo);
      })
      .catch((err) => {
        console.log(`Error de usuario .then: ${err}`);
      })
  }, []);

  const handleUpdateUser = (data) => {
    api.setUserInfo(data.name, data.about)
      .then((newData) => {
        setCurrentUser(newData);
        //cerrado de popup
        handleClosePopup();
      })
      .catch((err) => console.error(`Error al actualizar usuario: ${err}`));
  };
  //cargado de tarjetas
  useEffect(() => {
    api.getInitialCards()
      .then((cardData) => {
        setCards(cardData)
      })
      .catch((err) => {
        console.log(`Error al cargar las tarjetas con .then: ${err}`);
      })
  }, []);

  //funciones de manejo

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

  //actualizar tarjetas
  const handleAddPlaceSubmit = (cardData) => {
    api.addCard(cardData.name, cardData.link)
      .then((newCard) => {
        setCards([newCard, ...cards]);
        handleClosePopup();
      })
      .catch((err) => console.error(`Error al crear la tarjeta: ${err}`));
  };

  //Actualizar avatar
  const handleUpdateAvatar = (data) => {

    api.updateAvatar(data.avatar)
      .then((newData) => {
        setCurrentUser(newData);
        handleClosePopup();
      })
      .catch((err) => console.error(`Error al actualizar el avatar: ${err}`));
  };

  return (
    <UserContext.Provider value={{ currentUser, handleUpdateUser, handleUpdateAvatar, handleAddPlaceSubmit }}>
      <div className="page">
        <div className="page__size">
          {/* Header component would be here */}
          <Header />
          {/* Main component would be here */}
          <Main
            popup={popup}
            onOpenPopup={handleOpenPopup}
            onClosePopup={handleClosePopup}
            editProfilePopup={editProfilePopup}
            editAvatarPopup={editAvatarPopup}
            newCardPopup={newCardPopup}
            cards={cards}
            onCardLike={handleCardLike}
            onCardDelete={handleCardDelete}
          />
          {/* Footer component would be here */}
          <Footer />
        </div>
      </div>
    </UserContext.Provider>
  )
}

export default App
