import React, { useState } from "react";
import "./allProducts.css";
import { FaArrowLeft, FaHeart } from "react-icons/fa";
import { AllProducts } from "./AllProducts";
import Cart from "./Cart";

export const ProductsPage = (props) => {
  // const [product, setProduct] = useState([]);
  const [item, setItem] = useState([]);
  const [back, setBack] = useState(false);
  const [cart, setCart] = useState(false);
  const handleBack = () => {
    setBack(true);
  };
  const handleProductData = (item) => {
    setItem(item);
    setCart(!cart);
  };
  const handleToggle = () => {
    setCart(!cart);
  };
  return (
    <div>
      {cart && <Cart funcToggle={handleToggle} item={item} />}
      {back ? <AllProducts /> : ""}
      {props.hide && (
        <h5>
          <FaArrowLeft onClick={handleBack} /> All Products
        </h5>
      )}
      {
        <div>
          {props.hide && props.products.length === 0 ? (
            <p>No data to display</p>
          ) : (
            props.products.map((item, index) => {
              // console.log(item)
              return (
                <div
                  className="card"
                  key={index + 1}
                  onClick={() => {
                    handleProductData(item);
                  }}
                >
                  <div>
                    <FaHeart />
                    <img
                      src={
                        !item.productImages
                          ? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJvM4KjOxUiLa7_QRJNF9mKQc0txyP0wyl9ivju8x6uc1ofXeUvYcHWZauGcIVcYUs16o&usqp=CAU"
                          : item.productImages
                      }
                      alt=""
                      className="card-image"
                    />
                  </div>
                  <div className="card-name">{item.itemDescription}</div>
                </div>
              );
            })
          )}
        </div>
      }

    </div>
  );
};
