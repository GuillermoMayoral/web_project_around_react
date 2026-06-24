import { useContext, useState } from "react";
import { UserContext } from "../../../../contexts/CurrentUserContext";

export default function EditProfile() {
    const { currentUser, handleUpdateUser } = useContext(UserContext);

    const [name, setName] = useState(currentUser.name || "");
    const [description, setDescription] = useState(currentUser.about || "");

    //error para la validacion
    const [nameError, setNameError] = useState('');
    const [descriptionError, setDescriptionError] = useState('');



    const handleNameChange = (event) => {
        setName(event.target.value);
        if (event.target.checkValidity()) {
            setNameError('');
        } else {
            setNameError(event.target.validationMessage);
        }
    };

    const handleDescriptionChange = (event) => {
        setDescription(event.target.value);
        if (event.target.checkValidity()) {
            setDescriptionError('');
        } else {
            setDescriptionError(event.target.validationMessage);
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        if (!form.checkValidity()) {
            setNameError(form.elements.name.validationMessage);
            setDescriptionError(form.elements.description.validationMessage);
            return;
        }
        handleUpdateUser({ name, about: description });
    };

    const isButtonDisabled = nameError || descriptionError || !name || !description;

    return (
        <form className="popup__form" noValidate onSubmit={handleSubmit}>
            <input id="name-input" type="text" name="name" className="popup__name-input popup__input"
                placeholder="Nombre" required minLength="2" maxLength="40" value={name} onChange={handleNameChange} />

            <span className={`popup__error name-input-error ${nameError ? 'popup__error_visible' : ''}`}>{nameError}</span>

            <input id="about-input" type="text" name="about"
                className="popup__description-input popup__input" placeholder="Acerca de mi" required
                minLength="2" maxLength="200" value={description} onChange={handleDescriptionChange} />

            <span className={`popup__error about-input-error ${descriptionError ? 'popup__error_visible' : ''}`}>{descriptionError}</span>

            <button className="popup__button" type="submit" disabled={isButtonDisabled}>Guardar</button>
        </form>
    );
}