import React from "react"
import styled from "styled-components"

const StyledIcon = styled.button`
  position: relative;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 20px;
  height: 16px;
  z-index: 99999;

  &:focus {
    outline: none;
  }

  div {
    width: 20px;
    height: 3px;
    background: #111;
    border-radius: 10px;
    transform-origin: 1px;
    transition: linear 0.4s transform, linear 0.4s opacity;

    position: relative;

    &:nth-child(1) {
      transform: ${({ isNavigationOpen }) =>
        isNavigationOpen ? "rotate(45deg)" : "rotate(0)"};
    }

    &:nth-child(2) {
      opacity: ${({ isNavigationOpen }) => (isNavigationOpen ? "0" : "1")};
      transform: ${({ isNavigationOpen }) =>
        isNavigationOpen ? "translateX(20px)" : "translateX(0)"};
    }

    &:nth-child(3) {
      transform: ${({ isNavigationOpen }) =>
        isNavigationOpen ? "rotate(-45deg)" : "rotate(0)"};
    }
  }

  @media (min-width: 800px) {
    display: none;
  }
`

const BurgerIcon = ({ isNavigationOpen, toggleNavigation }) => {
  return (
    <>
      <StyledIcon
        isNavigationOpen={isNavigationOpen}
        onClick={() => toggleNavigation(!isNavigationOpen)}
      >
        <div />
        <div />
        <div />
      </StyledIcon>
    </>
  )
}

export default BurgerIcon
