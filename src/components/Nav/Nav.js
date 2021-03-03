import React from "react"
import { Link } from "gatsby"
import { InlineSVG, Button } from "@noisytrumpet/osi-dls"
import { useMediaQuery } from "react-responsive"
import scrollTo from "gatsby-plugin-smoothscroll"

import logo from "../../../static/svg/logo.svg"
import "./Nav.scss"

const Nav = () => {
  const isDesktop = useMediaQuery({ query: "(min-width: 767px)" })
  return (
    <nav role="navigation" className="navigation">
      <div className="nav-logo-wrapper">
        <Link to="/">
          <InlineSVG src={logo} />
        </Link>
      </div>
      {isDesktop && (
        <Button
          mode="secondary"
          click={() => {
            scrollTo("#form")
          }}
        >
          Contact
        </Button>
      )}
    </nav>
  )
}

export default Nav
