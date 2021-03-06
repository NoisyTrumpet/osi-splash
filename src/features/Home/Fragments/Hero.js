import React from "react"
import { Typography, InlineSVG } from "@noisytrumpet/osi-dls"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
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

        <GatsbyImage
          loading="eager"
          image={getImage(image)}
          className="mobile-down"
          alt={imageAlt}
        />
      </section>
    </section>
  )
}

export default Hero
