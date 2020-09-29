import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import Button from "../components/Button/Button"

const StyledContentWrapper = styled.div`
  width: 60%;
  height: calc(100vh - 120px);
  text-align: right;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;

  @media (max-width: 1000px) {
    position: absolute;
    width: 100%;
    /* text-align: center; */
    top: 0;
    left: 0;
    align-items: center;
    height: 100%;
    background: rgba(255, 255, 255, 0.5);
    z-index: 9;
  }
`

const Header = styled.h1`
  font-size: 2rem;
  margin-left: 18px;
  font-size: 55px;
  margin: 0;

  @media (max-width: 1000px) {
    font-size: 1.7rem;
  }
`

const StyledDescription = styled.p`
  font-weight: 700;

  @media (max-width: 1000px) {
    font-size: 14px;
  }
`

const StyledHero = styled.img`
  position: absolute;
  right: 0;
  bottom: 0;
  width: 40%;
  height: 100vh;
  object-fit: cover;
  z-index: 10;
  filter: blur(2px);

  @media (max-width: 1000px) {
    position: relative;
    width: 100%;
    height: 100%;
    z-index: 8;
  }
`

const StyledPageWrapper = styled.div`
  position: relative;

  @media (min-width: 1000px) {
    position: static;
  }
`

export const query = graphql`
  {
    file(name: { eq: "hero" }) {
      publicURL
    }
  }
`

const IndexPage = ({ data }) => (
  <StyledPageWrapper>
    <StyledContentWrapper>
      <Header>Jakub Hermyt</Header>
      <StyledDescription>Creative Frotend Developer</StyledDescription>
      <Button>View my work</Button>
    </StyledContentWrapper>
    <StyledHero src={data.file.publicURL} />
  </StyledPageWrapper>
)

export default IndexPage
