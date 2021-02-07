module.exports = {
  siteMetadata: {
    title: "100Days",
  },
  plugins: [
    {
      resolve: "gatsby-source-contentful",
      options: {
        accessToken: "TcFBrnsGDToAP8o7uHfFWYhqguGyDgSU83LHY_FBgUs",
        spaceId: "tgz00lori3q9",
      },
    },
    "gatsby-plugin-theme-ui",
    "gatsby-plugin-sharp",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-offline",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
  ],
};
