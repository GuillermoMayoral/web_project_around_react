import { useContext, useState } from "react";
import { UserContext } from "../../../../contexts/CurrentUserContext";

export default function EditProfile() {
    const { currentUser, handleUpdateUser } = useContext(UserContext);

    const [name, setName] = useState(currentUser.name || "");
    const [description, setDescription] = useState(currentUser.about || "");


    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handleDescriptionChange = (event) => {
        setDescription(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        handleUpdateUser({ name, about: description });
    };

    return (
        <form className="popup__form" noValidate onSubmit={handleSubmit}>
            <input id="name-input" type="text" name="name" className="popup__name-input popup__input"
                placeholder="Nombre" required minLength="2" maxLength="40" value={name} onChange={handleNameChange} />

            <span className="popup__error name-input-error"></span>

            <input id="about-input" type="text" name="about"
                className="popup__description-input popup__input" placeholder="Acerca de mi" required
                minLength="2" maxLength="200" value={description} onChange={handleDescriptionChange} />

            <span className="popup__error about-input-error"></span>

            <button className="popup__button" type="submit">Guardar</button>
        </form>
    );
}