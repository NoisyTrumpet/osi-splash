import React from "react"
import { graphql } from "gatsby"
import Layout from "../layouts/index"
import { Home } from "../features/Home"

import "./index.scss"

const RootIndex = ({ data }) => {
  const missionText = data.contentfulSplashPage.ourMission.internal.content
  const visionText = data.contentfulSplashPage.ourVision.internal.content
  const heroText = data.contentfulSplashPage.heroTagline

  const benefits = data.contentfulSplashPage.benefitsAll

  return (
    <Layout location="/">
      <Home
        missionText={missionText}
        visionText={visionText}
        heroText={heroText}
        benefits={benefits}
      />
    </Layout>
  )
}

export default RootIndex

export const pageQuery = graphql`
  query HomeQuery {
    site {
      siteMetadata {
        title
      }
    }
    contentfulSplashPage {
      logoSubText
      logoType
      ourMission {
        internal {
          content
        }
      }
      benefitsAll {
        title
        icon
        bodyText {
          raw
        }
      }
      ourVision {
        internal {
          content
        }
      }
      heroTagline
    }
  }
`
