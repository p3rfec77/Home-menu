import { createContext, useState } from 'react';
import AddInput from './add-input.component';
import './categories-list.style.css'

export const menuContext = createContext();

const CategoriesList = ({ categories }) => {
    const addToLocaleStorage = () => {
        localStorage.setItem('categories', JSON.stringify(categories));
    }
    return (
        <section className="menu__categories-list">
            {categories.map(category => {
                return (
                    <div key={category.index} className={'menu__category'} id={category.name}>
                        <h2 className="menu__category_title">{category.name}</h2>
                        <menuContext.Provider value={{ categories, category }}>
                            <AddInput />
                        </menuContext.Provider>
                    </div>
                )
            })}
            <button onClick={addToLocaleStorage}>обновить меню</button>
        </section>
    )
};

export default CategoriesList;