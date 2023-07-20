import React, { useState } from "react";
import Item from "./Item";

const ShoppingList = ({ items }) => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  // Filtering the items based on the selected category
  const filteredItems =
    selectedCategory === "all"
      ? items
      : items.filter((item) => item.category === selectedCategory);

  return (
    <div>
      <select value={selectedCategory} onChange={handleCategoryChange}>
        <option value="all">All</option>
        <option value="food">Food</option>
        <option value="clothing">Clothing</option>
        {/* Add more options as needed */}
      </select>
      <ul>
        {filteredItems.map((item) => (
          <Item key={item.id} item={item} />
        ))}
      </ul>
    </div>
  );
};

export default ShoppingList;
