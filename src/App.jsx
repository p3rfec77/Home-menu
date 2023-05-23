import { useState } from 'react'
import './App.css'
import Header from './assets/components/header/header.component'
import CategoriesList from './assets/components/categories-list/categories-list.components';

const App = () => {
  const categories = [
    { name: 'Завтраки' },
    { name: 'Холодные закуски' },
    { name: 'Горячие закуски' },
    { name: 'Салаты' },
    { name: 'Супы' },
    { name: 'Горячие блюда' },
    { name: 'Гаринры' },
    { name: 'Десерты' }
  ];

  return (
    <div className='menu__wrapper'>
      <Header />
      <CategoriesList categories={categories} />
    </div>
  )
};

export default App
