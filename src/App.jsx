import React from 'react';
import { useState, createContext } from 'react';
import './App.css'
import Header from './assets/components/header/header.component'
import CategoriesList from './assets/components/categories-list/categories-list.components';

const App = () => {
  const categories = [
    { name: 'Завтраки', menu: [], index: 0 },
    { name: 'Основное меню', menu: [], index: 1 },
    { name: 'Десерты', menu: [], index: 2 },
  ];

  return (
    <div className='menu__wrapper'>
      <Header />
      <CategoriesList categories={categories} />
    </div>
  )
};

export default App
