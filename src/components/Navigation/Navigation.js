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
  z-index: 9999;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  background-color: rgba(255, 255, 255, 0.95);

  a {
    text-decoration: none;
    color: inherit;
  }

  @media (max-width: 800px) {
    justify-content: space-between;
    padding: 20px 30px;
    width: 100%;
  }
`
const Navigation = () => {
  const { toggle } = useMenu()
  const node = useRef()
  OutsideClickClosesMenu(node, () => toggle(false))

  return (
    <StyledNav ref={node}>
      <Logo />
      <BurgerIcon />
      <NavItemsList />
    </StyledNav>
  )
}

export default Navigation
