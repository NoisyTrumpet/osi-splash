import React from "react"
import { BLOCKS, MARKS } from "@contentful/rich-text-types"
import { renderRichText } from "gatsby-source-contentful/rich-text"
// DLS
import { Typography, Wrapper } from "@noisytrumpet/osi-dls"
import "./CookiesPage.scss"

const CookiesPage = ({ cookies }) => {
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
    <Wrapper addClass="cookies">
      <Typography variant="headline-2">Cookies Policy</Typography>
      {renderRichText(cookies, options)}
    </Wrapper>
  )
}

export default CookiesPage
