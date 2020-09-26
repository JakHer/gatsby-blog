import React, { useContext, useState } from "react"

export const AppContext = React.createContext()

const ContextProvider = ({ children }) => {
  const [isNavigationOpen, toggleNavigation] = useState(false)

  const value = {
    value: isNavigationOpen,
    toggle: () => toggleNavigation(!isNavigationOpen),
    setMenuFalse: () => toggleNavigation(false),
  }
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}

export const useMenu = () => {
  const context = useContext(AppContext)

  if (context === undefined) {
    throw new Error("useMenu should me nested in ContextProvider")
  }
  return context
}

export default ContextProvider
