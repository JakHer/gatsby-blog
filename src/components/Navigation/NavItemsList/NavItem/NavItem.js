import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { useMenu } from "../../../../context/index"

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
    top: 100%;
    left: 0;
    width: 100%;
    opacity: 0;
    transition: 0.4s ease transform, 0.4s ease opacity;
    height: 4px;
    background-color: rgba(255, 182, 193, 0.4);
    border-radius: 20px;
    z-index: 1;
  }

  &:hover::after {
    opacity: 1;
    transform: scaleX(1);
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
      opacity: 1;
    }
  }
`
const StyledListItem = styled.li`
  padding: 0 20px;
  @media (max-width: 1000px) {
    padding: 20px;
  }
`

const NavItem = ({ children }) => {
  const { setMenuFalse } = useMenu()
  return (
    <StyledListItem>
      <StyledLink onClick={setMenuFalse} to={`/${children}`}>
        {children}
      </StyledLink>
    </StyledListItem>
  )
}

export default NavItem
