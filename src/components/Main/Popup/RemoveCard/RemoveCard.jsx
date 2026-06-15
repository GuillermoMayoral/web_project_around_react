import React from 'react';


//export default function RemoveCard({ isOpen, onClose, onSubmit }) {
export default function RemoveCard({ onSubmit }) {

    function handleSubmit(evt) {
        evt.preventDefault();
        if (onSubmit) {
            onSubmit();
        }
    }

    return (
        <form className="popup__form" noValidate onSubmit={handleSubmit}>
            <p className="popup__title popup__title_type_confirm">¿Estás seguro?</p>
            <button className="popup__button" type="submit">Sí</button>
        </form>
    );
}