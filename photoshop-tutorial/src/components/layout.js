import * as React from "react"

import Header from "../components/header"
import Footer from "../components/footer"
import * as layoutStyles from "../css/layout.module.scss"

const Layout = ({ children }) => {

  return (
    <div className={layoutStyles.layout}>
      <Header />
      <main>
        <div className={layoutStyles.layout_inner}>
          {children}
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default Layout
