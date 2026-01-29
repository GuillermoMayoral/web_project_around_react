

export default function EditAvatar() {
    return (
        <form className="popup__form" noValidate>
            <input id="link-input-avatar" type="url" name="link"
                className="popup__description-input popup__input popup__input-avatar"
                placeholder="Enlace de la imagen" required />
            <span className="popup__error link-input-avatar-error"></span>
            <button className="popup__button" type="submit">Guardar</button>
        </form>
    )
}