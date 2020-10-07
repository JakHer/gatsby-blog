import React, { useEffect, useState } from "react"
import { Link } from "gatsby"
import axios from "axios"

const GalleryPage = () => {
  const [repos, setRepos] = useState([])
  const [isLoading, setLoading] = useState(false)
  const [error, setError] = useState([])

  useEffect(() => {
    setLoading(true)
    axios({
      method: "GET",
      url: `https://api.github.com/users/JakHer/repos?sort=updated`,
    })
      .then(resp => {
        setTimeout(() => {
          setRepos(
            resp.data.filter(
              item => item.name !== "JakHer" && item.name !== "gatsby-blog"
            )
          )
          setLoading(false)
        }, 2000)
      })
      .catch(err => {
        setError(err.message)
        setLoading(false)
      })
  }, [])

  return (
    <>
      {error && <p>{error}</p>}
      {isLoading ? (
        <div>Loading</div>
      ) : (
        !isLoading && (
          <>
            <ul>
              {repos.map(item => (
                <li key={item.id}>{item.name}</li>
              ))}
            </ul>
          </>
        )
      )}
      <h1>Hi from the Gallery page</h1>
      <p>Welcome to Gallery page</p>
      <Link to="/">Go back to the homepage</Link>
    </>
  )
}

export default GalleryPage
