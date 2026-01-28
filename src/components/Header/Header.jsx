import logo from '../../images/title.svg';

function Header() {
    return (
        <header className="header">
            <div className="header__content">
                <img className="header__logo" src={logo} alt="Titulo de la pagina"></img>
                <hr className="header__line"></hr>
            </div>
        </header>
    );
}

export default Header;