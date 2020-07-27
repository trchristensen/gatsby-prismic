import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { graphql } from "gatsby"
import styled from "@emotion/styled"
import Layout from "components/Layout"
import { Link } from "react-router-dom"

import PageHelmet from '../components/_util/PageHelmet'

const ContactTitle = styled("h1")`
  margin-bottom: 1em;
`

const Contact = ({ meta }) => (
  <>
    <PageHelmet title={meta.title} titleTemplate={`%s | Contact`} meta={meta} />
    <Layout>
      <ContactTitle>Contact Us</ContactTitle>
      <>
        <a href="mailto:hello@toddchristensen.net">Email</a>
      </>
    </Layout>
  </>
)

export default ({ data }) => {
  const meta = data.site.siteMetadata
  return <Contact meta={meta} />
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
