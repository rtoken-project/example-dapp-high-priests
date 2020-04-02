import React from "react"
import styled from "styled-components"

import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./Header/Header"
import Footer from "./Footer/Footer"

import "./layout.css"

const Background = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  left: 0;
  bottom: 0;
  background-color: #121427;
  background-size: cover;
  background-position: 50% 100%;

  @media (max-width: 720px) {
    background-position: 0% 0%;
  }
`

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
    <Background>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 1280,
          padding: `0px 1.0875rem 1.45rem`,
          paddingTop: 0,
        }}
      >
        <main>{children}</main>
      </div>
      <Footer />
    </Background>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
