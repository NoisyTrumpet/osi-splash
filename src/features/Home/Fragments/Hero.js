import React from "react"
import Img from "gatsby-image"
import { useMediaQuery } from "react-responsive"
import { Typography, InlineSVG } from "@noisytrumpet/osi-dls"

// Styles
import "./Hero.scss"

const Hero = ({ image, imageAlt, info }) => {
  const isDesktop = useMediaQuery({
    query: "(min-width: 1025px)",
  })
  const isMobile = useMediaQuery({
    query: "(max-width: 767px)",
  })
  const notMobile = useMediaQuery({
    query: "(min-width: 766px)",
  })

  return (
    <section className="hero-new">
      <div className="content">
        <Typography variant="headline-1" addClass="hero-title">
          {imageAlt}
        </Typography>
        {isDesktop && <InlineSVG className="infograph" src={info} />}
      </div>
      <section className="mages">
        {!isMobile && !isDesktop && (
          <InlineSVG className="infograph" src={info} />
        )}
        {notMobile && (
          <Img fluid={image.fluid} objectFit="cover" alt={imageAlt} />
        )}
        {isMobile && <InlineSVG className="infograph" src={info} />}
      </section>
    </section>
  )
}

export default Hero
