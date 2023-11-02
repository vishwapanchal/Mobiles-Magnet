import React, { useContext } from "react";
import { ShopContext } from "../../Context/ShopContext";

export const CartItem = (props) => {
  const { id, productName, price, productImage } = props.data;
  const { cartItems, addToCart, removeFromCart, updateCartItemCount } =
    useContext(ShopContext);

  return (
    <div className="cartItem">
      <img src={productImage} alt={productName} />
      <div className="description">
        <p>
          <b>{productName}</b>
        </p>
        <p>Price: &#8377;{price}</p>
        <div className="countHandler">
        <button type="button" class="btn btn-danger" onClick={() => removeFromCart(id)}>-</button>

        <button
  type="button"
  className="btn btn-light"
  onClick={() => updateCartItemCount(cartItems[id] + 1, id)}
>
{cartItems[id]}
</button>
          <button type="button" class="btn btn-success" onClick={() => addToCart(id)}>+</button>
        </div>
      </div>
    </div>
  );
};
