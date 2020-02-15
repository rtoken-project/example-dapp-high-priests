require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `rTrees`,
    description: `Wanna help save the planet? Plant real trees for free using your DAI interest.`,
    author: `@pi0neerpat, @patrykadas`,
    siteURL: "https://rtrees.dappy.dev",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `rTrees Planting`,
        short_name: `rTrees`,
        start_url: `/`,
        background_color: `#0a1a5d`,
        theme_color: `#fef6f2`,
        // https://developers.google.com/web/fundamentals/web-app-manifest/#display
        //  https://developers.google.com/web/fundamentals/app-install-banners/
        // Prevent minibar from appearing until grove https://developers.google.com/web/fundamentals/app-install-banners/#preventing_the_mini-infobar_from_appearing
        display: `browser`,
        icon: `src/images/mobile.png`,
        cache_busting_mode: `query`,
      },
    },
    {
      resolve: "gatsby-plugin-matomo",
      options: {
        siteId: 1,
        matomoUrl: "https://matomo.patrickgallagher.dev",
        siteUrl: "https://rtrees.dappy.dev",
      },
    },
    "gatsby-plugin-remove-serviceworker",
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {},
    },
  ],
}
