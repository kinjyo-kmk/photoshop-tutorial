import * as React from "react"
import PropTypes from "prop-types"
import * as layoutStyles from "./layout.module.scss"

import Header from "./header"
import Footer from "./footer"

const Layout = ({ children }) => {
  return (
    <>
      <Header />
        <main>
          <div className={layoutStyles.layout}>
            <div className={layoutStyles.layout_inner}>
              {children}
            </div>
          </div>
        </main>
        <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
