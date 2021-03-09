import React from "react"
import { Helmet } from "react-helmet"

export default function Meta(props) {
    const baseTitle = "サンプルサイト"
    const title = props.title ? `${props.title} | ${baseTitle}` : baseTitle
    return (
      <Helmet>
        <html lang="ja" />
        <title>{title}</title>
        <meta name="description" content={props.desc} />
      </Helmet>
    )
}
