
export default function BigImagePopup(props) {
    const { name, link } = props.card;

    return (

        <>
            <img
                src={link}
                alt={name}
                className="big-image__image"
                style={{ maxWidth: "75vw", maxHeight: "75vh" }} // Ajuste temporal
            />
            <p className="popup__image-caption">{name}</p>
        </>

    )
};
