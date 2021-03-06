import React from "react"
import { Link } from "gatsby"

export default ({ article }) => {
  return (
    <div>
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
}
