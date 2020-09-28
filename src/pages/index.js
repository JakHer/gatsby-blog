import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import Button from "../components/Button/Button"

const Description = styled.div`
  font-size: 2rem;
  margin-left: 18px;
  padding: 12px;
  color: pink;
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
    <Description>Hi garnuchu</Description>
    {console.log(data)}
    <p>Welcome to your new Gatsby site.</p>
    <img src={data.file.publicURL} />
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}></div>
    <Button>View my work</Button>
  </>
)

export default IndexPage
