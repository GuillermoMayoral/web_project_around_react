import trahsIcon from '../../../images/Trash.svg';

export default function Card(props) {
    const { name, link } = props.card;

    return (

        <li className="post__card">
            <div className="post__trash-container">
                <img src={trahsIcon} alt="icono basura" className="post__trash" />
            </div>
            <img className="post__images" src={link} alt={name} onClick={() => props.onCardClick(props.card)} />
            <div className="post__description">
                <h2 className="post__title">{name}</h2>
                <button type="button" className="post__icon"></button>
            </div>
        </li>

    );
}