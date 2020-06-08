import React, { Component } from "react";

const ProductContext = React.createContext();

class ProductProvider extends Component {
  state = {
    sidebarOpen: false,
    cartOpen: false,
    cartItems: 0,
  };

  // Handle side bar
  handleSidebar = () => {
    this.setState({
      sidebarOpen: !this.state.sidebarOpen,
    });
  };

  // Handle side cart
  handleCart = () => {
    this.setState({
      cartOpen: !this.state.cartOpen,
    });
  };

  // Close cart
  closeCart = () => {
    this.setState({
      cartOpen: false,
    });
  };

  // Close cart
  OpenCart = () => {
    this.setState({
      cartOpen: true,
    });
  };

  render() {
    return (
      <ProductContext.Provider
        value={{
          // Using spread operator for passing all state values
          ...this.state,
          handleSidebar: this.handleSidebar,
          handleCart: this.handleCart,
          closeCart: this.closeCart,
          OpenCart: this.OpenCart,
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;
export { ProductProvider, ProductConsumer };
