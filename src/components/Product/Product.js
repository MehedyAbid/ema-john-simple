import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import "./Product.css";

const product = (props) => {
  console.log(props);
  const { img, name, seller, price, stock } = props.product;
  return (
    <div className="product">
      <div>
        <img src={img}></img>
      </div>
      <div>
        <h4 className="product-name">{name}</h4>
        <h2>Price: {price}</h2>
        <h2>Available stock: {stock}</h2>
        <button
          onClick={() => props.handleAddProduct(props.product)}
          className="main-button"
        >
          <FontAwesomeIcon icon={faShoppingCart} /> add to cart
        </button>
      </div>
    </div>
  );
};

export default product;