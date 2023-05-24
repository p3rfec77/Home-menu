const DishesList = ({ props }) => {
    const { dishes, removeDish } = props;
    return (
        <ul className="menu__dishes-list">
            {dishes.map((dish, index) => {
                return (
                    <div className="menu__dishes-list_wrapper" key={index}>
                        <li className="menu__dishes-list_dish">{dish}</li>

                        <button
                            className="menu__dishes-list_remove"
                            onClick={() => removeDish(index)}
                        >&#10006;</button>
                    </div>
                )
            })}
        </ul>
    )
}

export default DishesList;