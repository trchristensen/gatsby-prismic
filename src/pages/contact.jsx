import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { graphql } from "gatsby"
import styled from "@emotion/styled"
import Layout from "components/Layout"
import { Link } from "react-router-dom"

const ContactTitle = styled("h1")`
  margin-bottom: 1em;
`

const Contact = ({ meta }) => (
  <>
    <Helmet
      title={`Contact Us `}
      titleTemplate={`%s | Contact | Prist, Gatsby & Prismic Starter`}
      meta={[
        {
          name: `description`,
          content: meta.description,
        },
        {
          property: `og:title`,
          content: `Contact | Prist, Gatsby & Prismic Starter`,
        },
        {
          property: `og:description`,
          content: meta.description,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: meta.author,
        },
        {
          name: `twitter:title`,
          content: meta.title,
        },
        {
          name: `twitter:description`,
          content: meta.description,
        },
      ].concat(meta)}
    />
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
