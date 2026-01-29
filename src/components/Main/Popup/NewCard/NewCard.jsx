

export default function NewCard() {

    return (
        <form className="popup__form" noValidate>
            <input id="title-input" type="text" name="name" className="popup__name-input popup__input"
                placeholder="Titulo" required minLength="2" maxLength="30" />

            <span className="popup__error title-input-error"></span>

            <input id="link-input" type="url" name="link" className="popup__description-input popup__input"
                placeholder="Enlace de la imagen" required />

            <span className="popup__error link-input-error"></span>

            <button className="popup__button" type="submit">Crear</button>
        </form>
    )
}