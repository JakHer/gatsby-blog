import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const StyledLogo = styled.span`
  font-weight: 700;
  font-size: 20px;
  margin-right: 10px;
`

const Logo = () => (
  <StyledLogo>
    <Link to="/">JaHe</Link>
  </StyledLogo>
)

export default Logo
