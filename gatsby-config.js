require("dotenv").config();

module.exports = {
  siteMetadata: {
    siteUrl: `https://devprotection.net`,
    title: "DEV Earthing & Lighting Protection Services",
    description:"We specialise in the design, testing, installation, certification, and commissioning of Earthing & Lightning Protection for various High and Low Electrical Power Industries in Namibia.",
    twitter: "@Dev_Protection",
    banner:"/logo.png"
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    'gatsby-plugin-robots-txt',
    "gatsby-plugin-netlify",
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /svg/
        }
      }
    },
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaultQuality: 60,
        placeholder: `blurred`,
        breakpoints: [750, 1080, 1366, 1920],
      },
    },
    "gatsby-plugin-image",
    `gatsby-alias-imports`,
    "gatsby-transformer-sharp",
    "gatsby-transformer-remark",
    "gatsby-transformer-json",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "data",
        path: "./src/assets/data/",
      },
      __key: "data",
    },

    {
      resolve: `gatsby-plugin-gtag`,
      options: {
        trackingId: `G-V8J38H9E3Y`,
        head: false,
      },
    },
  ],
};
