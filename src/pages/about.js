import React from "react"
import Post from "../components/Post/Post"
import HomePageLink from "../components/HomePageLink/HomePageLink"

const AboutPage = () => (
  <>
    <Post />
    <HomePageLink to="/">Go back to homepage</HomePageLink>
  </>
)

export default AboutPage
