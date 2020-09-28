import React from "react"
import Navigation from "../components/Navigation/Navigation"
import GlobalStyle from "../assets/styles/globalStyles"
import { PreventTransitionOnResize } from "../hooks/hooks"
import ContextProvider from "../context/index"

const MainLayout = ({ children }) => {
  PreventTransitionOnResize()
  return (
    <ContextProvider>
      <GlobalStyle />
      <Navigation />
      {children}
    </ContextProvider>
  )
}

export default MainLayout
