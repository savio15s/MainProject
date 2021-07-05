import React from 'react'
import products from "./Products";

const DataListWithSearch = WrappedComponent => {
    return class extends React.Component {
      state = {
        searchTerm: ""
      };
      handleSearch = event => {
        this.setState({ searchTerm: event.target.value });
      };
  
      render() {
        let { searchTerm } = this.state;

        let filteredProducts = filterProducts(searchTerm);


        return (
          <div>
            <h1>Wrapped HOC Component</h1>
            <div>
              <input
                onChange={this.handleSearch}
                value={searchTerm}
                type="text"
                placeholder="Search"
              />
            </div>
            <WrappedComponent data={filteredProducts} />
          </div>
        );
      }
    };
  };

  const filterProducts = (searchTerm) => {
    searchTerm = searchTerm.toUpperCase();
    console.log("================================Search List");
    console.log(products);
    return products.filter((product) => {
      let str = `${product.title} ${product.style} ${product.sku}`.toUpperCase();
      return str.indexOf(searchTerm) >= 0;
    });
  };
  

  export default DataListWithSearch;