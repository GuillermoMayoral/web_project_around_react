import { useContext, useRef, useState } from "react";
import { UserContext } from "../../../../contexts/CurrentUserContext";

export default function EditAvatar() {
    const { handleUpdateAvatar } = useContext(UserContext);
    const avatarRef = useRef();

    //error para la validacion
    const [avatarError, setAvatarError] = useState('');
    const [isButtonDisabled, setIsButtonDisabled] = useState(true);

    const handleInputChange = () => {
        const input = avatarRef.current;

        if (input.checkValidity()) {
            setAvatarError('');
            setIsButtonDisabled(false);
        } else {
            setAvatarError(input.validationMessage);
            setIsButtonDisabled(true);
        }
    };

    function handleSubmit(e) {
        e.preventDefault();

        const input = avatarRef.current;
        if (!input.checkValidity()) {
            return;
        }
        handleUpdateAvatar({
            avatar: avatarRef.current.value
        });

        setAvatarError('');
        setIsButtonDisabled(true);
    }
    return (
        <form className="popup__form" noValidate onSubmit={handleSubmit}>
            <input id="link-input-avatar" type="url" name="link"
                className="popup__description-input popup__input popup__input-avatar"
                placeholder="Enlace de la imagen" required ref={avatarRef} onChange={handleInputChange} />
            <span className={`popup__error link-input-avatar-error ${avatarError ? 'popup__error_visible' : ''}`}>{avatarError}</span>
            <button className="popup__button" type="submit" disabled={isButtonDisabled}>Guardar</button>
        </form>
    )
}