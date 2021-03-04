import React from "react"
import { useMediaQuery } from "react-responsive"
import { Typography, InlineSVG, Image } from "@noisytrumpet/osi-dls"

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

  const tablet = image.fluid.srcWebp
  const desktop = image.fluid.srcWebp

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
          <div>
            <Image src={desktop} alt={imageAlt} lazyLoad={false}>
              <Image.Source media="(max-width:1024px)" srcSet={tablet} />
            </Image>
          </div>
        )}
        {isMobile && <InlineSVG className="infograph" src={info} />}
      </section>
    </section>
  )
}

export default Hero
