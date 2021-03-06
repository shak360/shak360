import * as React from "react"
import { graphql, Link } from "gatsby"
import Header from "../components/Header"

const Layout = ( {data} ) => {
  const { edges } = data.allMarkdownRemark
  return (
    <div>
      <Header />
      {edges.map(edge => {
        const { frontmatter } = edge.node
        return (
          <div key={frontmatter.path}>
            <Link to={frontmatter.path}>
              {frontmatter.title}
            </Link>
          </div>
        )
      })}
    </div>
  )
}

export const query = graphql`
 query PostListQuery {
   allMarkdownRemark(sort: {
     order: DESC,
     fields: [frontmatter___date]
   }) {
     edges {
       node {
         frontmatter {
           title 
           path
           date
         }
       }
     }
   }
 }
`

export default Layout