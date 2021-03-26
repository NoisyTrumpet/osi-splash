import React from "react"
import { graphql } from "gatsby"

import Layout from "../layouts/index"
import SEO from "../components/SEO"
// DLS
import { Footer } from "@noisytrumpet/osi-dls"
import { CookiesPage } from "../features/CookiesPage"

const Cookies = ({ data }) => {
  const cookies = data.contentfulPage.content

  return (
    <Layout location="/cookies">
      <SEO title="Cookies Policy" description="Cookies Policy Page Description" />
      <CookiesPage cookies={cookies} />
      <Footer />
    </Layout>
  )
}

export default Cookies

export const pageQuery = graphql`
  query CookiesQuery {
    site {
      siteMetadata {
        title
        url
        description
        image
      }
    }
    contentfulPage(title: { eq: "Cookies Policy" }) {
      content {
        raw
      }
    }
  }
`
