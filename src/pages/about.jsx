import React from "react"
// import PropTypes from "prop-types"
import { graphql } from "gatsby"
import styled from "@emotion/styled"
import Layout from "components/Layout"
import PageHelmet from "../components/_util/PageHelmet";

const AboutTitle = styled("h1")`
  margin-bottom: 1em;
`

const About = ({ meta }) => (
  <>
    <PageHelmet title={meta.title} titleTemplate={`%s | About`} meta={meta} />
    <Layout>
      <AboutTitle>About Us</AboutTitle>
      <>
      </>
    </Layout>
  </>
)

export default ({ data }) => {
  const meta = data.site.siteMetadata
  return <About meta={meta} />
}

export const query = graphql`
  {
    site {
      siteMetadata {
        title
        description
        author
      }
    }
  }
`
