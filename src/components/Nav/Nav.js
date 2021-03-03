import React from "react"
import { Link } from "gatsby"
import { InlineSVG } from "@noisytrumpet/osi-dls"
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
      <ul className="navigation-menu">
        <li className="navigation-item">
          <Link
            to="#about"
            className="typography typography-cta-tertiary color-brand-blue typography typography-cta-tertiary color-brand-blue-tertiary"
          >
            About
          </Link>
        </li>
        <li className="navigation-item">
          <Link
            to="#benefits"
            className="typography typography-cta-tertiary color-brand-blue typography typography-cta-tertiary color-brand-blue-tertiary"
          >
            Benefits
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Nav
