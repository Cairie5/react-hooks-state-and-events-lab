import React, { useState } from "react";

function Item({ name, category }) {

  const [inCart, setInCart] = useState(false)

  function handleAdd(){
    setInCart((inCart) => !inCart)
  }
  return (
    <li className="">
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={inCart ? "in-cart":""} onClick={handleAdd}>{inCart ? "Remove From Cart":"Add to Cart"}</button>
    </li>
  );
}

export default Item;
