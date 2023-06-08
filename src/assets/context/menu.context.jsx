import { createContext, useState } from "react";

const BASE = [
    { name: 'Завтраки', menu: [], index: 0 },
    { name: 'Основное меню', menu: [], index: 1 },
    { name: 'Десерты', menu: [], index: 2 },
];

const addDish = (categories, categoryToAdd, dishToAdd) => {
    return (
        categories.map(category => (
            category.index === categoryToAdd.index
                ? { ...category, menu: [...category.menu, dishToAdd] }
                : category
        ))
    );
}

const removeDish = (categories, categoryRemoveFrom, dishToRemove) => {

    return (
        categories.map(category => (
            category.index === categoryRemoveFrom.index
                ? { ...category, menu: category.menu.filter((dish) => dish !== dishToRemove) }
                : category
        ))
    );
}

export const MenuContext = createContext({
    categories: [],
    setCategories: () => { },
    addDishToMenu: () => { },
    removeDishFromMenu: () => { }
});

export const MenuProvider = ({ children }) => {
    const [categories, setCategories] = useState(BASE);

    const addDishToMenu = (categoryToAdd, dishToAdd) => {
        setCategories(addDish(categories, categoryToAdd, dishToAdd));
    }

    const removeDishFromMenu = (categoryRemoveFrom, dishToRemove) => {
        setCategories(removeDish(categories, categoryRemoveFrom, dishToRemove));
    }

    const value = {
        categories,
        setCategories,
        addDishToMenu,
        removeDishFromMenu
    }
    return (
        <MenuContext.Provider value={value}>{children}</MenuContext.Provider>
    )
}