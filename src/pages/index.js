import * as React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Image from "../components/image"
import * as topStyles from "../css/top.module.scss"

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="TOP" />
      <div className={topStyles.top_kv}>
        <Image assetUrl="main.png" alt="" className={topStyles.top_kv_image} />
        <p className={topStyles.top_kv_desc}>Photoshopで使える技術や小ネタ等を<br className="sp" />紹介していきます。<br />目指せPhotoshopマスター！</p>
      </div>
      <div className={topStyles.top_posts_wrap}>
        <h2 className={topStyles.top_posts_wrap_heading}>記事一覧</h2>
        <ol className={topStyles.top_posts}>
          {posts.map(post => {
            const title = post.frontmatter.title || post.fields.slug

            return (
              <li key={post.fields.slug} className={topStyles.top_posts_item}>
                <Link to={post.fields.slug} itemProp="url">
                  <article itemScope itemType="http://schema.org/Article">
                    <div>
                      <h3 className={topStyles.top_posts_heading}>{title}</h3>
                      <p dangerouslySetInnerHTML={{__html: post.frontmatter.description || post.excerpt,}} itemProp="description"/>
                    </div>
                    <p className={topStyles.top_posts_date}>{post.frontmatter.date}</p>
                  </article>
                </Link>
              </li>
            )
          })}
        </ol>
      </div>
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "YYYY/MM/DD")
          title
          description
        }
      }
    }
  }
`
