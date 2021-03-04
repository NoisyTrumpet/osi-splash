import React from "react"
import Img from "gatsby-image"
import { Typography, InlineSVG } from "@noisytrumpet/osi-dls"

// Styles
import "./Hero.scss"

const Hero = ({ image, imageAlt, info }) => {
  return (
    <section className="hero-new">
      <div className="content">
        <Typography variant="headline-1" addClass="hero-title">
          {imageAlt}
        </Typography>
        <InlineSVG className="infograph tablet-up" src={info} />
      </div>
      <section className="mages">
        <InlineSVG className="infograph mobile-down desktop-up" src={info} />

        <Img
          fluid={image.fluid}
          objectFit="cover"
          className="mobile-down"
          alt={imageAlt}
        />
      </section>
    </section>
  )
}

export default Hero
