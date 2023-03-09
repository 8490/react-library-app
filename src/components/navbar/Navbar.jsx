import React from "react";
import { Logo, Menu, MenuLink, Nav } from "./Navbar.style";

const Navbar = () => {
  return (
    <Nav justify="space-between">
      <Logo to="/">Clarus Library</Logo>
      <Menu>
        <MenuLink to="/">Home</MenuLink>
        <MenuLink to="/about">About</MenuLink>
      </Menu>
    </Nav>
  );
};

export default Navbar;
