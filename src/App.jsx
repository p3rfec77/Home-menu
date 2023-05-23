import { useState } from 'react'
import './App.css'
import Header from './assets/components/header/header.component'
import CategoriesList from './assets/components/categories-list/categories-list.components';

const App = () => {
  const categories = [
    { name: 'Завтраки', index: 0 },
    { name: 'Холодные закуски', index: 1 },
    { name: 'Горячие закуски', index: 2 },
    { name: 'Салаты', index: 3 },
    { name: 'Супы', index: 4 },
    { name: 'Горячие блюда', index: 5 },
    { name: 'Гаринры', index: 6 },
    { name: 'Десерты', index: 7 }
  ];

  return (
    <div className='menu__wrapper'>
      <Header />
      <CategoriesList categories={categories} />
    </div>
  )
};

export default App
