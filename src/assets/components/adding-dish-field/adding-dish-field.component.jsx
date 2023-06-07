import './adding-dish-field.styles.css'

const AddingDishField = ({ onInputChange, addDishOnKey, addDish, toggleBtn, toggleInput }) => {
    return (
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
                onClick={() => { addDish(); toggleBtn() }}
                onKeyDown={addDishOnKey}
            >&#10004;</button>

            <button
                className="menu__add-dish_cancel-btn"
                onClick={() => { toggleInput(); toggleBtn() }}
            >&#10006;</button>
        </div>
    )
};

export default AddingDishField;