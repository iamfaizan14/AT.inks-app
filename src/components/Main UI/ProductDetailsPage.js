import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ADD_TO_ORDER_LIST } from "../Redux/Reducers/orderReducer";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const ProductDetails = (props) => {
  // const [checked, setChecked] = useState(false);
  const [colorButtonStates, setColorButtonStates] = useState([
    { id: 1, name: "Cyan Color", color: "outline-primary", value: true },
    {
      id: 2,
      name: "Bluish Megenta Color",
      color: "outline-primary",
    },
    {
      id: 3,
      name: "Lemon Yellow Color",
      color: "outline-primary",
    },
    { id: 4, name: "Black Color", color: "outline-primary" },
  ]);
  const [packagingButtonStates, setPackagingButtonStates] = useState([
    { id: 5, name: "RNB 1 Litre", color: "outline-primary", value: true },
    {
      id: 6,
      name: "5 Litre Bottle AK-RCT(467A)",
      color: "outline-primary",
    },
    {
      id: 7,
      name: "NM 1 Litre",
      color: "outline-primary",
    },
    { id: 8, name: "1 Litre Round XT 45 Bottle", color: "outline-primary" },
    { id: 9, name: "5 Litre RIB Can", color: "outline-primary" },
  ]);
  const [enteredQauntity, setEnteredQauntity] = useState(12);

  const updatedList = useSelector((state) => state?.order?.updatedList);
  console.log(updatedList, "up");

  const dispatch = useDispatch();

  const handleColorButtonClick = (buttonId) => {
    setColorButtonStates((prevState) =>
      prevState.map((buttonState) =>
        buttonState.id === buttonId
          ? { ...buttonState, value: true }
          : { ...buttonState, value: false }
      )
    );
  };
  const handlePackagingButtonClick = (buttonId) => {
    setPackagingButtonStates((prevState) =>
      prevState.map((pbuttonState) =>
        pbuttonState.id === buttonId
          ? { ...pbuttonState, value: true }
          : { ...pbuttonState, value: false }
      )
    );
  };

  const handleAdd = () => {
    if (enteredQauntity >= 12) {
      let selectedColorButton = colorButtonStates.find(
        (buttonState) => buttonState.value
      );
      let selectedPackagingButton = packagingButtonStates.find(
        (buttonState) => buttonState.value
      );
      let selectedColorValue = selectedColorButton?.name;
      let selectedPackagingValue = selectedPackagingButton?.name;

      dispatch({
        type: ADD_TO_ORDER_LIST,
        payload: {
          ...props.item,
          qauntity: Number(enteredQauntity),
          color: selectedColorValue,
          packaging: selectedPackagingValue,
        },
      });
      setIsInput(true);
    } else {
      setIsInput(false);
    }
  };

  const [isInput, setIsInput] = useState(true);
  const qty = (e) => {
    console.log(e.target.value, "valu");

    setEnteredQauntity(e.target.value);

  };

  return (
    <div>
      <div style={{ width: "400px" }}>
        <img
          style={{
            margin: "30px 0 10px 80px",
            width: "150px",
            height: "200px",
          }}
          src={
            !props.item["productImages"].length
              ? "https://www.photoreview.com.au/wp-content/uploads/2022/07/PIXMA-G660_5.jpg"
              : !props.item["productImages"]
          }
          alt="item imagea"
        />
        <h2 className="mx-4">
          {props.item["itemDescription"]}
          <span>
            {/* {props.item["variants"].reduce((item) => {
              console.log(item, 'haikuch')
              return <p>{item.grossPrice}</p>;
            })} */}
          </span>
        </h2>
        <div style={{ width: "450px" }}>
          <p className="mx-4">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi
            voluptate consequatur officiis tempora sint fuga ducimus sequi,
            aperiam atque dignissimos asperiores doloribus voluptates nemo
            voluptas porro. Hic exercitationem ab numquam!
          </p>
        </div>
        <div>
          <p className="my-2 mx-4">
            <strong>Please select color description</strong>
          </p>
          <div>
            {colorButtonStates.map((buttonState) => (
              <Button
                className="mb-2 mx-3"
                key={buttonState.id}
                variant={buttonState.value ? "primary" : "outline-primary"}
                onClick={() => handleColorButtonClick(buttonState.id)}
              >
                {buttonState.name}
              </Button>
            ))}
            <div className="my-2 mx-4">
              <p>
                <strong>Please select packaging description</strong>
              </p>
            </div>
            <div>
              {packagingButtonStates.map((buttonState) => (
                <Button
                  className="mb-2 mx-3"
                  key={buttonState.id}
                  variant={buttonState.value ? "primary" : "outline-primary"}
                  onClick={() => handlePackagingButtonClick(buttonState.id)}
                >
                  {buttonState.name}
                </Button>
              ))}
              <p className="my-2 mx-4">
                <strong>Enter Quantity</strong>
              </p>
              <Form.Control
                className="mx-4"
                type="number"
                style={{ width: "300px" }}
                placeholder=""
                value={enteredQauntity}
                onChange={qty}
              />
              {!isInput ? (
                <p style={{ color: "red" }}>quantity must be more than 12</p>
              ) : null}
              <Button
                className="mx-5 my-5"
                style={{ width: "200px" }}
                variant="outline-primary"
                onClick={handleAdd}
              >
                Add
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProductDetails;
