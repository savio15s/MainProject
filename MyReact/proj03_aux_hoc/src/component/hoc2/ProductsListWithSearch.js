import React, { Component } from "react";
import products from "./Products";
import ProductsList from "./ProductsList";

export default class ProductsListWithSearch extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: "",
    };
  }


  handleSearch = event => {
    this.setState({ searchTerm: event.target.value })
  }

  
  render() {
    const { searchTerm } = this.state;
    let filteredProducts = filterProducts(searchTerm);

    return (
      <>
        <input
          onChange={this.handleSearch}
          value={this.state.searchTerm}
          type="text"
          placeholder="Search"
        />
        <ProductsList data={filteredProducts} />
      </>
    );
  }
}

const filterProducts = (searchTerm) => {
  searchTerm = searchTerm.toUpperCase();
  console.log("================================Search List");
  console.log(products);
  return products.filter((product) => {
    let str = `${product.title} ${product.style} ${product.sku}`.toUpperCase();
    return str.indexOf(searchTerm) >= 0;
  });
};
