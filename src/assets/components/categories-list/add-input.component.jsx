import { useState, useEffect, useContext } from "react";
import { menuContext } from "./categories-list.components";
import DishesList from "../dishes-list/dishes-list.component";

const AddInput = () => {

    const context = useContext(menuContext);
    let { categories, category } = context;
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
        category.menu = [...category.menu, inputValue];
        setinput(false);
    }

    const addDishOnKey = (e) => {
        if (e.key === 'Enter') {
            addDish();
            ChangeBtnState();
        }
    }

    const removeDish = (index) => {
        category.menu = [...category.menu.slice(0, index), ...category.menu.slice(index + 1)];
    }

    useEffect(() => {
        const downloadDishes = () => {
            const menuData = JSON.parse(localStorage.getItem('categories'))
            menuData.map(a => {
                if (a.name === category.name) {
                    category.menu = a.menu;
                    console.log()
                }
            })

            console.log(category.menu)
        };

        downloadDishes();
    }, [])


    // const removeFromLocaleStorage = () => {
    //     localStorage.removeItem(category.name, JSON.stringify(categories));
    // }

    return (
        <div>
            <DishesList props={{ removeDish }} />
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

            {/* <button onClick={addToLocaleStorage}>{`Обновить ${category.name}`}</button> */}
        </div>
    )
};

export default AddInput;