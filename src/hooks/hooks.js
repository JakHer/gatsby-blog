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
    return () => {
      document.removeEventListener("mousedown", listener)
    }
  }, [ref, handler])
}

export const PreventTransitionOnResize = () => {
  useEffect(() => {
    let resizeTimer
    window.addEventListener("resize", () => {
      document.body.classList.add("resize-animation-stopper")
      clearTimeout(resizeTimer)

      resizeTimer = setTimeout(() => {
        document.body.classList.remove("resize-animation-stopper")
      }, 400)
    })
  }, [])
}
