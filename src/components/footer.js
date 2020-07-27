import React from "react"
import { Link } from "gatsby"

const Footer = function () {
  return (
    <footer>
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <p>Location:</p>
        <p>Klosterstrasse 67 10179 Berlin</p>
        <Link to="/page-2/">Go to page 2</Link>
        <p>&copy; {new Date().getFullYear()} ÜberLeben</p>
      </div>
    </footer>
  )
}

export default Footer
