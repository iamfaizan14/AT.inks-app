import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./allProducts.css";
import axios from "axios";
import { ProductsPage } from "./ProductsPage";

export const AllProducts = () => {
  const allProducts = useSelector((state) => state.products.products);
  const [categories, setCategories] = useState([]);
  const [subCategories, setSubCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [hideCategories, setHideCategories] = useState(false);
  const [hideHeading, setHideHeading] = useState(false);
  const [hideHR, setHideHR] = useState(false);
  const [hideSubCat, setHideSubCat] = useState(false);
  // const [showProducts, setShowProducts]=useState(false)

  const dispatch = useDispatch();

  const getCategories = async () => {
    try {
      const response = await axios.get(
        "https://elredtest.s3.amazonaws.com/reactAssignment/getCategories.json"
      );
      //   console.log(response.data);
      allProducts.length !== 0 &&
        dispatch({ type: "ADD-PRODUCTS", data: response.data });
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
    setHideCategories(true);
    setHideHeading(true);
    setHideHR(true);
    setHideSubCat(true);
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
      {!hideHeading ? (
        <div className="sub-container">
          <h4>Print Heads</h4>
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
        </div>
      ) : (
        ""
      )}
      {!hideHR ? <hr style={{ width: "50vw" }} /> : ""}

      <div>
        <div className="card-row">
          {!hideCategories
            ? categories.map((item, index) => {
                //   console.log(item);
                return (
                  <React.Fragment key={index}>
                    <div
                      className="card"
                      key={index + 1}
                      onClick={() => handleSubCategories(item.categoryId)}
                    >
                      <img
                        src={
                          !item.categoryImageURL
                            ? "https://cdn.shopify.com/s/files/1/0451/7570/1665/products/DP_D10275220_INK_BTL_BLU_30ML_1024x1024.jpg?v=1626954786"
                            : item.categoryImageURL
                        }
                        alt=""
                        className="card-image"
                      />
                      <div className="card-name">{item.categoryName}</div>
                    </div>
                  </React.Fragment>
                );
              })
            : ""}
        </div>

        <div>
          {!hideSubCat
            ? subCategories.map((item, index) => {
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
                      />
                    </div>
                    <div className="card-name">{item.subCategoryName}</div>
                  </div>
                );
              })
            : ""}
        </div>
        <div>
          <ProductsPage products={products} hide={hideCategories} />
        </div>
      </div>
    </div>
  );
};
