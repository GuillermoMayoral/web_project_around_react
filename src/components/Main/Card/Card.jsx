import trahsIcon from '../../../images/Trash.svg';

export default function Card(props) {
    const { name, link, isLiked } = props.card;

    // Verifica si el usuario actual le ha dado "like" a la tarjeta
    const cardLikeButtonClassName = `post__icon ${isLiked ? 'post__icon-active' : ''
        }`;

    //controlador de like (manda la tarjeta presionada)
    function handleLikeClick() {
        props.onCardLike(props.card);
    }

    //controlador para borrar tarjeta
    function handleDeleteClick() {
        props.onCardDelete(props.card)
    }

    return (

        <li className="post__card">
            <div className="post__trash-container">
                <img src={trahsIcon} alt="icono basura" className="post__trash" onClick={handleDeleteClick} />
            </div>
            <img className="post__images" src={link} alt={name} onClick={() => props.onCardClick(props.card)} />
            <div className="post__description">
                <h2 className="post__title">{name}</h2>
                <button type="button" className={cardLikeButtonClassName} onClick={handleLikeClick}></button>
            </div>
        </li>

    );
}