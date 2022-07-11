/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    {
      resolve: `@chec/gatsby-source-chec`,
      options: {
        publicKey: 'pk_379200d5ccfde26f33017436a8f4211147c957e5eabe3',
        downloadImageAssets: true, // false by default
      },
    },
  ],
}
