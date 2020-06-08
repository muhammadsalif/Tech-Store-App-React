import React from "react";
import styled from "styled-components";
// import { Link } from "react-router-dom";
import { ProductConsumer } from "../context";

function SideCart() {
  return (
    <ProductConsumer>
      {(value) => {
        const { cartOpen, cart, closeCart } = value;
        return (
          <CartWrapper show={cartOpen} onClick={closeCart}>
            <p>Cart Items</p>
          </CartWrapper>
        );
      }}
    </ProductConsumer>
  );
}

const CartWrapper = styled.div`
  position: fixed;
  top: 61px;
  right: 0px;
  width: 100%;
  height: 100%;
  background-color: var(--mainGrey);
  z-index: 1;
  transform: ${(props) => (props.show ? "translateX(0)" : "translateX(100%)")};
  border-left: 4px solid var(--primaryColor);
  transition: var(--mainTransition);

  @media (min-width: 475px) {
    width: 20rem;
  }
`;

export default SideCart;
