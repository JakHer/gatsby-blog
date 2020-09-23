import React from "react"
import { Link } from "gatsby"
import styled, { className } from "styled-components"

const StyledNav = styled.nav`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-family: "Montserrat", sans-serif;

  a {
    text-decoration: none;
    color: inherit;
  }
`

const StyledLogo = styled.span`
  font-weight: 700;
  font-size: 20px;
  margin-right: 10px;
`

const StyledList = styled.ul`
  display: flex;
  flex-direction: row;
  margin: 0;
  padding: 0;
  list-style: none;
`

const StyledLink = styled.li`
  font-size: 14px;
  font-weight: 600;
  margin-left: 32px;
`

const Navigation = () => (
  <StyledNav>
    <StyledLogo>
      <Link to="/">JaHe</Link>
    </StyledLogo>
    <StyledList>
      <li>
        <StyledLink to="articles">articles</StyledLink>
      </li>
      <li>
        <StyledLink to="gallery">gallery</StyledLink>
      </li>
      <li>
        <StyledLink to="contact">contact</StyledLink>
      </li>
      <li>
        <StyledLink to="about">about</StyledLink>
      </li>
    </StyledList>
  </StyledNav>
)

export default Navigation
