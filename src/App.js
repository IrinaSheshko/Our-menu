import React, { useState } from 'react';
import data from "./data";
import './App.css';
import Menu from './Menu';
import Categories from './Categories';
const allCategories = ['all', ...new Set(data.map((item) => item.category))];

function App() {
  const [menuItems, setMenuItems] = useState(data);
 
  const [categories] = useState(allCategories);

const filterItems = (category) => {
  if (category === "all") {
    setMenuItems(data);
    return;
  }

  const newItems = data.filter((item) => item.category === category);
  setMenuItems(newItems);
};
     
  return (
    <div>
        <div>
        <div className="title">
          <h2>our menu</h2>
          <div className="underline"></div>
        </div>
        </div>
        <Categories categories={categories} filterItems={filterItems}/>  
        <Menu items={menuItems}/>
    </div>
  );
}

export default App;
