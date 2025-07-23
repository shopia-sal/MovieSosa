"use client"

import { useTheme } from "../../context/ThemeContext"
import "./theme-toggle.scss"

const ThemeToggle = () => {
  const { theme, toggleTheme, isDark } = useTheme()

  return (
    <button className="theme-toggle" onClick={toggleTheme} aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}>
      <div className="theme-toggle__track">
        <div className="theme-toggle__thumb">
          <div className="theme-toggle__icon">
            {isDark ? <i className="bx bx-moon"></i> : <i className="bx bx-sun"></i>}
          </div>
        </div>
      </div>
      <span className="theme-toggle__label">{isDark ? "Dark" : "Light"}</span>
    </button>
  )
}

export default ThemeToggle
