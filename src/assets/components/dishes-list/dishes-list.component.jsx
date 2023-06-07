import { useContext } from 'react'

import { MenuContext } from '../../context/menu.context'

import Dish from '../dish/dish.component'

import './dishes-list.style.css'


const DishesList = ({ menu, category }) => {
    const { removeDishFromMenu } = useContext(MenuContext);

    return (
        <ul className="menu__dishes-list">
            {menu.map((dish, index) => {
                const removeDish = () => removeDishFromMenu(category, dish);

                return (
                    <div className="menu__dishes-list_wrapper" key={index}>
                        {dish && <Dish removeDish={removeDish} dish={dish} />}
                    </div>
                )
            })}
        </ul>
    )
}

export default DishesList;