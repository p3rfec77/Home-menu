import { useState } from "react";

const AddInput = ({ categories }) => {
    const [input, setinput] = useState(false);
    const showInput = () => {
        setinput(true);
    };
    const hideInput = () => {
        setinput(false);
    };

    return (
        <div>
            <button className="menu__category_add-btn" onClick={showInput}>+</button>
            {input &&
                <div className="menu__category_add-dish">
                    <input className='menu__add-dish-text' placeholder='Введите блюдо...'></input>
                    <button className="menu__add-dish_add-btn">V</button>
                    <button className="menu__add-dish_cancel-btn" onClick={hideInput}>X</button>
                </div>}
        </div>
    )
};

export default AddInput;