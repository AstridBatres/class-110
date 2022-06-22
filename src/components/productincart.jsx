import "./productincart.css";
import { useContext } from "react";
import StoreContext from "../context/storeContext";

const ProductInCart = (props) => {
  const removeProdFromCart = useContext(StoreContext).removeProdFromCart;

  const getTotal = () => {
    const total = props.data.price * props.data.quantity;
    return total.toFixed(2);
  };
  const deleteProd = () => {
    removeProdFromCart(props.data._id);
  };
  return (
    <div className="product-cart">
      <img className="productImg" src={"/img/" + props.data.image} alt=""></img>
      <div className="description">
        <h4>{props.data.title}</h4>
        <p>{props.data.category}</p>
      </div>
      <label>${props.data.price.toFixed(2)}</label>
      <label>{props.data.quantity}</label>
      <label>{props.data.price * props.data.quantity}</label>

      <button onClick={deleteProd} className="btn btn-sm btn-danger">
        Remove
      </button>
    </div>
  );
};
export default ProductInCart;
