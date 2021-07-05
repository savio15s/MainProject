import React from 'react'


//export default function ProductCard()
const ProductCard = (props) => {
  return (
    <div className="product">
      <p>
        <b>Title:</b> {props.title}
      </p>
      <p>
        <b>Style:</b> {props.style}
      </p>
      <p>
        <b>Price:</b> {props.price}
      </p>
      <p>
        <b>Description:</b> {props.description}
      </p>
      <p>
        <b>Free shipping:</b> {props.isFreeShipping}
      </p>
      <hr />
    </div>
  );
};

export default ProductCard;