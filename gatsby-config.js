require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `High Priests`,
    description: `Mystical social donation app.`,
    author: `@pi0neerpat, @patrykadas, @FrancescoRenziA, @twoirtter`,
    siteURL: "https://highpriests.rdai.money",
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
        name: `High Priests`,
        short_name: `High Priests`,
        start_url: `/`,
        background_color: `#121427`,
        theme_color: `#7E58F5`,
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
        siteId: 4,
        matomoUrl: "https://matomo.patrickgallagher.dev",
        siteUrl: "https://highpriests.rdai.money",
      },
    },
    "gatsby-plugin-remove-serviceworker",
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {},
    },
  ],
}
