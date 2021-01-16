/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React, { useState } from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { useStaticQuery, graphql, Link } from "gatsby"

import Curtain from "./curtain"
import Header from "./header"
import Footer from "./footer"

const NavBarLink = styled(Link)`
  text-decoration: none;
  text-transform: capitalize;
  color: #626262;
  &:hover {
    color: #4287f5;
  }
  @media screen and (max-width: 724px) {
    display: none
  },
`

const Layout = ({ title, children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          navbar {
            to
            label
          }
        }
      }
    }
  `)

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <>
      <Curtain onClose={() => setMobileMenuOpen(false)} isOpen={mobileMenuOpen}>
        {data.site.siteMetadata.navbar.map(item => (
          <NavBarLink to={item.to}>{item.label}</NavBarLink>
        ))}
      </Curtain>
      <div
        style={{
          margin: `0px auto`,
          maxWidth: 800,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <Header setMobileMenuOpen={setMobileMenuOpen} />
        <main>
          <h1 style={{ visibility: "hidden", margin: "0px", fontSize: "1px" }}>
            {title}
          </h1>
          {children}
        </main>
        <Footer />
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
