import React from "react"
import { useMediaQuery } from "react-responsive"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Typography, InlineSVG } from "@noisytrumpet/osi-dls"

// Styles
import "./Hero.scss"

const Hero = ({ image, imageAlt, info }) => {
  const isDesktop = useMediaQuery({
    query: "(min-width: 1024px)",
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
      <div className="images-container">
        {!isMobile && !isDesktop && (
          <InlineSVG className="infograph" src={info} />
        )}
        {notMobile && (
          <div>
            <GatsbyImage
              image={getImage(image)}
              layout="fluid"
              alt={imageAlt}
            />
          </div>
        )}
        {isMobile && <InlineSVG className="infograph" src={info} />}
      </div>
    </section>
  )
}

export default Hero
