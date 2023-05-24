import { useState } from "react";

const AddInput = ({ props }) => {
    const { dishes, setDishes } = props;

    const [input, setinput] = useState(false);
    const [btnState, setBtnState] = useState('menu__category_add-btn_visible');
    const [inputValue, setInputValue] = useState('');
    const showInput = () => {
        setinput(true);
    };
    const hideInput = () => {
        setinput(false);
    };

    const ChangeBtnState = () => {
        if (!input) {
            setBtnState('menu__category_add-btn_hidden');
        } else {
            setBtnState('menu__category_add-btn_visible');
        }
    };

    const onInputChange = (e) => {
        setInputValue(e.target.value);
    }

    const addDish = () => {
        setDishes([...dishes, inputValue]);
        setinput(false);
    }

    const addDishOnKey = (e) => {
        if (e.key === 'Enter') {
            addDish();
            ChangeBtnState();
        }
    }

    return (
        <div>
            <button
                className={`menu__category_add-btn ${btnState}`}
                onClick={() => { showInput(); ChangeBtnState() }}
            >+</button>

            {input &&
                <div className="menu__category_add-dish">
                    <input
                        className='menu__add-dish-text'
                        placeholder='Введите блюдо...'
                        autoFocus={true}
                        onChange={onInputChange}
                        onKeyDown={addDishOnKey}
                    />

                    <button
                        className="menu__add-dish_add-btn"
                        onClick={() => { addDish(); ChangeBtnState() }}
                        onKeyDown={addDishOnKey}
                    >&#10004;</button>

                    <button
                        className="menu__add-dish_cancel-btn"
                        onClick={() => { hideInput(); ChangeBtnState() }}
                    >&#10006;</button>
                </div>}
        </div>
    )
};

export default AddInput;