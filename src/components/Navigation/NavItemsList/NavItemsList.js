import React from "react"
import styled from "styled-components"
import NavItem from "./NavItem/NavItem"
import { useMenu } from "../../../context/index"

const StyledList = styled.ul`
  display: flex;
  flex-direction: row;
  list-style: none;

  @media (max-width: 1000px) {
    position: absolute;
    width: 100%;
    top: 65px;
    left: 0;
    z-index: 9999;
    flex-direction: column;
    background-color: #f1f1f1;
    align-items: flex-end;

    transform: ${({ isMenuOpen }) =>
      isMenuOpen ? "translateX(0)" : "translateX(-100vw)"};
    transition: 0.4s ease transform;
  }
`

const NavItemsList = () => {
  const { value } = useMenu()
  return (
    <StyledList isMenuOpen={value}>
      <NavItem>about</NavItem>
      <NavItem>gallery</NavItem>
      <NavItem>articles</NavItem>
      <NavItem>contact</NavItem>
      {/* <StyledLink
        onClick={() => toggleNavigation(!isNavigationOpen)}
        to="/gallery"
      ></StyledLink>

      <StyledLink
        onClick={() => toggleNavigation(!isNavigationOpen)}
        to="/contact"
      >
        contact
      </StyledLink> */}
      {/* 
      <StyledLink
        onClick={() => toggleNavigation(!isNavigationOpen)}
        to="/about"
      >
        about
      </StyledLink> */}
    </StyledList>
  )
}

export default NavItemsList
