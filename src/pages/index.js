import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Arrow from "../components/image"
import TourImage from "../components/image"
import EventImage from "../components/image"
import CatalogueImage from "../components/image"
import ArtistsImage from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>ÜberLeben - SurVive</h1>
    <p>An exhibition in Berlin's Parochialkirche, January 2020</p>
    <nav>
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
    <p></p>
    <ul>
      <li>
        <Link to="/events/">
          <EventImage />
          <h3>Events</h3>
          <p>
            Explore the events to accompany the exhibition <Arrow />
          </p>
        </Link>
      </li>
      <li>
        <Link to="/360tour/">
          <TourImage />
          <h3>360 tour</h3>
          <p>
            Explore the exhibition <Arrow />
          </p>
        </Link>
      </li>
      <li>
        <Link to="/catalogue/">
          <CatalogueImage />
          <h3>Catalogue</h3>
          <p>
            Learn More <Arrow />
          </p>
        </Link>
      </li>
      <li>
        <Link to="/artists/">
          <ArtistsImage />
          <h3>Artists</h3>
          <p>
            Learn More <Arrow />
          </p>
        </Link>
      </li>
    </ul>
    <footer>
      <p>Location:</p>
      <p>Klosterstrasse 67 10179 Berlin</p>
      <Link to="/page-2/">Go to page 2</Link>
      <p>&copy; {new Date().getFullYear()} ÜberLeben</p>
    </footer>
    <br />
  </Layout>
)

export default IndexPage
