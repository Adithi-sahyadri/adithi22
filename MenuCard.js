import React from "react";

const MenuCard = ({ item }) => {
  return (
    <div className="menu-card">
      <img src={item.image} alt={item.name} className="menu-card-image" />
      <h3>{item.name}</h3>
      <p>{item.description}</p>
      <p>${item.price.toFixed(2)}</p>
      <button>Add to Cart</button>
    </div>
  );
};

export default MenuCard;