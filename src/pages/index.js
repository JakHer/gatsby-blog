import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const Description = styled.div`
  font-size: 2rem;
  margin-left: 18px;
  padding: 12px;
  color: pink;
`

const IndexPage = () => (
  <>
    <Description>Hi garnuchu</Description>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}></div>
    <Link to="/articles">Go to Articles page</Link>
    <Link to="/about">Go to about page</Link>
    <Link to="/contact">Go to contact page</Link>
    <Link to="/gallery">Go to gallery page</Link>
  </>
)

export default IndexPage
