import { useContext, useRef, useState } from "react";
import { UserContext } from "../../../../contexts/CurrentUserContext";

export default function EditAvatar() {
    const { handleUpdateAvatar } = useContext(UserContext);
    const avatarRef = useRef();

    //error para la validacion
    const [avatarError, setAvatarError] = useState('');

    function handleSubmit(e) {
        e.preventDefault();

        const input = avatarRef.current;
        if (!input.checkValidity()) {
            setAvatarError(input.validationMessage);
            return;
        }
        handleUpdateAvatar({
            avatar: avatarRef.current.value
        });

        setAvatarError('');
    }
    return (
        <form className="popup__form" noValidate onSubmit={handleSubmit}>
            <input id="link-input-avatar" type="url" name="link"
                className="popup__description-input popup__input popup__input-avatar"
                placeholder="Enlace de la imagen" required ref={avatarRef} />
            <span className={`popup__error link-input-avatar-error ${avatarError ? 'popup__error_visible' : ''}`}>{avatarError}</span>
            <button className="popup__button" type="submit">Guardar</button>
        </form>
    )
}