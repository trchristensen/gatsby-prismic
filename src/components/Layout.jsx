import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import styled from "@emotion/styled"
import { Global } from "@emotion/core"
import globalStyles from "styles/global"
import typeStyles from "styles/typography"
import dimensions from "styles/dimensions"
import Footer from "components/Footer"
import Header from "components/Header"
import SideBar from "./Sidebar"
// import "styles/fonts.scss"
// import "styles/app.scss"

const LayoutContainer = styled.div`
  transition: all 0.5s ease 0s;
  max-width: ${dimensions.maxwidthDesktop}px;
  padding-left: ${dimensions.paddingHorizontalDesktop}em;
  padding-right: ${dimensions.paddingHorizontalDesktop}em;
  margin: 0 auto;

  @media (max-width: ${dimensions.maxwidthTablet}px) {
    padding-left: ${dimensions.paddingHorizontalTablet}em;
    padding-right: ${dimensions.paddingHorizontalTablet}em;
  }

  @media (max-width: ${dimensions.maxwidthMobile}px) {
    padding-left: ${dimensions.paddingHorizontalMobile}em;
    padding-right: ${dimensions.paddingHorizontalMobile}em;
  }

  .Layout__content {
    padding-bottom: 5em;
  }
`

const SideBarContainer = styled.div`
  @media (min-width: ${dimensions.maxwidthTablet + 1}px) {
    display: none;
  }
`

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <SideBarContainer className="div">
          <SideBar
            id={"sidebar"}
            disableAutoFocus
            reveal
            right
            pageWrapId={"layoutContainer"}
            outerContainerId={"___gatsby"}
          />
        </SideBarContainer>
        <LayoutContainer className="div" id="layoutContainer">
          <Global styles={[globalStyles, typeStyles]} />
          <div className="Layout" id="layout">
            <Header />
            <main className="Layout__content">{children}</main>
            <Footer />
          </div>
        </LayoutContainer>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
