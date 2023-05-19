import React, { useState } from "react";
import "./cart.css";
import ProductDetails from "./ProductDetailsPage";
import CloseButton from 'react-bootstrap/CloseButton';

const Cart = (props) => {
  const [cartItems, setCartItems] = useState([]);
  const [subtotal, setSubtotal] = useState(0);
  const [isOpen] = useState(false);

  const addToCart = (product) => {
    const existingItem = cartItems.find((item) => item.id === product.id);

    if (existingItem) {
      const updatedItems = cartItems.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCartItems(updatedItems);
    } else {
      const newItem = { ...product, quantity: 1 };
      setCartItems([...cartItems, newItem]);
    }

    setSubtotal((prevSubtotal) => prevSubtotal + product.price);
  };

  const calculateTax = (amount) => {
    const taxableAmount = Math.max(0, amount - 1000);
    const taxPercent = 9;
    const sgst = (taxableAmount * taxPercent) / 100;
    const cgst = (taxableAmount * taxPercent) / 100;
    const igst = (taxableAmount * taxPercent) / 100;
    return sgst + cgst + igst;
  };

  const totalAmount = subtotal + calculateTax(subtotal);

  return (
    <div>
      <div>
        <div
          className={`cart-container d-flex ${
            props.cart || !isOpen ? "open" : ""
          }`}
        >
          <div style={{ width: "500px" }}><ProductDetails item={props.item} /></div>
          <div style={{ borderLeft: "1px solid grey", height: "900px" }}></div>
          <div >
            <div className="cart-header">
              <button onClick={props.funcToggle}><CloseButton/></button>
            </div>
            {cartItems.length === 0 ? (
              <div className="cart-items">
                <p>No items in the cart.</p>
              </div>
            ) : (
              <div className="cart-items">
                <ul>
                  {cartItems.map((item) => (
                    <li key={item.id}>
                      {item.name} - Quantity: {item.quantity}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            <div className="cart-total">
              <p>Subtotal: {subtotal}</p>
              <p>SGST: {calculateTax(subtotal)}</p>
              <p>CGST: {calculateTax(subtotal)}</p>
              <p>IGST: {calculateTax(subtotal)}</p>
              <hr />
              <p>Total Amount: {totalAmount}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
