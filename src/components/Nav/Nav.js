import React from "react"
import { Link } from "gatsby"
import { InlineSVG, Button } from "@noisytrumpet/osi-dls"
import scrollTo from "gatsby-plugin-smoothscroll"

import logo from "../../../static/svg/logo.svg"
import "./Nav.scss"

const Nav = () => {
  return (
    <nav role="navigation" className="navigation">
      <div className="nav-logo-wrapper">
        <Link to="/">
          <InlineSVG src={logo} />
        </Link>
      </div>
      <Button
        mode="secondary"
        click={() => {
          scrollTo("#form")
        }}
      >
        Contact
      </Button>
    </nav>
  )
}

export default Nav
