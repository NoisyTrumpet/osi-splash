import React from "react"
import { BLOCKS, MARKS } from "@contentful/rich-text-types"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

// DLS
import { useMediaQuery } from "react-responsive"
import {
  Typography,
  Grid,
  Wrapper,
  Hero,
  InlineSVG,
  Footer,
} from "@noisytrumpet/osi-dls"

// SVGs
import clinic from "../../../static/svg/clinic.svg"
import remote from "../../../static/svg/remote.svg"
import patient from "../../../static/svg/patient.svg"
import info from "../../../static/svg/info.svg"
import ContactForm from "./Fragments/ContactForm"
import "./Home.scss"

const Home = ({ missionText, visionText, heroText, benefits, heroImage }) => {
  console.log(heroImage)

  const images = heroImage.gatsbyImageData.images.sources[0].srcSet

  const desktop = images.split(" 350w,")[1].split(" 700w")[0]

  const defaultImgSrc = {
    imageDesktop: desktop,
    imageTablet: desktop,
    imageMobile: desktop,
  }

  const isDesktop = useMediaQuery({ query: "(min-width: 767px)" })

  // const defaultImgSrc = {
  //   imageDesktop: "https://picsum.photos/700/600.webp",
  //   imageTablet: "https://picsum.photos/200/300.webp",
  //   imageMobile: "https://picsum.photos/200/300.webp",
  // }

  const Bold = ({ children }) => (
    <Typography variant="body-medium" className="bold">
      {children}
    </Typography>
  )
  const Text = ({ children }) => (
    <Typography htmlTagOverride="p">{children}</Typography>
  )

  const options = {
    renderMark: {
      [MARKS.BOLD]: text => <Bold>{text}</Bold>,
    },
    renderNode: {
      [BLOCKS.text]: (node, children) => <Text>{children}</Text>,
      [BLOCKS.EMBEDDED_ASSET]: node => {
        return (
          <>
            <h2>Embedded Asset</h2>
            <pre>
              <code>{JSON.stringify(node, null, 2)}</code>
            </pre>
          </>
        )
      },
    },
  }

  const Benefits = () => {
    return (
      benefits &&
      benefits.map(benefit => (
        <div className={`benefit-block`} key={benefit.title}>
          {benefit.title === "Clinic Operations" && (
            <Typography variant="headline-3" color="brand-white">
              Benefits
            </Typography>
          )}
          <div>
            {benefit.icon === "clinic-op" && (
              <InlineSVG className="icon" src={clinic} />
            )}
            {benefit.icon === "patient" && (
              <InlineSVG className="icon" src={patient} />
            )}
            {benefit.icon === "remote-icon" && (
              <InlineSVG className="icon" src={remote} />
            )}
            <Typography variant="headline-4" color="brand-white">
              {benefit.title}
            </Typography>
            <Typography variant="body" color="brand-white">
              {renderRichText(benefit.bodyText, options)}
            </Typography>
          </div>
        </div>
      ))
    )
  }
  return (
    <>
      <Hero
        image={defaultImgSrc}
        heroSVG={info}
        headlineFontStyle="h1"
        imageAltText={heroText}
        presetLayout="50/50, Osi"
        headline1="Remote patient monitoring technology with a human touch"
        bodySubtitleWidth
      />
      <ContactForm
        title="Learn More"
        subtitle="Share information below to stay up to date with the latest at OsiLIFE."
      />

      <div id="about">
        <div className="image-wrapper-test">
          {!isDesktop && (
            <GatsbyImage
              image={getImage(heroImage)}
              alt="OsiLIFE"
              placeholder="blurred"
            />
          )}
        </div>
        <Grid grid={2} landscape={2} portrait={2} mobile={1} gap={16}>
          <Wrapper addClass="about" id="about">
            <Typography variant="headline-2">About</Typography>
            <Typography variant="body-medium">
              OsiLIFE combines reliable technology with a human touch to partner
              with doctors and their clinical team to provide a more
              personalized healthcare experience for their patients.
            </Typography>
            <Typography variant="body-medium" addClass="body-p">
              {" "}
              Our diverse team of experienced and certified care managers works
              closely with healthcare providers to offer remote patient
              monitoring services for patients through the use of home based
              sensors, routine phone call check-ins and summary reporting of
              patient information and trends.
            </Typography>
            <Typography variant="body-medium" addClass="body-p">
              OsiLIFE Care Managers are the ‘Patient Care Partners’ you can
              depend on to collectively address the challenges of managing large
              patient populations, while driving value up and cost down for
              providers and patients alike.
            </Typography>
          </Wrapper>
          <Wrapper addClass="vision-mission">
            <Typography variant="headline-3">Our Vision...</Typography>
            <Typography variant="body-medium">{visionText}</Typography>
            <Typography variant="headline-3">Our Mission...</Typography>
            <Typography variant="body-medium">{missionText}</Typography>
          </Wrapper>
        </Grid>
      </div>
      <div id="benefits">
        <Grid grid={3} landscape={1} portrait={1} mobile={1} gap={0}>
          <Benefits />
        </Grid>
      </div>

      <Footer />
    </>
  )
}

export default Home
