

export default function EditProfile() {
    return (
        <form className="popup__form" noValidate>
            <input id="name-input" type="text" name="name" className="popup__name-input popup__input"
                placeholder="Nombre" required minLength="2" maxLength="40" />

            <span className="popup__error name-input-error"></span>

            <input id="about-input" type="text" name="about"
                className="popup__description-input popup__input" placeholder="Acerca de mi" required
                minLength="2" maxLength="200" />

            <span className="popup__error about-input-error"></span>

            <button className="popup__button" type="submit">Guardar</button>
        </form>
    );
}