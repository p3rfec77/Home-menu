import { useState } from 'react';
import AddInput from './add-input.component';
import DishesList from '../dishes-list/dishes-list.component';
import './categories-list.style.css'

const CategoriesList = ({ categories }) => {
    const [dishes, setDishes] = useState([]);

    const removeDish = (index) => {
        setDishes([...dishes.slice(0, index), ...dishes.slice(index + 1)])
    }

    return (
        <section className="menu__categories-list">
            {categories.map(category => {
                return (
                    <div key={category.index} className={'menu__category'} id={category.name}>
                        <h2 className="menu__category_title">{category.name}</h2>
                        <DishesList props={{ dishes, removeDish }} />
                        <AddInput props={{ dishes, setDishes }} />
                    </div>
                )
            })}
        </section>
    )
};

export default CategoriesList;