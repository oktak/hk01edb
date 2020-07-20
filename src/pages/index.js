import React from "react"
import { Location } from "@reach/router"
import { graphql } from "gatsby"
import { injectIntl, IntlContextConsumer, Link } from "gatsby-plugin-intl"
import { Tabs, TabList, Tab, TabPanels, TabPanel } from "@reach/tabs"
// import { FaSearch } from "react-icons/fa"

import Layout from "../components/layout"
import SEO from "../components/atoms/SEO"

import "@reach/tabs/styles.css"
import "./index.css"

const IndexPage = ({ intl, data }) => {
  // const tagObj = data.allApTagCsv.edges
  // const itemObj = data.allApLinkCsv.edges

  return (
    <Layout>
      <IntlContextConsumer>
        {({ languages, language: currentLocale }) => (
          <>
            <Location>
              {({ navigate, location }) => (
                <>
                  <SEO
                    title={intl.formatMessage({ id: "common.home" })}
                    description={intl.formatMessage({ id: "common.home" })}
                    host={data.site.siteMetadata.host}
                    url={location.pathname}
                  />
                </>
              )}
            </Location>

          </>
        )}
      </IntlContextConsumer>
    </Layout>
  )
}

export default injectIntl(IndexPage)

export const IndexQuery = graphql`
  query {
    allApLinkCsv {
      edges {
        node {
          id
          cname
          ename
          subject_tag_ids
          maincategory_tag_ids
          media_tag_ids
        }
      }
    }
    allApTagCsv {
      edges {
        node {
          id
          parent_id
          category_id
          zh
          en
          icon
          example
        }
      }
    }
    site {
      siteMetadata {
        host
      }
    }
  }
`
