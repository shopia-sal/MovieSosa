"use client"

import { useEffect, useRef } from "react"

import { Link, useLocation } from "react-router-dom/cjs/react-router-dom.min"

import "./header.scss"
import logo from "../../assets/logo2.png"
import ThemeToggle from "../theme-toggle/ThemeToggle"

const headerNav = [
  {
    display: "Home",
    path: "/",
  },
  {
    display: "Movies",
    path: "/movie",
  },
  {
    display: "TV Series",
    path: "/tv",
  },
]

const Header = () => {
  const { pathname } = useLocation()
  const headerRef = useRef(null)

  const active = headerNav.findIndex((e) => e.path === pathname)

  useEffect(() => {
    const shrinkHeader = () => {
      if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        headerRef.current.classList.add("shrink")
      } else {
        headerRef.current.classList.remove("shrink")
      }
    }
    window.addEventListener("scroll", shrinkHeader)
    return () => {
      window.removeEventListener("scroll", shrinkHeader)
    }
  }, [])

  return (
    <div ref={headerRef} className="header">
      <div className="header__wrap container">
        <div className="logo">
          <img src={logo || "/placeholder.svg"} alt="" />
          <Link to="/">SoSa</Link>
        </div>
        <ul className="header__nav">
          {headerNav.map((e, i) => (
            <li key={i} className={`${i === active ? "active" : ""}`}>
              <Link to={e.path}>{e.display}</Link>
            </li>
          ))}
        </ul>
        <div className="header__theme">
          <ThemeToggle />
        </div>
      </div>
    </div>
  )
}

export default Header
