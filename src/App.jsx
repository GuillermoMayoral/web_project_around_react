import Header from "./components/Header/Header"
import Main from "./components/Main/Main"
import Footer from "./components/Footer/Footer"
import { useState, useEffect } from 'react';
//popups
import NewCard from './components/Main/Popup/NewCard/NewCard.jsx';
import EditProfile from './components/Main/Popup/EditProfile/EditProfile.jsx';
import EditAvatar from './components/Main/Popup/EditAvatar/EditAvatar.jsx';
//api
import api from './utils/api';
//contexto
import { UserContext } from "./contexts/CurrentUserContext";

function App() {
  const [currentUser, setCurrentUser] = useState({});

  // Levantado de estado de popup
  const [popup, setPopup] = useState(null);

  const newCardPopup = { title: "Nuevo lugar", children: <NewCard /> };
  const editProfilePopup = { title: "Editar Perfil", children: <EditProfile /> };
  const editAvatarPopup = { title: "Editar Avatar", children: <EditAvatar /> };

  // Levantado de funciones de popups
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
    <UserContext.Provider value={{ currentUser, handleUpdateUser, handleUpdateAvatar }}>
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
          />
          {/* Footer component would be here */}
          <Footer />
        </div>
      </div>
    </UserContext.Provider>
  )
}

export default App
