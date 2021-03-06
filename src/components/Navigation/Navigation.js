import React, { useRef } from "react"
import styled from "styled-components"
import Logo from "../Logo/Logo"
import BurgerIcon from "../BurgerIcon/BurgerIcon"
import NavItemsList from "./NavItemsList/NavItemsList"
import { OutsideClickClosesMenu } from "../../hooks/hooks"
import { useMenu } from "../../context/index"

const StyledNav = styled.nav`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 20px 30px;
  z-index: 11;
  background-color: rgba(255, 255, 255, 0.95);
  box-shadow: 0 5px 20px -10px #000;

  a {
    text-decoration: none;
  }

  @media (max-width: 1000px) {
    justify-content: space-between;
    padding: 20px 30px;
    width: 100%;
  }
`
const Navigation = () => {
  const { setMenuFalse } = useMenu()
  const node = useRef()
  OutsideClickClosesMenu(node, () => setMenuFalse(false))

  return (
    <StyledNav ref={node}>
      <Logo />
      <BurgerIcon />
      <NavItemsList />
    </StyledNav>
  )
}

export default Navigation
