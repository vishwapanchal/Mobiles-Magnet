import React, { useContext } from "react";
import { ShopContext } from "../../Context/ShopContext";
import { PRODUCTS } from "../../products";
import { CartItem } from "./cart-item";
import { useNavigate } from "react-router-dom";
import "./cart.css";

export const Cart = () => {
  const { cartItems, getTotalCartAmount, checkout } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();
  const navigate = useNavigate();

  return (
    <div className="cart">
      <div>
        <br /><br />
        <h1>Your Cart Items</h1>
      </div>
      <div className="cart-items">
        {PRODUCTS.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem key={product.id} data={product} />;
          }
          return null;
        })}
      </div>

      {totalAmount > 0 ? (
        <div className="checkout">
          <p> Subtotal: <h1>&#8377;{totalAmount} </h1></p>
          
          <button  class="btn btn-info" onClick={() => navigate("/")}>Continue Shopping</button> &nbsp;&nbsp;&nbsp;
          <button  class="btn btn-success"
            onClick={() => {
              checkout();
              navigate("/checkout");
            }}
          >
            Checkout
          </button>
        </div>
      ) : (<>
        <h1>Your Shopping Cart is Empty </h1>
        <i class='bx bx-sad' style={{fontSize:"195px",color:"red"}}></i>
        </>
      )}
    </div>
  );
};
