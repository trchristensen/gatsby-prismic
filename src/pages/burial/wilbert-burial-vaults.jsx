import React from "react"
import PropTypes from "prop-types"
import { graphql } from "gatsby"
import styled from "@emotion/styled"
import Layout from "components/Layout"
import ProjectCard from "components/ProjectCard"
import PageHelmet from "components/_util/PageHelmet"
import LinkAction from "components/_ui/LinkAction"
import { RichText } from "prismic-reactjs"

const WilbertBurialVaults = ({ Vaults, meta }) => {
    const [filter, setFilter] = React.useState('')

    const handleFilter = (e, filter) => {
        const activeClass = `border-white`;
        setFilter(filter);
        let active = document.querySelectorAll(`.filter-btn.${activeClass}`);
        for (var i = 0; i < active.length; i++) {
          active[i].classList.remove(activeClass)
        }
        e.target.classList.add(activeClass);
    }
    return (
      <>
        <PageHelmet
          title={meta.title}
          titleTemplate={`%s | Wilbert Burial Vaults`}
          meta={meta}
        />
        <Layout>
          <div className="w-full lg:2/3">
            <div className="mb-20">
              <h1 className="mb-4">Wilbert Burial Vaults</h1>
              <p className="p">
                You want the best protection available for your loved ones.
                Years after you select a Wilbert
                <sup className="text-xs">®</sup> brand reinforced burial vault,
                you'll know that you made the right decision by choosing the
                highest level of protection.
              </p>
            </div>
            <div className="shadow-lg py-10 px-6 flex">
              <div className="sm: w-full w-1/2 py-8 px-4">
                <h2 className="mb-2 text-3xl">Premium Protection</h2>
                <p>
                  Some description about how you should pay thousands more for a
                  concrete box your loved one will be buried in.
                </p>
              </div>
              <div className="sm:w-full w-1/2">
                <img
                  className="object-cover h-48 w-full"
                  src="https://images.prismic.io/christyvault/9467082a-c4c5-4d58-913c-a58422186707_BV-BT-750.jpg?auto=compress,format&rect=0,142,750,350&w=750&h=350"
                  alt="premium protection"
                />
              </div>
            </div>
            <div className="border flex justify-center items-center flex-wrap mb-20 bg-blue-900 text-white font-sans text-xl">
              <button
                className="sm:flex px-6 pt-4 pb-2 mb-2 border-b-2 border-transparent focus:outline-none filter-btn premium-protection"
                onClick={e => handleFilter(e, "Premium Protection")}
              >
                Premium Protection
              </button>
              <button
                className="sm:flex px-6 pt-4 pb-2 mb-2 border-b-2 border-transparent focus:outline-none filter-btn standard-protection"
                onClick={e => handleFilter(e, "Standard Protection")}
              >
                Standard Protection
              </button>
              <button
                className="sm:flex px-6 pt-4 pb-2 mb-2 border-b-2 border-transparent focus:outline-none filter-btn basic-protection"
                onClick={e => handleFilter(e, "Basic Protection")}
              >
                Basic Protection
              </button>
              <button
                className="sm:flex px-6 pt-4 pb-2 mb-2 border-b-2 border-transparent focus:outline-none filter-btn premium-protection"
                onClick={e => handleFilter(e, "")}
              >
                All
              </button>
            </div>
            <div className="row flex flex-wrap">
              {Vaults.filter(vault =>
                vault.node._meta.tags[0].includes(filter)
              ).map((vault, index) => {
                let v = vault.node
                return (
                  <div
                    key={index}
                    className={`sm:w-full md:w-1/2 lg:w-1/3 mb-6 overflow-hidden flex flex-row flex-wrap items-between ${v._meta.tags.map(
                      tag => tag.replace(/\s+/g, "-").toLowerCase() + " "
                    )}`}
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
                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 text-xs">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </Layout>
      </>
    )}

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
