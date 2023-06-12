import React, { useState } from "react";
import "./MainCart.css";
import { useSelector } from "react-redux";
import { Button } from "react-bootstrap";

const MainCart = () => {
  const cartItems = useSelector(({ cart }) => cart.cartItems);
  const [showFullList, setShowFullList] = useState(false);
  const toggleShowFullList = () => {
    setShowFullList(!showFullList);
  };

  let total = 0;
  // BILL CALCULAIONS
  const calculateTotal = () => {
    console.log(cartItems)
    cartItems.forEach((product) => {
      console.log(product,'products')
      total += product.variants[0]["grossPrice"] * product.qauntity;
    });
    console.log(total)
    return total;
  };
  const calculateSGST = () => {
    const total = calculateTotal();
    return (total * 0.09).toFixed(2);
  };

  const calculateIGST = () => {
    const total = calculateTotal();
    return (total * 0.09).toFixed(2);
  };

  const calculateTaxableAmount = () => {
    return 1000;
  };

  const calculateTotalAmount = () => {
    const total = calculateTotal();
    const sgst = parseFloat(calculateSGST());
    const igst = parseFloat(calculateIGST());
    const taxableAmount = calculateTaxableAmount();
    return total + sgst + igst + taxableAmount;
  };
  return (
    <div>
      <div className="headings">
        <p>Products</p>
        <div className="inner">
          <p> Quantity</p>
          <p>Price</p>
        </div>
      </div>
      <div className="main-container">
        {cartItems.length === 0 ? (
          <div className="no-items">
            <img src="./NoItemsInCart.png" alt="No items" />
            <p>
              <b>Items not added yet</b>
            </p>
          </div>
        ) : (
          <div>
            <div style={{ maxHeight: "300px", overflow: "auto" }}>
              {cartItems
                .slice(0, showFullList ? cartItems.length : 3)
                .map((item) => (
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
                  </div>
                ))}
            </div>
            {!showFullList && cartItems.length > 3 && (
              <div style={{ textAlign: "center" }} className="see-all-button">
                <Button onClick={toggleShowFullList}>
                  {showFullList ? "See Less" : "See All"}
                </Button>
              </div>
            )}
          </div>
        )}
        {cartItems.length  ? (
          <div>
            <p style={{ color: "grey", fontSize: "15px" }}>
              Total: {calculateTotal()}
            </p>
            <p style={{ color: "grey", fontSize: "15px" }}>
              SGST (9%): {calculateSGST()}
            </p>
            <p style={{ color: "grey", fontSize: "15px" }}>
              IGST (9%): {calculateIGST()}
            </p>
            <p style={{ color: "grey", fontSize: "15px" }}>
              Taxable Amount (Rs 1000): {calculateTaxableAmount()}
            </p>
            <p style={{ color: "grey", fontSize: "15px" }}>
              Total Amount: {calculateTotalAmount()}
            </p>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default MainCart;
