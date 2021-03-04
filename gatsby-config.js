require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

const contentfulConfig = {
  spaceId: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
}

// if you want to use the preview API please define
// CONTENTFUL_HOST in your environment config
// the `host` property should map to `preview.contentful.com`
// https://www.contentful.com/developers/docs/references/content-preview-api/#/reference/spaces/space/get-a-space/console/js
if (process.env.CONTENTFUL_HOST) {
  contentfulConfig.host = process.env.CONTENTFUL_HOST
}

const { spaceId, accessToken } = contentfulConfig

if (!spaceId || !accessToken) {
  throw new Error(
    "Contentful spaceId and the access token need to be provided."
  )
}

module.exports = {
  siteMetadata: {
    title: "OsiLIFE",
    description: "OsiLIFE Description",
    image: "https://www.noisytrumpet.com/wp-content/uploads/2021/01/osi.png",
    url: "https://www.osilife.com/",
  },
  pathPrefix: "/osi-splash",
  /* Your site config here */
  plugins: [
    {
      resolve: "gatsby-plugin-google-marketing-platform",
      options: {
        // dataLayer: {
        //   gaPropertyId: '[Google Analytics ID]',
        // },
        tagmanager: {
          id: "GTM-KTG3DT7",
        },
        // analytics: {
        //   id: '[Google Analytics ID]'
        // }
      },
    },
    "gatsby-transformer-remark",
    "gatsby-transformer-sharp",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sharp",
    `gatsby-plugin-sass`,
    `gatsby-plugin-preload-fonts`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        // CommonMark mode (default: true)
        commonmark: true,
        // Footnotes mode (default: true)
        footnotes: true,
        // Pedantic mode (default: true)
        pedantic: true,
        // GitHub Flavored Markdown mode (default: true)
        gfm: true,
        // Plugins configs
        plugins: [],
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "SVG",
        path: `${__dirname}/static/svg/`,
      },
    },
    {
      resolve: "gatsby-source-contentful",
      options: contentfulConfig,
    },
    `gatsby-plugin-smoothscroll`,
  ],
}
