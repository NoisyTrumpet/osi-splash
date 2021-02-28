import React from "react"
import { BLOCKS, MARKS } from "@contentful/rich-text-types"
import { renderRichText } from "gatsby-source-contentful/rich-text"
// DLS
import { Typography, Wrapper } from "@noisytrumpet/osi-dls"
import "./PrivacyPage.scss"

const PrivacyPage = ({ privacy }) => {
  const Bold = ({ children }) => (
    <Typography variant="headline-5">{children}</Typography>
  )
  const Text = ({ children }) => (
    <Typography variant="body-medium">{children}</Typography>
  )

  const options = {
    renderMark: {
      [MARKS.BOLD]: text => <Bold>{text}</Bold>,
      [MARKS.HEADING]: text => <Bold>{text}</Bold>,
    },
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => <Text>{children}</Text>,
      [BLOCKS.text]: (node, children) => <Bold>{children}</Bold>,
    },
  }
  return (
    <Wrapper addClass="privacy">
      <Typography variant="headline-2">Privacy Policy</Typography>
      {renderRichText(privacy, options)}
    </Wrapper>
  )
}

export default PrivacyPage
