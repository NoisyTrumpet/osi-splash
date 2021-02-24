import React from "react"
import { BLOCKS, MARKS } from "@contentful/rich-text-types"
import { renderRichText } from "gatsby-source-contentful/rich-text"
// DLS
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
import "./Home.scss"

const Home = ({ missionText, visionText, heroText, benefits }) => {
  const defaultImgSrc = {
    imageDesktop: "https://picsum.photos/645/640",
    imageTablet: "https://picsum.photos/516/512",
    imageMobile: "https://picsum.photos/378/375",
  }

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
        presetLayout="50/50, Osi"
        headline1={heroText}
        bodySubtitleWidth
        bodySubtitle=""
        image={defaultImgSrc}
        imageAltText={heroText}
      />
      <Grid grid={2} landscape={2} portrait={2} mobile={1} gap={16}>
        <Wrapper addClass="about">
          <Typography variant="headline-2">About</Typography>
          <Typography variant="body-medium">
            OsiLIFE combines reliabletechnology with a human touch to partner
            with doctors and their clinical team to provide a more personalized
            healthcare experience for their patients.
          </Typography>
          <br />
          <br />
          <Typography variant="body-medium">
            {" "}
            Our diverse team of experienced and certified care managers works
            closely with healthcare providers to offer remote patient monitoring
            services for patients through the use of home based sensors, routine
            phone call check-ins and summary reporting of patient information
            and trends.
          </Typography>
          <br />
          <br />
          <Typography variant="body-medium">
            OsiLIFE Care Managers are the ‘Patient Care Partners’ you can depend
            on to collectively address the challenges of managing large patient
            populations, while driving value up and cost down for providers and
            patients alike.
          </Typography>
        </Wrapper>
        <Wrapper addClass="vision-mission">
          <Typography variant="headline-4">Our Vision...</Typography>
          <Typography variant="body-medium">{visionText}</Typography>
          <Typography variant="headline-4">Our Mission...</Typography>
          <Typography variant="body-medium">{missionText}</Typography>
        </Wrapper>
      </Grid>
      <Grid grid={3} landscape={3} portrait={1} mobile={1} gap={0}>
        <Benefits />
      </Grid>
      <Footer />
    </>
  )
}

export default Home
