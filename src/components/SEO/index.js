import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { StaticQuery, graphql } from "gatsby"

const SEO = ({
  title,
  description,
  imageSrc,
  imageHeight,
  imageWidth,
  article,
}) => (
  <StaticQuery
    query={query}
    render={({
      site: {
        siteMetadata: { title, url, image, description },
      },
    }) => {
      //   if (typeof window !== 'undefined' && !link) {
      //     link = window.location.href
      //     linkCheck = window.location.pathname
      //   }
      //   function image() {
      //     if (linkCheck.includes('/list/')) {
      //       return seo.image
      //     } else {
      //       return seo.imageSrc
      //     }
      //   }
      const seo = {
        title: title,
        description: description,
        imageSrc: image,
        image: image,
        url: url,
        imageHeight,
        imageWidth,
      }
      return (
        <>
          <Helmet title={seo.title}>
            <meta name="description" content={seo.description} />
            <meta name="og:image" content={seo.image} />
            {seo.url && <meta property="og:url" content={seo.url} />}
            {(article ? true : null) && (
              <meta property="og:type" content="article" />
            )}
            {seo.title && <meta property="og:title" content={seo.title} />}
            {seo.description && (
              <meta property="og:description" content={seo.description} />
            )}
            {seo.image && <meta property="og:image" content={seo.image} />}
            {seo.imageHeight && (
              <meta property="og:image:height" content={seo.imageHeight} />
            )}
            {seo.imageWidth && (
              <meta property="og:image:width" content={seo.imageWidth} />
            )}
            {seo.image && <meta property="og:image" content={seo.image} />}
            {/* <meta name="twitter:card" content="summary_large_image" />
            {twitterUsername && (
              <meta name="twitter:creator" content={twitterUsername} />
            )}
            {seo.title && <meta name="twitter:title" content={seo.title} />}
            {seo.description && (
              <meta name="twitter:description" content={seo.description} />
            )}
            {seo.image && <meta name="twitter:image" content={seo.image} />} */}
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1, maximum-scale=1"
            />
            <html lang="en" />
          </Helmet>
        </>
      )
    }}
  />
)

export default SEO

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  url: PropTypes.string,
}

SEO.defaultProps = {
  title: null,
  description: null,
  image: null,
  pathname: null,
  article: false,
}

const query = graphql`
  query SEO {
    site {
      siteMetadata {
        title
        description
        url
        image
      }
    }
  }
`
