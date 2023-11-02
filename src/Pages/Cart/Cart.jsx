import React, { useContext } from "react";
import { ShopContext } from "../../Context/ShopContext";
import { PRODUCTS } from "../../products";
import { CartItem } from "./cart-item";
import { useNavigate } from "react-router-dom";
import "./cart.css";

export const Cart = () => {
  const { cartItems, getTotalCartAmount, checkout, orderform } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();
  const navigate = useNavigate();

  // Debugging: Check if checkout function is available in the context
  console.log("Checkout function:", checkout);

  const handleCheckout = () => {
    checkout();
    navigate("/checkout");
  };

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

          {/* Use className instead of class for JSX */}
          <button className="btn btn-info" onClick={() => navigate("/")}>
            Continue Shopping
          </button>{" "}
          &nbsp;&nbsp;&nbsp;
          <button className="btn btn-success" onClick={handleCheckout}>
            Checkout
          </button>
          <br />
        </div>
      ) : (
        <>
          <h1>Your Shopping Cart is Empty </h1>
          <i className='bx bx-sad' style={{ fontSize: "195px", color: "red" }}></i>
        </>
        
      )}
    </div>
  );
};
