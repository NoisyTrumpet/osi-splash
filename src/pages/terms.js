import React from "react"
import { BLOCKS, MARKS } from "@contentful/rich-text-types"
import { renderRichText } from "gatsby-source-contentful/rich-text"

import Layout from "../layouts/index"
import SEO from "../components/SEO"

// DLS
import {
    Typography,
    Wrapper,
    Footer,
  } from "@noisytrumpet/osi-dls"

const Terms = ({ data }) => {
    const termsText = data.contentfulPage.content.raw;
    console.log(termsText);
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

    return(
        <Layout location="/terms">
        <SEO />
        <Wrapper addClass="terms">
            <Typography variant="headline-2">Terms & Conditions</Typography>
            <Typography variant ="body-medium">{renderRichText(termsText, options)}</Typography>
        </Wrapper>
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
    contentfulPage(title: {eq: "Terms & Conditions"}) {
        content {
            raw
        }
      }
  }
`