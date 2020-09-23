import React from 'react'
import PropTypes from 'prop-types'
import { kebabCase } from 'lodash'
import { Helmet } from 'react-helmet'
import { graphql, Link } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'

import { 
  FacebookShareButton, 
  FacebookIcon, 
  LineShareButton, 
  LineIcon,
  TwitterShareButton,
  TwitterIcon
} from 'react-share';

export const BlogPostTemplate = ({
  content,
  contentComponent,
  description,
  date,
  tags,
  title,
  helmet,
  url,
}) => {
  const PostContent = contentComponent || Content

  const SNSSection = ({title
    , articleUrl}) => {
      return (
        <div>
          <FacebookShareButton url={articleUrl}>
            <FacebookIcon size={35} round />
          </FacebookShareButton>
          &nbsp;
          <LineShareButton url={articleUrl} >
            <LineIcon size={35} round />
          </LineShareButton>
          &nbsp;
          <TwitterShareButton title={title} url={articleUrl} >
            <TwitterIcon size={35} round />
          </TwitterShareButton>
        </div>
      )
    }

  return (
    <section className="section">
      {helmet || ''}
      <div className="container content">
        <div className="columns">
          <div className="column is-8 is-offset-1">
            <table width="100%">
              <tr>
                <td>
                  {tags && tags.length ? (              
                    <ul className="taglist">
                      {tags.map((tag) => (
                        <li key={tag + `tag`}>
                          <Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </td>
                <td align="right">
                  {date}
                </td>
              </tr>
            </table>
            <div className="title is-size-3 has-text-weight-bold is-bold-light">
              {title}
            </div>
            <p>{description}</p>
            <PostContent content={content} />
            {tags && tags.length ? (
              <div style={{ marginTop: `3rem` }}>
                <h4>タグ</h4>
                <ul className="taglist">
                  {tags.map((tag) => (
                    <li key={tag + `tag`}>
                      <Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
            <div style={{ marginTop: `2rem` }}>
              <h4>シェア</h4>
              <SNSSection title={title+' | にわかストリートジャーナル'} articleUrl={url} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

BlogPostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object,
}

const BlogPost = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <BlogPostTemplate
        content={post.html}
        contentComponent={HTMLContent}
        description={post.frontmatter.description}
        helmet={
          <Helmet titleTemplate="%s | にわかストリートジャーナル">
            <title>{`${post.frontmatter.title}`}</title>
            <meta
              name="description"
              content={`${post.frontmatter.description}`}
            />
          </Helmet>
        }
        tags={post.frontmatter.tags}
        title={post.frontmatter.title}
        date={post.frontmatter.date}
        url={window.location.href}
      />
    </Layout>
  )
}

BlogPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default BlogPost

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "YYYY/MM/DD")
        title
        description
        tags
      }
    }
  }
`