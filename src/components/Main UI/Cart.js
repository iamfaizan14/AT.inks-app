import React, { useState } from "react";
import "./cart.css";
import ProductDetails from "./ProductDetailsPage";
import CloseButton from "react-bootstrap/CloseButton";
import { useDispatch, useSelector } from "react-redux";
import Button from "react-bootstrap/Button";
import { ADD_TO_CART } from "../Redux/Reducers/cartReducer";
import { EMPTY_ORDER_LIST, REMOVE_ITEM } from "../Redux/Reducers/orderReducer";

const Cart = (props) => {
  const orderList = useSelector(({ order }) => order.updatedList);
  console.log(orderList,'order')
  const [isOpen] = useState(false);

  const dispatch = useDispatch();

  const addToCartHandler = () => {
    dispatch({
      type: ADD_TO_CART,
      payload: [...orderList],
    });
    dispatch({
      type: EMPTY_ORDER_LIST,
    });
  };
  const handleDelete = (id) => {
    console.log(id,'id')
    dispatch({
      type: REMOVE_ITEM,
      payload:id,
    });
  };

  return (
    <div>
      <div>
        <div
          className={`cart-container d-flex ${
            props.cart || !isOpen ? "open" : ""
          }`}
        >
          <div style={{ width: "500px" }}>
            <ProductDetails item={props.item} />
          </div>
          <div style={{ borderLeft: "1px solid grey", height: "900px" }}></div>
          <div>
            <div className="cart-header">
              <h5>Order list</h5>
              <CloseButton className="close-btn" onClick={props.funcToggle} />
            </div>
            <div className="heading-container">
              <div className="headings">
                <p>Products</p>
                <p style={{ marginLeft: "70px" }}>Quantity</p>
                <p>Price</p>
              </div>
            </div>
            {orderList.length === 0 ? (
              <div className="cart-items">
                <p>No items in the cart.</p>
              </div>
            ) : (
              <div className="cart-items">
                {orderList.map((item,index) => (
                  <div className="headings" key={item.productId}>
                    <img
                      src={
                        !item.productImages.length
                          ? "https://www.photoreview.com.au/wp-content/uploads/2022/07/PIXMA-G660_5.jpg"
                          : item.productImages
                      }
                      alt="cart-added"
                    />
                    <p
                      style={{
                        marginLeft: "0",
                        width: "11vw",
                        fontSize: "11px",
                      }}
                    >
                      {item.itemDescription}
                    </p>
                    <p style={{ fontSize: "11px" }}>{item.qauntity}</p>
                    <p style={{ marginLeft: "3vw", fontSize: "11px" }}>
                      {item.variants[0]["grossPrice"]}
                    </p>
                    <CloseButton
                      className="delete-button"
                      onClick={()=>handleDelete(index)}
                    />
                  </div>
                ))}

                <Button className="add-to-cart-btn" onClick={addToCartHandler}>
                  Add to cart
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
