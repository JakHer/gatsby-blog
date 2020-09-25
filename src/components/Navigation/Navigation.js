import React, { useEffect, useState } from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { func } from "prop-types"

const StyledNav = styled.nav`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  padding: 20px 0 0 30px;
  z-index: 9999;

  a {
    text-decoration: none;
    color: inherit;
  }

  @media (max-width: 800px) {
    justify-content: space-between;
    padding: 20px 30px 0;
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
  list-style: none;

  @media (max-width: 800px) {
    position: absolute;
    width: 100%;
    top: 50px;
    left: 0;
    z-index: 9999;
    flex-direction: column;
    background-color: #f1f1f1;

    transform: ${({ isNavigationOpen }) =>
      isNavigationOpen ? "translateX(0)" : "translateX(-100vw)"};
    transition: 0.4s ease transform;
  }
`

const activeClassName = "active"

const StyledLink = styled(Link).attrs({
  activeClassName: activeClassName,
})`
  font-size: 14px;
  font-weight: 600;
  margin-left: 32px;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    transition: 0.4s width ease;
    height: 100%;
    background-color: rgba(255, 182, 193, 0.4);
    border-radius: 20px;
    z-index: 1;
  }

  &:hover::after {
    width: 100%;
  }

  &.${activeClassName} {
    &::after {
      content: "";
      position: absolute;
      top: 100%;
      left: 0;
      width: 100%;
      height: 2px;
      background-color: rgba(255, 182, 193, 1);
      transform: translateY(50%);
      border-radius: 20px;
      z-index: 1;
    }
  }
`

const StyledListItem = styled.li`
  padding: 20px;
`

const Navigation = () => {
  const [isNavigationOpen, toggleNavigation] = useState(false)

  const handleMenuClick = e => {
    e.preventDefault()
    toggleNavigation(isNavigationOpen(false))
    console.log(`dziala`)
  }

  return (
    <StyledNav>
      <StyledLogo>
        <Link to="/">JaHe</Link>
      </StyledLogo>
      <button onClick={() => toggleNavigation(!isNavigationOpen)}>
        {isNavigationOpen ? "Open" : "Close"}
      </button>
      <StyledList isNavigationOpen={isNavigationOpen}>
        <StyledListItem>
          <StyledLink
            onClick={() => toggleNavigation(!isNavigationOpen)}
            to="/articles"
          >
            articles
          </StyledLink>
        </StyledListItem>
        <StyledListItem>
          <StyledLink
            onClick={() => toggleNavigation(!isNavigationOpen)}
            to="/gallery"
          >
            gallery
          </StyledLink>
        </StyledListItem>
        <StyledListItem>
          <StyledLink
            onClick={() => toggleNavigation(!isNavigationOpen)}
            to="/contact"
          >
            contact
          </StyledLink>
        </StyledListItem>
        <StyledListItem>
          <StyledLink
            onClick={() => toggleNavigation(!isNavigationOpen)}
            to="/about"
          >
            about
          </StyledLink>
        </StyledListItem>
      </StyledList>
    </StyledNav>
  )
}

export default Navigation
