import React from "react"
import Navigation from "../components/Navigation/Navigation"
import GlobalStyle from "../assets/styles/globalStyles"
import { PreventTransitionOnResize } from "../hooks/hooks"

const MainLayout = ({ children }) => {
  PreventTransitionOnResize()
  return (
    <>
      <GlobalStyle />
      <Navigation />
      {children}
    </>
  )
}

export default MainLayout
