require("dotenv").config();

module.exports = {
  siteMetadata: {
    siteUrl: `https://devprotection.net`,
    title: "DEV Protection",
    description:"Construction Earthing & Lightning Protection",
    twitter: "@Dev_Protection",
    banner:"/logo.png"
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    'gatsby-plugin-robots-txt',
    "gatsby-plugin-image",
    "gatsby-plugin-netlify",
    `gatsby-alias-imports`,
    "gatsby-transformer-sharp",
    "gatsby-transformer-remark",
    "gatsby-transformer-json",
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaultQuality:60,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "data",
        path: "./src/assets/data/",
      },
      __key: "data",
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /svg/
        }
      }
    },

    // {
    //   resolve: `gatsby-plugin-gtag`,
    //   // options: {
    //   //   trackingId: `UA-73118395-1`,
    //   //   head: false,
    //   // },
    // },
  ],
};
