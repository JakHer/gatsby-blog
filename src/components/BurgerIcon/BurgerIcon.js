import React from "react"
import styled from "styled-components"

const StyledIcon = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 20px;
  height: 16px;

  &:focus {
    outline: none;
  }

  div {
    width: 100%;
    height: 2px;
    background-color: #000;
    border-radius: 10px;
    transform-origin: 1px;
    transition: ease 0.4s transform, ease 0.4s opacity;

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
