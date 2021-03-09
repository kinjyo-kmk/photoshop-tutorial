import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

export default function TOP() {
  return (
    <Layout>
      <div>
        <p>トップページのメインコンテンツ！</p>
        <Link to={"/about/"}>概要</Link>
      </div>
    </Layout>
  )
}
