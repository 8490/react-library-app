import React, { useState } from "react";
import { menuIcon } from "../../helper/iconData";
import { HamburgerIcon, Logo, Menu, MenuLink, Nav } from "./Navbar.style";

const Navbar = ({ currentUser, setCurrentUser }) => {
  const [showMenu, setShowMenu] = useState(false);

  const logout = () => {
    setCurrentUser(false);
    sessionStorage.clear();
  };
  return (
    <Nav justify="space-between" wrap="wrap">
      <Logo to="/">Clarus Library</Logo>
      <HamburgerIcon onClick={() => setShowMenu(!showMenu)}>
        {menuIcon}
      </HamburgerIcon>
      <Menu showMenu={showMenu}>
        <MenuLink to="/">Home</MenuLink>
        <MenuLink to="/about">About</MenuLink>

        {currentUser ? (
          <MenuLink to="/login" onClick={logout}>
            Logout
          </MenuLink>
        ) : (
          <>
            <MenuLink to="/register">Register</MenuLink>
            <MenuLink to="/login">Login</MenuLink>
          </>
        )}
      </Menu>
    </Nav>
  );
};

export default Navbar;
