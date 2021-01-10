import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'

export const LinksPageTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content

  return (
    <section className="section">
      <div className="container content">
        <div className="columns">
          <div
            className="column is-10 is-offset-1"
            style={{ marginBottom: '6rem' }}
          >
            <h3 className="title is-size-3 has-text-weight-bold is-bold-light">
              {title}
            </h3>
            <PageContent className="content" content={content} />
          </div>
        </div>
      </div>
    </section>
  )
}

LinksPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const LinksPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <LinksPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
      />
    </Layout>
  )
}

LinksPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default LinksPage

export const LinksPageQuery = graphql`
  query LinksPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`
