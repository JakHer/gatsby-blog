import React from "react"
import { Link } from "gatsby"

const Navigation = () => (
  <nav>
    <span>JaHe</span>
    <ul>
      <Link to="articles">articles</Link>
      <Link to="gallery">gallery</Link>
      <Link to="contact">contact</Link>
      <Link to="about">about</Link>
    </ul>
  </nav>
)

export default Navigation
