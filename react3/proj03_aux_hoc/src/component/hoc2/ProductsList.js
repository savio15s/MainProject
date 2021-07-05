import React from "react";
import ProductCard from "./ProductCard";

export default function ProductsList(props) {
  let { data: products } = props;
  
  return (
    <div>
      <div>
        <div>
          <div>
            <h2>Products</h2>
          </div>
        </div>
        <div>
          {products.map((product) => (
            <ProductCard key={product.sku} {...product} />
          ))}
        </div>
      </div>
    </div>
  );
}
