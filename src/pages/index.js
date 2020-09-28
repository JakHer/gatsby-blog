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
`

const Header = styled.h1`
  font-size: 2rem;
  margin-left: 18px;
  color: pink;
  font-size: 55px;
  margin: 0;
`

const StyledDescription = styled.p`
  font-weight: 700;
`

const StyledHero = styled.img`
  position: absolute;
  right: 0;
  top: 0;
  width: 40%;
  height: 100vh;
  object-fit: cover;
  z-index: 10000;
`

export const query = graphql`
  {
    file(name: { eq: "hero" }) {
      publicURL
    }
  }
`

const IndexPage = ({ data }) => (
  <>
    <StyledContentWrapper>
      <Header>Jakub Hermyt</Header>
      <StyledDescription>Creative Frotend Developer</StyledDescription>
      <Button>View my work</Button>
    </StyledContentWrapper>
    <StyledHero src={data.file.publicURL} />
  </>
)

export default IndexPage
