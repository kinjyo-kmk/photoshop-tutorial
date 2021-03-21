import * as React from "react"
import { graphql } from "gatsby"
import * as postStyles from "./post.module.scss"

import Header from "./header"
import Footer from "./footer"

export default function Template({
  data,
}) {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark

  return (
    <>
      <Header />
        <div className={postStyles.post_container}>
          <div className={postStyles.post_kv}>
            <h1 className={postStyles.post_kv_heading}>{frontmatter.title}</h1>
            <p  className={postStyles.post_kv_date}>{frontmatter.date}</p>
          </div>
          <div  className={postStyles.post_content} dangerouslySetInnerHTML={{ __html: html }} />
        </div>
      <Footer />
    </>
  )
}

// .mdデータを取得するためのGraphQLクエリ
export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
      }
    }
  }
`
