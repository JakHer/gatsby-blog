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

const StyledLink = styled(Link)`
  color: inherit;
`

const StyledActiveLink = styled(Link)`
  color: pink;
`

const Logo = () => {
  let myPath = window.location.pathname

  return (
    <StyledLogo>
      {myPath !== "/" ? (
        <StyledLink to="/">JaHe</StyledLink>
      ) : (
        <StyledActiveLink to="/">JaHe</StyledActiveLink>
      )}
    </StyledLogo>
  )
}

export default Logo
