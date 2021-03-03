import React from "react"
import { GatsbyImage } from "gatsby-plugin-image";

export default ({ data }) => (
  <div>
    <GatsbyImage image={data.childImageSharp.gatsbyImageData} alt={data.name} />
    <div>
      <h3>{data.name}</h3>
      <p>{data.title}</p>
      <p>{data.shortBio.shortBio}</p>
    </div>
  </div>
)
