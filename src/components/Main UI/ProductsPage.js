import React, { useState } from "react";
import "./productPage.css";
import { FaArrowLeft } from "react-icons/fa";
import { AllProducts } from "./AllProducts";
import Cart from "./Cart";

export const ProductsPage = (props) => {
  // const [product, setProduct] = useState([]);
  const [item, setItem] = useState([]);
  const [back, setBack] = useState(false);
  const [cart, setCart] = useState(false);
  const [productsCart, setProductsCart] = useState(false);
  const handleBack = () => {
    setBack(true);
    setProductsCart(true);
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
      {!productsCart && (
        <h5>
          <FaArrowLeft onClick={handleBack} /> All Products
        </h5>
      ) }
      {!productsCart ? (
        <div className="product-card-container">
          {props.hide && props.products.length === 0 ? (
            <p>No data to display</p>
          ) : (
            props.products.map((item, index) => {
              // console.log(item)
              return (
                <div
                  className="product-card"
                  key={index + 1}
                  onClick={() => {
                    handleProductData(item);
                  }}
                >
                  <div>
                    <img
                      src={
                        !item.productImages.length
                          ? "https://www.photoreview.com.au/wp-content/uploads/2022/07/PIXMA-G660_5.jpg"
                          : item.productImages
                      }
                      alt=""
                      className="product-card-image"
                    />
                  </div>
                  <div className="product-card-name">
                    {item.itemDescription}
                    <span className="product-card-icon">&#9825;</span>
                  </div>
                </div>
              );
            })
          )}
        </div>
      ) : (
        ""
      )}
    </div>
  );
};
