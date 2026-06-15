import { useContext, useRef } from "react";
import { UserContext } from "../../../../contexts/CurrentUserContext";

export default function EditAvatar() {
    const { handleUpdateAvatar } = useContext(UserContext);
    const avatarRef = useRef();

    function handleSubmit(e) {
        e.preventDefault();
        handleUpdateAvatar({
            avatar: avatarRef.current.value
        });
    }
    return (
        <form className="popup__form" noValidate onSubmit={handleSubmit}>
            <input id="link-input-avatar" type="url" name="link"
                className="popup__description-input popup__input popup__input-avatar"
                placeholder="Enlace de la imagen" required ref={avatarRef} />
            <span className="popup__error link-input-avatar-error"></span>
            <button className="popup__button" type="submit">Guardar</button>
        </form>
    )
}