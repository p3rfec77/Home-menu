import './categories-list.style.css'

const CategoriesList = ({ categories }) => {

    return (
        <section className="menu__categories-list">
            {categories.map((category) => {
                return (
                    <div key={category.name} className={'menu__category'} id={category.name}>
                        <h2 className="menu__category_title">{category.name}</h2>
                        <button className="menu__category_add-btn">+</button>
                    </div>
                )
            })}
        </section>
    )
};

export default CategoriesList;