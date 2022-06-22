import "./cart.css";
import { useContext } from "react";
import StoreContext from "../context/storeContext";
import ProductInCart from "./productincart";

const Cart = () => {
  let cart = useContext(StoreContext).cart;

  const getTotal = () => {
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
      let prod = cart[i];
      total += prod.price * prod.quantity;
    }
    return total.toFixed(2);
  };
  const getNumItems = () => {
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
      total += cart[i].quantity;
    }
    return total;
  };

  return (
    <div className="cart">
      <h3> We have {getNumItems()} products ready for you.</h3>
      <h6> Are you ready to place an order?</h6>
      <div className="parent">
        <section>
          {cart.map((prod) => (
            <ProductInCart key={prod._id} data={prod}></ProductInCart>
          ))}
        </section>
        <div className="total-panel">
          <h3>Your total:</h3>
          <h2>${getTotal}</h2>
        </div>
      </div>
    </div>
  );
};

export default Cart;
