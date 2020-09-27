import React from 'react'
import { Helmet } from 'react-helmet'
import PropTypes from 'prop-types'

import Layout from '../components/Layout'
import BlogRoll from '../components/BlogRoll'

import { graphql } from 'gatsby'
import { withPrefix } from 'gatsby'

export const IndexPageTemplate = ({
  title
}) => (
  <div>
    <section className="section section--gradient">
      <div className="container">
        <div className="columns">
          <div className="column is-12">
            <div className="content">
              <BlogRoll />
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
)

IndexPageTemplate.propTypes = {
  title: PropTypes.string,
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <IndexPageTemplate
        title={frontmatter.title}
        helmet={
          <Helmet titleTemplate="%s | にわかストリートジャーナル">
            <meta name="description" content={`${frontmatter.description}`} />
            <meta property="og:site_name" content="にわかストリートジャーナル" />
            <meta property="og:title" content={frontmatter.title} />
            <meta property="og:type" content="website" />
            <meta property="og:image" content={`${withPrefix('/')}img/og-image.jpg`} />
            <meta name="twitter:card" content="summary" />
            <meta name="twitter:title" content={frontmatter.title} />
            <meta name="twitter:description" content={frontmatter.description} />
            <meta name="twitter:image" content={`${withPrefix('/')}img/og-image.jpg`} />
          </Helmet>
        }
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        description
      }
    }
  }
`