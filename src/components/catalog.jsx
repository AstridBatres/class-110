import "./catalog.css";
import Product from "./product";
import DataService from "../services/dataService";
import { useState, useEffect } from "react";

const Catalog = () => {
  let [products, setProducts] = useState([]);

  const loadCatalog = async () => {
    let service = new DataService(); //instance
    let data = await service.getCatalog();
    setProducts(data);
  };

  useEffect(() => {
    loadCatalog();
  }, []);

  return (
    <div className="catalog">
      <h2>This is the catalog!</h2>
      <h3>We have {products.length} products!</h3>
      {products.map((prod) => (
        <Product key={prod._id} data={prod}></Product>
      ))}
    </div>
  );
};

export default Catalog;
