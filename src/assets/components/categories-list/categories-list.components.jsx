import { useState } from 'react';
import './categories-list.style.css'

const CategoriesList = ({ categories }) => {

    const [input, setinput] = useState(false);
    const showInput = () => {
        setinput(true);
    }

    return (
        <section className="menu__categories-list">
            {categories.map(category => {
                return (
                    <div key={category.index} className={'menu__category'} id={category.name}>
                        <h2 className="menu__category_title">{category.name}
                            <button className="menu__category_add-btn" onClick={showInput}>+</button>
                        </h2>
                        {input && <input className='menu__add-dish' placeholder='Введите блюдо...'></input>}
                    </div>
                )
            })}
        </section>
    )
};

export default CategoriesList;