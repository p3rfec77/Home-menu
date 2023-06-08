import { useState, useEffect, useContext } from "react";

import { MenuContext } from "../../context/menu.context";

import DishesList from "../dishes-list/dishes-list.component";
import AddingDishField from "../adding-dish-field/adding-dish-field.component";

const AddInput = ({ category }) => {
    const { setCategories, addDishToMenu } = useContext(MenuContext);
    const { menu } = category;
    const [input, setinput] = useState(false);
    const [isBtnShown, setIsBtnShown] = useState(true);
    const [inputValue, setInputValue] = useState('');

    const toggleInput = () => setinput(!input);

    const toggleBtn = () => {
        setIsBtnShown(!isBtnShown);
    };

    const onInputChange = (e) => {
        setInputValue(e.target.value);
    }

    const addDish = () => {
        addDishToMenu(category, inputValue);
        setinput(false);
    }

    const addDishOnKey = (e) => {
        if (e.key === 'Enter') {
            addDish();
            toggleBtn();
        }
    }

    useEffect(() => {
        const menuData = JSON.parse(localStorage.getItem('categories'));
        if (menuData) {
            setCategories(menuData);
        }
    }, []);

    return (
        <div>
            <DishesList menu={menu} category={category} />
            {isBtnShown &&
                <button
                    className='menu__category_add-btn'
                    onClick={() => { toggleInput(); toggleBtn() }}
                >+</button>
            }

            {input && <AddingDishField
                addDishOnKey={addDishOnKey}
                onInputChange={onInputChange}
                addDish={addDish}
                toggleBtn={toggleBtn}
                toggleInput={toggleInput}
            />}
        </div>
    )
};

export default AddInput;