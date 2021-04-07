import * as React from "react"
import { Link } from "gatsby"
import * as headerStyles from "../css/header.module.scss"

const Header = () => (
  <header className={headerStyles.header}>
      <h1 className={headerStyles.header_heading}>
        <Link to="/">Photoshop Tutorial</Link>
      </h1>
  </header>
)

export default Header
