import { useState } from "react"

export const useDarkMode = () => {
  const [isDarkmode, setIsDarkMode] = useState(false)

  const handleDarkMode = () => {
    setIsDarkMode((prev) => !prev)
    document.documentElement.classList.toggle("dark")
  }

  return { isDarkmode, handleDarkMode }
}
