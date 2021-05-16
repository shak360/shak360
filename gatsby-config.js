module.exports = {
  siteMetadata: {
    title: "shak360",
    description: "Personal website for Shakthi Visagan",
    site: "https://shak360.pages.dev",
  },
  plugins: [
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "data",
        path: "./src/data/",
      },
      __key: "data",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "md-posts",
        path: "./src/md-posts/",
      },
      __key: "md-posts",
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-mathjax`,
        ],
      },
    },
  ],
};
