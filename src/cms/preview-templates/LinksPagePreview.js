import React from 'react'
import PropTypes from 'prop-types'
import { LinksPageTemplate } from '../../templates/Links-page'

const LinksPagePreview = ({ entry, widgetFor }) => (
  <LinksPageTemplate
    title={entry.getIn(['data', 'title'])}
    content={widgetFor('body')}
  />
)

LinksPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default LinksPagePreview
