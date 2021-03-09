import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Meta from "../components/meta"

export default function TOP() {
  return (
    <Layout>
			<Meta
				title="サブ"
				desc="Gatsby.jsの使い方を説明するためのサンプルページです。"
			/>
      <div>
        <p>概要ページです。</p>
        <Link to={"/"}>TOP</Link>
      </div>
    </Layout>
  )
}
