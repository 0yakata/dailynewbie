import React from 'react'
import PropTypes from 'prop-types'
import { WriterPageTemplate } from '../../templates/writer-page'

const WriterPagePreview = ({ entry, widgetFor }) => (
  <WriterPageTemplate
    title={entry.getIn(['data', 'title'])}
    content={widgetFor('body')}
  />
)

WriterPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default WriterPagePreview
