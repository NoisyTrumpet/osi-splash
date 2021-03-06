import React from "react"
import { BLOCKS, MARKS } from "@contentful/rich-text-types"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import scrollTo from "gatsby-plugin-smoothscroll"
// DLS
import {
  Typography,
  Grid,
  Wrapper,
  InlineSVG,
  Footer,
  Button,
} from "@noisytrumpet/osi-dls"

// SVGs
import clinic from "../../../static/svg/clinic.svg"
import remote from "../../../static/svg/remote.svg"
import patient from "../../../static/svg/patient.svg"
import info from "../../../static/svg/info.svg"
import ContactForm from "./Fragments/ContactForm"
import Hero from "./Fragments/Hero"
import "./Home.scss"

const Home = ({ missionText, visionText, heroText, benefits, heroImage }) => {
  const Bold = ({ children }) => (
    <Typography variant="body-medium" className="bold">
      {children}
    </Typography>
  )
  const Text = ({ children }) => (
    <Typography htmlTagOverride="p">{children}</Typography>
  )

  const imageSrc = heroImage.gatsbyImageData

  const options = {
    renderMark: {
      [MARKS.BOLD]: text => <Bold>{text}</Bold>,
    },
    renderNode: {
      [BLOCKS.text]: (node, children) => <Text>{children}</Text>,
      [BLOCKS.list_item]: (node, children) => <Text>{children}</Text>,
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
            <Typography variant="headline-2" color="brand-white">
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
        image={heroImage}
        imageAlt="Remote patient monitoring technology with a human touch"
        info={info}
      />
      <div className="cta-block mobile-up">
        <Button
          mode="secondary"
          click={() => {
            scrollTo("#form")
          }}
        >
          Contact
        </Button>
      </div>

      <div id="benefits">
        <Grid grid={3} landscape={1} portrait={1} mobile={1} gap={0}>
          <Benefits />
        </Grid>
      </div>

      <div id="about">
        <GatsbyImage image={imageSrc} alt={heroText} className="mobile-up" />
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

      <ContactForm
        title="Learn More"
        subtitle="Share your information below to stay up to date with the latest at OsiLIFE."
      />

      <Footer footerText="The health information contained on this website is for educational purposes only and does not constitute medical advice or a guaranty of treatment, outcome, or cure. Please consult with your healthcare provider for specific medical advice. This information is not intended to create a physician-patient relationship between OsiLIFE or any physician and the reader." />
    </>
  )
}

export default Home
