import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
// Importing Router
import { Route, Switch } from "react-router-dom";

// All pages imports from pages folder
import Home from "./pages/HomePage";
import About from "./pages/AboutPage";
import Products from "./pages/ProductsPage";
import Contact from "./pages/ContactPage";
import SingleProduct from "./pages/SingleProductPage";
import Default from "./pages/DefaultPage";
import Cart from "./pages/CartPage";

function App() {
  return (
    <>
      {/* navbar,sidebar,cart,footer */}
      <Switch>
        <Route path="/" exact component={Home}></Route>
        <Route path="/about" component={About}></Route>
        <Route path="/products" exact component={Products}></Route>
        <Route path="/products/:id" component={SingleProduct}></Route>
        <Route path="/contact" component={Contact}></Route>
        <Route path="/cart" component={Cart}></Route>
        <Route component={Default}></Route>
      </Switch>
    </>
  );
}

export default App;
