import "./product.css";
import QuantityPicker from "./quantityPicker";
import { useContext, useState } from "react";
import StoreContext from "../context/storeContext";

const Product = (props) => {
  let [quantity, SetQuantity] = useState(1);

  let onQuantityChange = (value) => {
    SetQuantity(value);
  };

  const getTotal = () => {
    let total = props.data.price * quantity;
    return total.toFixed(2);
  };

  const addProduct = () => {
    console.log("adding product to cart", props.data.title);
    let prodForCart = { ...props.data, quantity: quantity };
    addProduct(prodForCart);
  };

  return (
    <div className="product">
      <img
        className="productImg"
        src={"/img/" + props.data.image}
        alt="Product"
      ></img>
      <h2>{props.data.title}</h2>
      <div className="prices">
        <label className="total">Total: ${getTotal()}</label>
        <label>Price: ${props.data.price}</label>
      </div>
      <div className="controls">
        <QuantityPicker onChange={onQuantityChange}></QuantityPicker>
        <button onClick={addProduct} clasName="btn btn-danger btn-sm">
          Add
        </button>
      </div>
    </div>
  );
};

export default Product;
