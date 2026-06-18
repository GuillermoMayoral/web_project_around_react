import { useState, useContext } from 'react';
import { UserContext } from '../../../../contexts/CurrentUserContext';

export default function NewCard() {
    const { handleAddPlaceSubmit } = useContext(UserContext);

    const [title, setTitle] = useState('');
    const [link, setLink] = useState('');

    //error para la validacion
    const [titleError, setTitleError] = useState('');
    const [linkError, setLinkError] = useState('');

    const handleTitleChange = (event) => {
        setTitle(event.target.value);
        if (event.target.checkValidity()) {
            setTitleError('');
        } else {
            setTitleError(event.target.validationMessage);
        }
    };

    const handleLinkChange = (event) => {
        setLink(event.target.value);
        if (event.target.checkValidity()) {
            setLinkError('');
        } else {
            setLinkError(event.target.validationMessage);
        }
    };

    function handleSubmit(event) {
        event.preventDefault();

        const form = event.currentTarget;
        if (!form.checkValidity()) {
            setTitleError(form.elements.name.validationMessage);
            setLinkError(form.elements.link.validationMessage);
            return;
        }
        handleAddPlaceSubmit({
            name: title,
            link: link
        });

        setTitle('');
        setLink('');
        setTitleError('');
        setLinkError('');
    }

    return (
        <form className="popup__form" noValidate onSubmit={handleSubmit}>
            <input
                id="title-input"
                type="text"
                name="name"
                className="popup__name-input popup__input"
                placeholder="Titulo"
                required
                minLength="2"
                maxLength="30"
                value={title}
                onChange={handleTitleChange}
            />

            <span className={`popup__error title-input-error ${titleError ? 'popup__error_visible' : ''}`}>
                {titleError}
            </span>

            <input
                id="link-input"
                type="url"
                name="link"
                className="popup__description-input popup__input"
                placeholder="Enlace de la imagen"
                required
                value={link}
                onChange={handleLinkChange}
            />

            <span className={`popup__error link-input-error ${linkError ? 'popup__error_visible' : ''}`}>
                {linkError}
            </span>
            <button className="popup__button" type="submit">Crear</button>
        </form>
    );
}