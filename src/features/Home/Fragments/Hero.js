import React from "react"
import Img from "gatsby-image"
import Media from "react-media"
import { Typography, InlineSVG } from "@noisytrumpet/osi-dls"

// Styles
import "./Hero.scss"

const Hero = ({ image, imageAlt, info }) => {
  // const isDesktop = useMediaQuery({
  //   query: "(min-width: 1025px)",
  // })
  // const isMobile = useMediaQuery({
  //   query: "(max-width: 767px)",
  // })
  // const notMobile = useMediaQuery({
  //   query: "(min-width: 766px)",
  // })

  return (
    <section className="hero-new">
      <div className="content">
        <Typography variant="headline-1" addClass="hero-title">
          {imageAlt}
        </Typography>
        <Media
          query="(min-width: 1024px)"
          render={() => <InlineSVG className="infograph" src={info} />}
        />
      </div>
      <section className="mages">
        <Media
          query="(max-width: 1025px) and (min-width: 767px)"
          render={() => <InlineSVG className="infograph" src={info} />}
        />

        <Media
          query="(min-width: 766px) "
          render={() => (
            <Img fluid={image.fluid} objectFit="cover" alt={imageAlt} />
          )}
        />

        <Media
          query="(max-width: 767px)"
          render={() => <InlineSVG className="infograph" src={info} />}
        />
      </section>
    </section>
  )
}

export default Hero
