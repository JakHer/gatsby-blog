import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const StyledLogo = styled.button`
  font-weight: 700;
  font-size: 20px;
  margin-right: 10px;
  background: transparent;
  border: none;

  &:focus {
    outline: none;
  }
`

const Logo = ({ isNavigationOpen, toggleNavigation }) => (
  <StyledLogo onClick={() => toggleNavigation(!isNavigationOpen)}>
    <Link to="/">JaHe</Link>
  </StyledLogo>
)

export default Logo
