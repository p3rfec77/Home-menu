import AddInput from './add-input.component';
import './categories-list.style.css'

const CategoriesList = ({ categories }) => {
    return (
        <section className="menu__categories-list">
            {categories.map(category => {
                return (
                    <div key={category.index} className={'menu__category'} id={category.name}>
                        <h2 className="menu__category_title">{category.name}</h2>
                        <AddInput CategoryName={category.name} />
                    </div>
                )
            })}
        </section>
    )
};

export default CategoriesList;