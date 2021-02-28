import React from "react"
import { graphql } from "gatsby"

import Layout from "../layouts/index"
import SEO from "../components/SEO"
// DLS
import { Footer } from "@noisytrumpet/osi-dls"
import { PrivacyPage } from "../features/PrivacyPage"

const Terms = ({ data }) => {
  const privacy = data.contentfulPage.content

  return (
    <Layout location="/terms">
      <SEO title="Privacy Policy" description="Privacy Policy Description" />
      <PrivacyPage privacy={privacy} />
      <Footer />
    </Layout>
  )
}

export default Terms

export const pageQuery = graphql`
  query PrivacyQuery {
    site {
      siteMetadata {
        title
        url
        description
        image
      }
    }
    contentfulPage(title: { eq: "Privacy Policy" }) {
      content {
        raw
      }
    }
  }
`
