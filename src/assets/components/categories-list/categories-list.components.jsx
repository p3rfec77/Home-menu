import { useContext } from 'react';

import AddInput from './add-input.component';
import { MenuContext } from '../../context/menu.context';

import './categories-list.style.css'


const CategoriesList = () => {
    const { categories } = useContext(MenuContext);

    const addToLocaleStorage = () => {
        location.reload();
        return localStorage.setItem('categories', JSON.stringify(categories));
    };

    return (
        <section className="menu__categories-list">
            {categories.map(category => {
                const { index, name } = category;

                return (
                    <div key={index} className={'menu__category'} id={name}>
                        <h2 className="menu__category_title">{name}</h2>
                        <AddInput category={category} />
                    </div>
                )
            })}
            <button className='update-menu__btn' onClick={addToLocaleStorage}>обновить меню</button>
        </section>
    )
};

export default CategoriesList;