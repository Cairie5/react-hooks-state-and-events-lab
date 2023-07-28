import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {

  const [choiceCategory, setChoiceCategory] = useState("All")

  function handleChange(event){
    setChoiceCategory(event.target.value)
  }

  const displayItems = items.filter ((item) => {
    if (choiceCategory === "All") return true;

    return item.category === choiceCategory;
  });

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={handleChange}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {displayItems.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
