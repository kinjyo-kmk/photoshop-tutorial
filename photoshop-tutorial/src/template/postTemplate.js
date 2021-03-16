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
      <Header siteTitle={data.site?.title || `Title`} />
        <div className={postStyles.post_container}>
          <div className={postStyles.post_inner}>
            <h1>{frontmatter.title}</h1>
            <h2>{frontmatter.date}</h2>
            <div
              className="blog-post-content"
              dangerouslySetInnerHTML={{ __html: html }}
            />
          </div>
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
