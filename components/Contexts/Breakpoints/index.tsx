import { useState, useEffect, createContext, useContext } from "react"
import throttle from "../../Utils/throttle"

const ViewportContext = createContext(null)

export const ViewportProvider = ({ children }) => {
  const [breakpoints, setBreakpoints] = useState({
    xs: false,
    sm: false,
    md: false,
    lg: false,
    xl: false
  })

  const handleWindowResize = () => {
    throttle(() => {
      let newBreakpoints = {
        xs: false,
        sm: false,
        md: false,
        lg: false,
        xl: false
      }
      let width = window.innerWidth
  
      if(width < 576){
        newBreakpoints.xs = true
        newBreakpoints.sm = true
        newBreakpoints.md = true
        newBreakpoints.lg = true
        newBreakpoints.xl = true
      } else if (width < 768){
        newBreakpoints.sm = true
        newBreakpoints.md = true
        newBreakpoints.lg = true
        newBreakpoints.xl = true
      } else if(width < 992){
        newBreakpoints.md = true
        newBreakpoints.lg = true
        newBreakpoints.xl = true
      } else if(width < 1200){
        newBreakpoints.lg = true
        newBreakpoints.xl = true
      } else {
        newBreakpoints.xl = true
      }
  
      setBreakpoints(newBreakpoints)
    }, 200)
  }

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize)
    return () => window.removeEventListener("resize", handleWindowResize)
  }, [])

  return (
    <ViewportContext.Provider value={breakpoints}>
      {children}
    </ViewportContext.Provider>
  )
}

export const useBreakpoints = () => {
  const breakpoints = useContext(ViewportContext)

  return {
    breakpoints
  }
}