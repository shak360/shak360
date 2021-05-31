import React from "react"
import { graphql } from "gatsby"

const Template = ( {data} ) => {
  console.log(data)
  const {markdownRemark} = data
  const title = markdownRemark.frontmatter.title
  const html = markdownRemark.html
  return (
      <div>
        <h1>
          {title}
        </h1>
          <div
            dangerouslySetInnerHTML={{__html: html}} />
          <script src="https://polyfill.io/v3/polyfill.min.js?features=es6"></script>
          <script id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>
      </div>
  )
}

export const query = graphql`
  query($pathSlug: String!) {
    markdownRemark(frontmatter: {path: {eq: $pathSlug}}) {
      html
      frontmatter {
        title
      }
    }
  }
`

export default Template