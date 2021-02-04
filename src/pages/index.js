import React from "react"
import { graphql } from "gatsby"
import { Helmet } from "react-helmet"
import Layout from "../components/layout"
import { documentToHtmlString } from "@contentful/rich-text-html-renderer"

import { Typography, Grid, Wrapper, Hero } from "@noisytrumpet/osi-dls"

const RootIndex = ({ data }) => {
  const siteTitle = data?.site.siteMetadata.title
  const posts = data.allContentfulBlogPost.edges

  const missionText = data.contentfulSplashPage.ourMission.internal.content
  const heroText = data.contentfulSplashPage.heroTagline
  const heroImage = data.contentfulSplashPage.heroImage.fluid.srcSet
  console.log(data)

  return (
    <Layout location="/">
      <Hero
        presetLayout="50/50, Osi"
        headline1={heroText}
        bodySubtitleWidth
        bodySubtitle=""
      />
      {/* @TODO: Hero Section */}
      {/* @TODO: Form Section */}
      {/* Vision & Mission Section */}
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
          <Typography variant="body-medium">
            Be a partner of choice for our clients by helping them pioneer,
            champion and sustain innovative healthcare practices that drive up
            patient care quality - and drive down costs.
          </Typography>
          <Typography variant="headline-4">Our Mission...</Typography>
          <Typography variant="body-medium">{missionText}</Typography>
        </Wrapper>
      </Grid>
      {/* @TODO: Benefits Section */}
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
    allContentfulBlogPost(sort: { fields: [publishDate], order: DESC }) {
      edges {
        node {
          title
          slug
          publishDate(formatString: "MMMM Do, YYYY")
          tags
          heroImage {
            fluid(maxWidth: 350, maxHeight: 196, resizingBehavior: SCALE) {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
          description {
            childMarkdownRemark {
              html
            }
            internal {
              content
            }
          }
        }
      }
    }
    contentfulSplashPage {
      childContentfulSplashPageOurMissionTextNode {
        childMarkdownRemark {
          html
        }
      }
      logoSubText
      logoType
      ourMission {
        childMarkdownRemark {
          html
        }
        internal {
          content
        }
      }
      ourVision {
        childMarkdownRemark {
          html
        }
        internal {
          content
        }
      }
      heroTagline
      heroImage {
        fluid(maxWidth: 1920, maxHeight: 800, resizingBehavior: SCALE) {
          ...GatsbyContentfulFluid_tracedSVG
        }
      }
      childrenContentfulSplashPageOurVisionTextNode {
        childMarkdownRemark {
          html
        }
        internal {
          content
        }
      }
      childrenContentfulSplashPageOurMissionTextNode {
        childMarkdownRemark {
          html
        }
        internal {
          content
        }
      }
      childContentfulSplashPageOurVisionTextNode {
        childMarkdownRemark {
          html
        }
        internal {
          content
        }
      }
    }
  }
`
