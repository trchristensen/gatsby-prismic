import React from "react"
import PropTypes from "prop-types"
import { graphql } from "gatsby"
import styled from "@emotion/styled"
import Layout from "components/Layout"
import ProjectCard from "components/ProjectCard"
import PageHelmet from "components/_util/PageHelmet"
import LinkAction from "components/_ui/LinkAction"
import { RichText } from "prismic-reactjs"

const WilbertBurialVaults = ({ Vaults, meta }) => (
  <>
    <PageHelmet
      title={meta.title}
      titleTemplate={`%s | Wilbert Burial Vaults`}
      meta={meta}
    />
    <Layout>
      <div className="mb-20">
        <h1 className="mb-4">Wilbert Burial Vaults</h1>
        <p className="p">
          You want the best protection available for your loved ones. Years
          after you select a Wilbert<sup className="text-xs">®</sup> brand reinforced burial vault,
          you'll know that you made the right decision by choosing the highest
          level of protection.
        </p>
      </div>
      <div class="row flex flex-wrap">
        {Vaults.map((vault, index) => {
          let v = vault.node
          return (
            <div
              key={index}
              class="sm:w-full lg:w-1/3 mb-6 overflow-hidden flex flex-row flex-wrap items-between"
            >
              <div class="md:flex-shrink-0 px-6">
                <img
                  src={v.image_full.url}
                  alt={v.image_full.alt}
                  className="rounded-lg md:w-56"
                />
              </div>
              <div class="w-full px-6 py-4">
                <div class="font-bold text-l">
                  <h3>{v.name[0].text}</h3>
                </div>
                <div class="text-gray-700 text-base">
                  {RichText.render(v.short_description)}
                </div>
              </div>
              <div class="px-6 pb-4">
                {v._meta.tags.map(tag => (
                  <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )
        })}
      </div>
    </Layout>
  </>
)

export default ({ data }) => {
  const vaults = data.prismic.allBurial_vaults.edges
  const meta = data.site.siteMetadata
  if (!vaults) return null

  return <WilbertBurialVaults Vaults={vaults} meta={meta} />
}

WilbertBurialVaults.propTypes = {
  Vaults: PropTypes.array.isRequired,
}

export const query = graphql`
  {
    prismic {
      allBurial_vaults {
        edges {
          node {
            name
            short_description
            description
            image_full
            order_number
            inner_length
            inner_width
            inner_height
            outer_length
            outer_width
            outer_height
            base_weight
            cover_weight
            total_weight
            _meta {
              tags
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
