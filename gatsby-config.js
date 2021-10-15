module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "Strytegy",
  },
  plugins: [
    "gatsby-plugin-styled-components",
    {
      resolve: "gatsby-source-graphql",
      options: {
        typeName: "alldata",
        fieldName: "alldata",
        url: "https://api-us-east-1.graphcms.com/v2/cku8vkieq4a6g01xn51y74oa4/master",
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Andada Pro\:300,500,600,800`,
          `Playfair Display\:400,500,600`,
          `Oswald\:200,400,500`,
        ],
        display: 'swap'
      }
    },
  ]
};
