import React from "react"
import styled from "styled-components"

const Wrapper = styled.div`
  margin-bottom: 50px;
  max-width: 350px;

  h1 {
    font-size: 42px;
    margin: 0;
  }

  p {
    font-size: 16px;
    margin: 15px 0 0;
  }
`

const PageInfo = ({ title, author }) => (
  <Wrapper>
    <h1>{title}</h1>
    <p>{author}</p>
  </Wrapper>
)

export default PageInfo
