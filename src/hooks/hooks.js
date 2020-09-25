import { useEffect } from "react"

export const OutsideClickClosesMenu = (ref, handler) => {
  useEffect(() => {
    const listener = e => {
      if (!ref.current || ref.current.contains(e.target)) {
        return
      }
      handler(e)
    }
    document.addEventListener("mousedown", listener)
    console.log(`click`)
    return () => {
      document.removeEventListener("mousedown", listener)
    }
  }, [ref, handler])
}
