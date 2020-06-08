import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { ProductConsumer } from "../context";

function Sidebar() {
  return (
    <ProductConsumer>
      {(value) => {
        const { links, handleSidebar, sidebarOpen } = value;

        return (
          <SideWrapper show={sidebarOpen}>
            <ul>
              {links.map((link) => {
                return (
                  <li key={link.id}>
                    <Link
                      to={link.path}
                      className="sidebar-link"
                      onClick={handleSidebar}
                    >
                      {link.text}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </SideWrapper>
        );
      }}
    </ProductConsumer>
  );
}

const SideWrapper = styled.nav`
  position: fixed;
  top: 61px;
  left: 0px;
  width: 100%;
  height: 100%;
  background: var(--mainGrey);
  z-index: 1;
  border-right: 4px solid var(--primaryColor);
  transition: var(--mainTransition);
  /* agr show true ho tou 0 warna 100 */

  transform: ${(props) => (props.show ? "translateX(0)" : "translatex(-100%)")};
  ul {
    list-style-type: none;
    padding: 0 !important;
  }
  .sidebar-link {
    display: block;
    text-transform: capitalize;
    font-size: 1.5rem;
    color: var(--mainBlack);
    padding: 0.5rem 1.5rem;
    background: transparent;
    transition: var(--mainTransition);
  }
  .sidebar-link:hover {
    background-color: var(--primaryColor);
    color: var(--mainWhite);
    padding-left: 2.5rem;
    text-decoration: none;
  }
  @media (min-width: 475px) {
    width: 20rem;
  }
`;

export default Sidebar;
