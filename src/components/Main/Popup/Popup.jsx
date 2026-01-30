import closeIcon from '../../../images/popup-close-Icon.svg';

export default function Popup(props) {
    const { title, children, onClose } = props;

    return (
        <div className="popup">
            <div className={`${!title ? "big-image__box" : "popup__box"}`}>


                <img className={`${!title ? "big-image__close" : "popup__close"}`} src={closeIcon} alt="Cerrar" onClick={onClose} />

                <div className={`${!title ? "big-image__image" : "popup__container"}`}>
                    {title && <h2 className="popup__title">{title}</h2>}

                    {children}
                </div>
            </div>
        </div>
    )
}