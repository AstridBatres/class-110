import { createContext } from "react";

let StoreContext = createContext({
  cart: [],
  user: {},

  addProdToCart: () => {},
  removeProdFromCart: () => {},
});

export default StoreContext;
