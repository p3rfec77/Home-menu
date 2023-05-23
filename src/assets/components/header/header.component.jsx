import './header.styles.css'

const Header = () => {
    return (
        <header className="menu__header">
            <h1 className="menu__title">Home Menu</h1>
            <nav className="menu__navbar">
                <ul className="menu__categories">
                    <a href='#' className="menu__category"><li>Завтраки</li></a>
                    <a href='#' className="menu__category"><li>Основное меню</li></a>
                    <a href='#' className="menu__category"><li> Десерты</li></a>
                </ul>
            </nav>
        </header>
    )
};

export default Header;