import React from "react"
import { graphql } from "gatsby"

import Layout from "../layouts/index"
import SEO from "../components/SEO"
// DLS
import { Footer } from "@noisytrumpet/osi-dls"
import { TermsPage } from "../features/TermsPage"

const Terms = ({ data }) => {
  const terms = data.contentfulPage.content

  return (
    <Layout location="/terms">
      <SEO title="Terms & Conditions" description="Terms Page Description" />
      <TermsPage terms={terms} />
      <Footer />
    </Layout>
  )
}

export default Terms

export const pageQuery = graphql`
  query TermsQuery {
    site {
      siteMetadata {
        title
        url
        description
        image
      }
    }
    contentfulPage(title: { eq: "Terms & Conditions" }) {
      content {
        raw
      }
    }
  }
`
