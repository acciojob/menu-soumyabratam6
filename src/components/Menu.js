import React from "react";

const Menu = ({item}) => {
  return (
    <div className="menu-container">
      {item.map((item) => (
        <div 
        key={item.id} 
        className="menu-item"
        data-test-id={`menu-item-${item.category.toLowerCase()}`}
        >
          <img src={item.img} alt={item.title} className="menu-item-img" />
          <div className="menu-item-details">
            <h4>{item.title}</h4>
            <p className="menu-item-price">${item.price.toFixed(2)}</p>
            <p className="menu-item-category">{item.category}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Menu;
