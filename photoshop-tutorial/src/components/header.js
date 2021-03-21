import * as React from "react"
import { Link } from "gatsby"
import * as headerStyles from "../css/header.module.scss"

const Header = () => (
  <header className={headerStyles.header}>
      <div className={headerStyles.header_inner}>
        <h1 className={headerStyles.header_heading}>
          <Link to="/">Photoshop Tutorial</Link>
        </h1>
      </div>
  </header>
)

export default Header
