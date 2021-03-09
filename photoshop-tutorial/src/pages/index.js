import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Meta from "../components/meta"

export default function TOP() {
  return (
    <Layout>
      <Meta
        title="トップページ"
        desc="Gatsby.jsの使い方を説明するためのサンプルページです。"
      />
      <div>
        <p>トップページのメインコンテンツ！</p>
        <Link to={"/about/"}>概要</Link>
      </div>
    </Layout>
  )
}
