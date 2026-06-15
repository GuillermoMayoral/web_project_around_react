import { useState, useContext } from 'react';
import { UserContext } from '../../../../contexts/CurrentUserContext';

export default function NewCard() {
    const { handleAddPlaceSubmit } = useContext(UserContext);

    const [title, setTitle] = useState('');
    const [link, setLink] = useState('');

    const handleTitleChange = (event) => {
        setTitle(event.target.value);
    };

    const handleLinkChange = (event) => {
        setLink(event.target.value);
    };

    function handleSubmit(event) {
        event.preventDefault();

        handleAddPlaceSubmit({
            name: title,
            link: link
        });

        setTitle('');
        setLink('');
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

            <span className="popup__error title-input-error"></span>

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

            <span className="popup__error link-input-error"></span>

            <button className="popup__button" type="submit">Crear</button>
        </form>
    );
}