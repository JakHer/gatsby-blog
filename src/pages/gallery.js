import React, { useEffect, useState } from "react"
import axios from "axios"
import styled from "styled-components"
import HomePageLink from "../components/HomePageLink/HomePageLink"

const StyledList = styled.ul`
  list-style-type: none;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 50px;
  margin-bottom: 20px;

  @media (max-width: 1100px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 700px) {
    grid-template-columns: 1fr;
  }
`

const StyledListItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  box-shadow: 0px 6px 16px rgba(24, 41, 67, 0.09);
  border-radius: 20px;
`

const StyledLinkWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background: #f5f7fa;
  padding: 20px 15px;
`

const StyledDescriptionWrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  padding: 20px 26px;
`

const StyledLink = styled.a`
  padding: 10px 13px;
  text-decoration: none;
  font-weight: 600;
  color: #0593fb;
`

const StyledLinkParagraph = styled.p`
  margin: 0;
  padding: 0;
`

const StyledHeader = styled.h2`
  margin-bottom: 20px;
`

const GalleryPage = () => {
  const [repos, setRepos] = useState([])
  const [isLoading, setLoading] = useState(false)
  const [error, setError] = useState([])

  useEffect(() => {
    const localRepos = JSON.parse(localStorage.getItem("repos"))
    localRepos && setRepos(localRepos)

    let isMounted = false
    const fetchRepos = async () => {
      try {
        setLoading(true)
        const response = await axios.get(
          `https://api.github.com/users/JakHer/repos?sort=updated`
        )
        if (!isMounted) {
          setRepos(
            response.data.filter(
              item => item.name !== "JakHer" && item.name !== "gatsby-blog"
            )
          )
          localStorage.setItem(
            "repos",
            JSON.stringify(
              response.data.filter(
                item => item.name !== "JakHer" && item.name !== "gatsby-blog"
              )
            )
          )
        }
      } catch (err) {
        if (!isMounted) {
          setError(err.message)
        }
      } finally {
        setLoading(false)
      }
    }
    !localRepos && fetchRepos()
    return () => {
      isMounted = false
    }
  }, [])

  return (
    <>
      <StyledHeader>Take a look at my portfolio projects</StyledHeader>
      {error && <p>{error}</p>}
      {isLoading ? (
        <div>Loading repos</div>
      ) : (
        !isLoading && (
          <>
            <StyledList>
              {repos.map(({ id, name, description, html_url, homepage }) => (
                <StyledListItem key={id}>
                  <StyledDescriptionWrapper>
                    <h3>{name}</h3>
                    <p>{description}</p>
                  </StyledDescriptionWrapper>
                  <StyledLinkWrapper>
                    <StyledLinkParagraph>
                      <StyledLink href={html_url}>Source</StyledLink>
                    </StyledLinkParagraph>
                    {homepage && (
                      <StyledLinkParagraph>
                        <StyledLink href={homepage}>Live</StyledLink>
                      </StyledLinkParagraph>
                    )}
                  </StyledLinkWrapper>
                </StyledListItem>
              ))}
            </StyledList>
          </>
        )
      )}

      <HomePageLink to="/">Siema</HomePageLink>
    </>
  )
}

export default GalleryPage
