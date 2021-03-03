import React from "react"
import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image";

// import styles from './article-preview.module.css'

export default ({ article }) => (
  <div>
    <GatsbyImage image={article.childImageSharp.gatsbyImageData} alt="" />
    <h3>
      <Link to={`/blog/${article.slug}`}>{article.title}</Link>
    </h3>
    <small>{article.publishDate}</small>
    <div
      dangerouslySetInnerHTML={{
        __html: article.description.childMarkdownRemark.html,
      }}
    />
    {article.tags && article.tags.map(tag => <p key={tag}>{tag}</p>)}
  </div>
)
