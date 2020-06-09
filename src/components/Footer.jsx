import React from "react";
import { ProductConsumer } from "../context";
import styled from "styled-components";

function Footer() {
  return (
    <ProductConsumer>
      {(value) => {
        return (
          <FooterWrapper>
            <div className="container py-3">
              <div className="row">
                <div className="col-md-6 d-flex justify-content-center ">
                  <p className="text-capitalize h-100  pt-4">
                    copyright &copy; tech store {new Date().getFullYear()}. all
                    rights reserved.
                  </p>
                </div>
                <div className="col-md-6 d-flex justify-content-around d-flex justify-content-center align-items-center pr-5 ">
                  {value.socialIcons.map((item) => (
                    <a href={item.url} target="_blank" key={item.id}>
                      {item.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </FooterWrapper>
        );
      }}
    </ProductConsumer>
  );
}

const FooterWrapper = styled.footer`
  background: var(--darkGrey);
  color: var(--mainWhite);
  .icon {
    font-size: 1.5rem;
    color: var(--mainWhite);
    transition: var(--mainTransition);
  }
  .icon:hover {
    color: var(--primaryColor);
    cursor: pointer;
  }
`;

export default Footer;
