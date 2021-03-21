import * as React from "react"
import PropTypes from "prop-types"
import * as footerStyles from "./footer.module.scss"

const Footer = () => (
  <footer className={footerStyles.footer}>
      © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.com">Gatsby</a>
  </footer>
)

Footer.propTypes = {
  siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: ``,
}

export default Footer
