import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Image = ({ assetUrl, alt }) => {
  const { allImageSharp } = useStaticQuery(graphql`
    query {
      allImageSharp {
        nodes {
          fixed(width: 290) {
            originalName
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return <Img fixed={allImageSharp.nodes.find(n => n.fixed.originalName === assetUrl).fixed} alt={alt} />
}

export default Image
