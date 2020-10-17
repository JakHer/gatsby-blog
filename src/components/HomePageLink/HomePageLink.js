import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const StyledLink = styled(Link)`
  display: block;
  text-decoration: none;
  padding: 10px 15px;
  margin: 20px 0;
  color: black;
`

const HomePageLink = ({ to, children }) => (
  <StyledLink to={to}>{children}</StyledLink>
)

export default HomePageLink
