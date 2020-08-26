import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import "./header.css"

const Header = ({ siteTitle }) => (
  <header>
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `0 1.0875rem 1.45rem`,
      }}
    >
      <h1>ÜberLeben - SurVive</h1>
      <p>An exhibition in Berlin's Parochialkirche, January 2020</p>
      <nav className="header-nav">
        <ul>
          <li>
            <Link to="/events/">Events</Link>
          </li>
          <li>
            <Link to="/360tour/">360 tour</Link>
          </li>
          <li>
            <Link to="/catalogue/">Catalogue</Link>
          </li>
          <li>
            <Link to="/artists/">Artists</Link>
          </li>
        </ul>
      </nav>
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
