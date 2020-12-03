import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `DarkSlateBlue`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `LightCoral`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>


      </h1>
     
        <p> <h2 style={{
            color: `AntiqueWhite`,
            textDecoration: `none`,
          }}>&nbsp;&nbsp;→   <Link  to="/movies">movies</Link> </h2></p>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
