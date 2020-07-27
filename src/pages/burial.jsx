import React from "react"
import PropTypes from "prop-types"
import { graphql } from "gatsby"
import styled from "@emotion/styled"
import Layout from "components/Layout"
import ProjectCard from "components/ProjectCard"
import PageHelmet from "../components/_util/PageHelmet"
import LinkAction from "../components/_ui/LinkAction"

const Work = ({ projects, meta }) => (
  <>
    <PageHelmet title={meta.title} titleTemplate={`%s | Burial`} meta={meta} />
    <Layout>
      <h1 className="mb-4">Burial</h1>
      <div className="row flex">
        <div className="shadow-lg flex flex-row flex-wrap">
          <div className="sm:w-full md:w-1/2">
            <div
              className="bg-contain bg-center"
              style={{
                backgroundImage:
                  "url(https://christyvault.net/wp-content/uploads/Back-Hoe-Burial-Vaults.jpg)",
              }}
            >
              <img
                src="http://christyvault.net/wp-content/uploads/Back-Hoe-Burial-Vaults.jpg"
                alt="burial vault diagram"
                className="invisible"
              />
            </div>
          </div>
          <div className="sm:w-full md:w-1/2 pt-10 px-10 pb-10">
            <h2>What is a burial vault?</h2>
            <p>
              A burial vault is a lined and sealed outer receptacle that houses
              the casket. It protects the casket from the weight of the earth
              and heavy maintenance equipment that will pass over the grave. It
              also helps resist water and preserves the beauty of the cemetery
              or memorial park by preventing the ground from settling.
            </p>
            <div className="block mt-4" >
                <LinkAction to="/burial/wilbert-burial-vaults" text="Wilbert Burial Vaults" />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  </>
)

export default ({ data }) => {
  const projects = data.prismic.allProjects.edges
  const meta = data.site.siteMetadata
  if (!projects) return null

  return <Work projects={projects} meta={meta} />
}

Work.propTypes = {
  projects: PropTypes.array.isRequired,
}

export const query = graphql`
  {
    prismic {
      allProjects {
        edges {
          node {
            project_title
            project_preview_description
            project_preview_thumbnail
            project_category
            project_post_date
            _meta {
              uid
            }
          }
        }
      }
    }
    site {
      siteMetadata {
        title
        description
        author
      }
    }
  }
`
