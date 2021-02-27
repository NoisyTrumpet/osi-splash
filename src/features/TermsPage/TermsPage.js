import React from "react"
import { BLOCKS, MARKS } from "@contentful/rich-text-types"
import { renderRichText } from "gatsby-source-contentful/rich-text"
// DLS
import { Typography, Wrapper } from "@noisytrumpet/osi-dls"
import "./TermsPage.scss"

const TermsPage = ({ terms }) => {
  const Bold = ({ children }) => (
    <Typography variant="headline-5">{children}</Typography>
  )
  const Text = ({ children }) => (
    <Typography variant="body-medium">{children}</Typography>
  )

  const options = {
    renderMark: {
      [MARKS.BOLD]: text => <Bold>{text}</Bold>,
    },
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => <Text>{children}</Text>,
    },
  }
  return (
    <Wrapper addClass="terms">
      <Typography variant="headline-2">Terms & Conditions</Typography>
      {renderRichText(terms, options)}
    </Wrapper>
  )
}

export default TermsPage
