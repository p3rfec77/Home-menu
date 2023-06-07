import React from 'react';
import './App.css'
import Header from './assets/components/header/header.component'
import CategoriesList from './assets/components/categories-list/categories-list.components';

const App = () => {

  return (
    <div className='menu__wrapper'>
      <Header />
      <CategoriesList />
    </div>
  )
};

export default App
