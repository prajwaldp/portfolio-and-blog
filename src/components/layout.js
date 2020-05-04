/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div className="bg-gray-100">
      <Header siteTitle={data.site.siteMetadata.title} />
      <div className="pt-10 md:px-20 lg:px-40">
        <main>{children}</main>
      </div>
      <footer className="bg-purple-500 p-10 text-center mt-10 text-white">
        Built with GatsbyJS. Source Code Licenced <a href="https://opensource.org/licenses/mit-license.php">MIT</a>
      </footer>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
