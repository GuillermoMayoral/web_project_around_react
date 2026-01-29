import closeIcon from '../../../images/popup-close-Icon.svg';

export default function Popup(props) {
    const { title, children, onClose } = props;
    return (
        <div className="popup">
            <div className="popup__box">
                <img className="popup__close" src={closeIcon} alt="icono de cerrado X" onClick={onClose}></img>
                <div className="popup__container">
                    <h2 className="popup__title">{title}</h2>

                    {children}

                </div>
            </div>
        </div>
    )
}