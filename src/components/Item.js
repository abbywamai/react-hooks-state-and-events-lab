import React, { useState } from "react";

const Item = ({ item }) => {
  const [isInCart, setIsInCart] = useState(false);

  const handleToggleCart = () => {
    setIsInCart((prevIsInCart) => !prevIsInCart);
  };

  return (
    <li className={isInCart ? "in-cart" : ""}>
      {item.name}
      <button onClick={handleToggleCart}>{isInCart ? "Remove From Cart" : "Add to Cart"}</button>
    </li>
  );
};

export default Item;
