import { Fragment } from "react";

import './dish.styles.css';


const Dish = ({ removeDish, dish }) => {
    return (
        <Fragment>
            <li className="menu__dishes-list_dish">{dish}</li>

            <button
                className="menu__dishes-list_remove"
                onClick={removeDish}
            >&#10006;</button>
        </Fragment>
    )
};

export default Dish;