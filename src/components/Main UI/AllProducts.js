import React, { useEffect, useState } from "react";
import "./allProducts.css";
import axios from "axios";
import { ProductsPage } from "./ProductsPage";

export const AllProducts = () => {
  const [categories, setCategories] = useState([]);
  const [subCategories, setSubCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [hideCategories, setHideCategories]=useState(false)
  // const [showProducts, setShowProducts]=useState(false)

  const getCategories = async () => {
    try {
      const response = await axios.get(
        "https://elredtest.s3.amazonaws.com/reactAssignment/getCategories.json"
      );
      //   console.log(response.data);
      setCategories(response.data.result);
      return response.data;
    } catch (err) {
      console.log(err);
      return [];
    }
  };
  const handleSubCategories = async (id) => {
    try {
      const response = await axios.get(
        "https://elredtest.s3.amazonaws.com/reactAssignment/getSubCategory_" +
          id +
          ".json"
      );
      // console.log("subcategories ka data", response.data);
      setSubCategories(response.data.result);
      return response.data;
    } catch (err) {
      console.log(err);
      return [];
    }
  };
  const handleProducts = async (Sub_id) => {
    setHideCategories(true)
    try {
      const response = await axios.get(
        "https://elredtest.s3.amazonaws.com/reactAssignment/getProduct_" +
          Sub_id +
          ".json"
      );
      // console.log("products ka data", response.data);
      setProducts(response.data.result);
      return response.data;
    } catch (err) {
      console.log(err);
      return [];
    }
  };

  useEffect(() => {
    getCategories();
  }, []);
  return (
    <div className="main-container">
      <div className="sub-container">
        <h2>Print Heads</h2>
        <input type="text" placeholder="search here" />
      </div>
      <div>
        {!hideCategories?
          categories.map((item, index) => {
            //   console.log(item);
            return (
              <div
                className="card"
                key={index + 1}
                onClick={() => handleSubCategories(item.categoryId)}
              >
                <div>
                  <img
                    src={
                      !item.categoryImageURL
                        ? "https://cdn.shopify.com/s/files/1/0451/7570/1665/products/DP_D10275220_INK_BTL_BLU_30ML_1024x1024.jpg?v=1626954786"
                        : item.categoryImageURL
                    }
                    alt=""
                    className="card-image"
                  />
                </div>
                <div className="card-name">{item.categoryName}</div>
              </div>
            );
          }):""}
        <hr />
        <div>
          {!hideCategories?
            subCategories.map((item, index) => {
              //   console.log(item);
              return (
                <div
                  className="card"
                  key={index + 1}
                  onClick={() => handleProducts(item.subCategoryId)}
                >
                  <div>
                    <img
                      src={
                        !item.subCategoryImageURL
                          ? "https://cdn.shopify.com/s/files/1/0451/7570/1665/products/DP_D10275220_INK_BTL_BLU_30ML_1024x1024.jpg?v=1626954786"
                          : item.subCategoryImageURL
                      }
                      alt=""
                      className="card-image"
                    />
                  </div>
                  <div className="card-name">{item.subCategoryName}</div>
                </div>
              );
            }):""}
        </div>
        <div>
          <ProductsPage products={products} hide={hideCategories}/>
        </div>
      </div>
    </div>
  );
};
