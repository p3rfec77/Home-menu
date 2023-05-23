import './header.styles.css'

const Header = () => {
    return (
        <header className="menu__header">
            <h1 className="menu__title">Home Menu</h1>
            <nav className="menu__navbar">
                <ul className="menu__title__categories">
                    <a href='#Завтраки' className="menu__title_category"><li>Завтраки</li></a>
                    <a href='#Холодные закуски' className="menu__title_category"><li>Основное меню</li></a>
                    <a href='#Десерты' className="menu__title_category"><li> Десерты</li></a>
                </ul>
            </nav>
        </header>
    )
};

export default Header;