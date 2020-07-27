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
  </Layout>
)

export default IndexPage
