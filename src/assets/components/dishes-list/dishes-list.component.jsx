import { useContext } from 'react';
import { menuContext } from '../categories-list/categories-list.components';
import './dishes-list.style.css'


const DishesList = ({ props }) => {
    const context = useContext(menuContext);
    const { category } = context;
    const { removeDish } = props;
    return (
        <ul className="menu__dishes-list">
            {category.menu.map((dish, index) => {
                return (
                    <div className="menu__dishes-list_wrapper" key={index}>
                        <li className="menu__dishes-list_dish">{dish}</li>

                        <button
                            className="menu__dishes-list_remove"
                            onClick={() => { removeDish(index); }}
                        >&#10006;</button>
                    </div>
                )
            })}
        </ul>
    )
}

export default DishesList;