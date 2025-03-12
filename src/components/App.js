import React, { useState } from 'react'
import menuItems from '../data';
import Menu from './Menu';
import '../styles/App.css'
const App = () => {
    const [item,setItem] = useState(menuItems);
    const allCategories =  ['All', ...new Set(menuItems.map((item) => item.category))];
    const filterItems  = (category)=>{
        if (category==="All") {
            setItem(menuItems)
            return;
        }
        const filteredItems = menuItems.filter((item) => item.category === category);
        setItem(filteredItems)
    }

  return (
    <div className="app">
        <h1 className="title">Our Menu</h1>
        <div className="buttons">
        {allCategories.map((category) => (
          <button
            key={category}
            className="filter-btn"
            onClick={() => filterItems(category)}
          >
            {category}
          </button>
        ))}
      </div>
      <Menu item={item} />
    </div>
  )
}

export default App